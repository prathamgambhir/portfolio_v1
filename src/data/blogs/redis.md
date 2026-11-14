---
title: "What is Redis!?"
description: "How i went from 'what even is Redis' to building a live visitor counter on my portfolio. the course that helped, what i learned, and the small project i built to practice."
date: "2026-11-14"
author: "Pratham"
tags: ["Redis", "Upstash", "Next.js", "Server Actions", "Portfolio"]
cover: "/blogs/redis/redis-cover.png"
coverAlt: " "
---

# What is Redis ?

Hey, in this article i'm going to talk about Redis.

its is not a Guide or something like that, it is more like how i learned it, what i understood, and the small project i built to practice it.

So this is the journey, in the order it actually happened.

---

## It started with seeing Redis everywhere

I kept seeing Redis everywhere.

Job descriptions, system design videos, backend tutorials, random Twitter threads. Everyone said "just cache it in Redis" like it was obvious.

And i had no idea what it was.

&nbsp;

## First attempt : the docs

So i did what most devs do. i opened the Redis docs.

And honestly? i didn't understand much.

Too many commands, too many data types, and no real picture of where all of it fits. i was collecting words without knowing what any of them were for.


{/* IMAGE 2: Optional. A screenshot of the Redis docs page, or a funny meme-style "me reading docs" image. */}

![Me opening the Redis docs for the first time](/blogs/redis/doc-read-meme.jpg)

&nbsp;
## Second attempt : courses & videos

Next i started looking for courses and videos on Redis.

i found out that not many of them covered much. Most of them were a 20 minute "what is Redis, here is SET and GET" and that was it.

Then i found one playlist that actually went deep and covered a lot of stuff. i went through the whole thing.

If you are also starting, you can go through it too:

[Redis playlist on YouTube](https://www.youtube.com/watch?v=5YqP18Gyop0&list=PLkravDUKJN0JWfllRfj0cEcTn2etynCdO)

## Back to the docs

After completing the playlist, i went back to the docs.

And this time things started making sense.

Same docs, same commands, but now i had context. i knew what a hash was, i knew why `INCR` exists, i knew what people meant by "cache". The docs stopped being a wall of text and became a reference i could actually use.

In short: the docs were not bad, i just wasn't ready for them at the first place.

---

## What is Redis?

Redis is a database that lives in memory.

Most databases (Postgres, MongoDB) save data on disk. Redis keeps it in RAM, and that's what makes it fast.

The name is **Re**mote **Di**ctionary **S**erver, and that explains most of it. At its core, Redis is nothing more than a key-value store.

```code
"visitors" → 128
"user:42"  → "Pratham"
```

You give it a key, it gives you the value. No tables, no joins, no schema.

&nbsp;

{/* IMAGE 3: Simple diagram. Left: "Postgres → Disk (slower)". Right: "Redis → RAM (fast)". */}

![Disk vs RAM: where Postgres and Redis keep their data](/blogs/redis/redis-dia1.png)

&nbsp;

### Why not just use Postgres?

This was one of my first questions.

In short: Redis doesn't replace your main database. It sits next to it.

- Postgres / MongoDB: where the important data lives permanently
- Redis: where the fast, temporary or constantly changing stuff lives

You can persist Redis to disk if you want, but speed is the reason people use it, not durability.

&nbsp;

### Where Redis actually helps

These are the places where it made sense to me.

- **Caching.** Save the result of a slow query or API call, serve it instantly next time
- **Rate limiting.** Count requests per IP in the last minute
- **Sessions.** Keep login sessions somewhere fast
- **Counters.** Views, likes, visitors, anything that goes up by one again and again
- **Leaderboards.** Redis has a data type made for sorted scores
- **Queues and pub/sub.** Background jobs, messages between services

&nbsp;

What they all have in common is that the data is small, it's accessed constantly, and it needs to be fast.

---

## The commands i actually use

Redis has hundreds of commands.

You don't need them all. These are the ones that kept showing up in the playlist, in the docs, and later in my own code.

&nbsp;

### SET and GET

The most basic thing. Save a value, read it back.

```ts
await redis.set("name", "Pratham");
const name = await redis.get<string>("name");
```

&nbsp;

### SET with expiry

This is where Redis started feeling different from a normal database for me.

You can tell a key to delete itself after some time.

```ts
await redis.set("otp:9876", "482913", { ex: 300 });
```

That OTP is gone after 300 seconds. No cron job, no cleanup script.

&nbsp;

### EXPIRE and TTL

Same idea but for a key that already exists.

`EXPIRE` sets the timer and `TTL` tells you how many seconds are left.

&nbsp;

### DEL and EXISTS

Delete a key, or check if it's there.

```ts
await redis.exists("name");
await redis.del("name");
```

&nbsp;

### INCR and INCRBY

This is the one my project ended up depending on.

`INCR` adds 1 to a number stored at a key. If the key doesn't exist it starts from 0.

```ts
const count = await redis.incr("visitors");
```

The important part is that it's **atomic**.

If two people open your site at the exact same moment, Redis still handles them one by one. You never get two requests both reading 41 and both writing 42.

If you did this yourself in code (read the number, add 1, write it back) that bug is very real.

&nbsp;

{/* IMAGE 4: Small diagram of two simultaneous requests hitting INCR and Redis returning 42 and 43. Optional but explains atomicity well. */}

![Two simultaneous requests, two different results](/blogs/redis/redis-dia2.jpeg)

&nbsp;

### HSET and HGET (hashes)

When one value isn't enough, you can store an object under a key.

```ts
await redis.hset("user:1", { name: "Pratham", college: "DTU" });
const user = await redis.hgetall("user:1");
```

&nbsp;

### LPUSH, RPUSH and LRANGE (lists)

Ordered lists. Good for things like "last 10 activities" or a simple queue.

```Bash
LPUSH recent "post-1"
LPUSH recent "post-2"
LRANGE recent 0 -1
→ ["post-2", "post-1"]
```

&nbsp;

### SADD, SCARD and SISMEMBER (sets)

A set is a collection with no duplicates.

```Bash
SADD visitors:ids "user-1"
SADD visitors:ids "user-1"
SCARD visitors:ids
→ 1
```

Adding the same thing twice does nothing. That makes sets great for counting unique things, and i'll come back to this at the end.

&nbsp;

### ZADD and ZRANGE (sorted sets)

A set where every member has a score, and Redis keeps it sorted for you.

```Bash
ZADD leaderboard 1500 "alice"
ZADD leaderboard 1800 "bob"
ZRANGE leaderboard 0 -1 REV WITHSCORES
```

This is how people build leaderboards without sorting anything in their own code.

&nbsp;

### KEYS vs SCAN

One thing worth knowing early.

`KEYS *` lists every key and looks harmless. On a big database it blocks Redis while it runs, so people avoid it in production. `SCAN` does the same job in small batches.

For a small project it doesn't matter, but good to know before it does.

---

## Watching a playlist is not enough

After the playlist and the docs, i understood Redis.

But understanding and actually using it are different things. i knew what `INCR` does, but i had never typed it into a real project.

So i wanted to build a small thing to practice, something simple enough to finish in one sitting but real enough to deploy.

&nbsp;

## Figuring out what to build

i thought about a few things.

A cache for an API, a rate limiter, a leaderboard. All of them are good Redis projects, but they felt like too much setup for a first practice.

Then i thought why not a **visitor counter** on my own portfolio?

It's literally one number going up. It uses `GET` and `INCR`, it's something people can see, and i could ship it the same day.

The goal was a small pill that says: **You are the 128th visitor.**

Rules i set for myself:

- Count each person once, not on every refresh
- No separate API route, just a Next.js Server Action
- Make it look good, not like a 2005 hit counter

The idea is simple. Redis stores one number, and a cookie tells me if this browser has already been counted.

&nbsp;

{/* IMAGE 5: Flowchart. "Visitor opens site → has 'visitor' cookie? → Yes: just read the count. No: INCR in Redis + set cookie → return count" */}

![Flow of the visitor counter](/blogs/redis/redis-dia3.jpeg)

&nbsp;

## Why Upstash

Normal Redis runs as a server and your app connects to it with a persistent connection.

**Upstash** gave me Redis over a simple REST API. No connection to manage, and the free tier was more than enough for a portfolio XD.

---


## Steps to Build

If you want to build it too, this is everything you need.

i used **Next.js (App Router)**, **Tailwind**, **motion** for animation and **lucide-react** for the eye icon.

&nbsp;

### Step 1: Create the database

Go to the [Upstash console](https://console.upstash.com/), create a Redis database and pick a region close to where you deploy.

On the database page copy the REST URL and the REST token.

&nbsp;

### Step 2: Add environment variables

Put them in `.env.local` at the root of your project.

```env
UPSTASH_REDIS_REST_URL="https://your-db-url.upstash.io"
UPSTASH_REDIS_REST_TOKEN="your-secret-token"
```

Don't commit this file. When you deploy, add the same two variables in your Vercel project settings.

&nbsp;

### Step 3: Install the packages

```bash
npm install @upstash/redis motion lucide-react
```

&nbsp;

### Step 4: The server action

This is the core of the whole thing.

**`actions/visitor.ts`**

```ts
"use server";

import { Redis } from "@upstash/redis";
import { cookies } from "next/headers";

const redis = Redis.fromEnv();

export async function getVisitorCount() {
  const cookieStore = await cookies();
  const visitor = cookieStore.get("visitor");

  let count = await redis.get<number>("visitors");

  if (!visitor) {
    count = await redis.incr("visitors");

    cookieStore.set("visitor", "true", {
      maxAge: 60 * 60 * 24 * 365 * 100,
      path: "/",
      httpOnly: true,
      sameSite: "lax",
    });
  }

  return count ?? 0;
}
```

&nbsp;

What's happening here:

`Redis.fromEnv()` reads the two env variables and gives me a ready client.

Then i check for a cookie called `visitor`. i always `GET` the current count first. If the cookie is missing, it's a new visitor, so i call `INCR` and set the cookie.

Either way the function returns the number.

&nbsp;

A few small things i liked:

- `INCR` returns the new value, so i don't need a second read
- `httpOnly` means client side JavaScript can't touch the cookie
- `maxAge` is 100 years, so basically never expires
- `count ?? 0` covers the very first run when the key doesn't exist yet

&nbsp;

### Step 5: A small motion wrapper

Server components can't use `motion.div` directly, so i made a tiny client wrapper.

**`components/motion-div.tsx`**

```tsx
"use client";

import { motion } from "motion/react";

export const MotionDiv = motion.div;
```

&nbsp;

### Step 6: The counter component

**`components/visit-count.tsx`**

```tsx
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { Eye } from "lucide-react";
import { MotionDiv } from "./motion-div";
import { getVisitorCount } from "@/actions/visitor";

function ordinalSuffix(n: number) {
  const remainder = n % 100;
  if (remainder >= 11 && remainder <= 13) return "th";
  switch (n % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

export default function VisitorCounterProvider() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    getVisitorCount()
      .then((value) => setCount(value))
      .catch((err) => console.error("Failed to fetch visitor count:", err));
  }, []);

  return (
    <AnimatePresence mode="wait">
      {count !== null && (
        <MotionDiv
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="group flex items-center gap-3 rounded-2xl border border-neutral-200 bg-neutral-100 px-5 py-2.5 transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
        >
          <MotionDiv
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Eye className="size-5 text-neutral-500 transition-colors group-hover:text-neutral-700 dark:group-hover:text-neutral-300" />
          </MotionDiv>
          <p className="text-sm font-medium text-neutral-600 md:text-base dark:text-neutral-400">
            You are the{" "}
            <span className="font-bold text-neutral-900 tabular-nums dark:text-neutral-100">
              {count.toLocaleString()}
              <sup>{ordinalSuffix(count)}</sup>
            </span>{" "}
            visitor
          </p>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}
```

&nbsp;

What's going on:

- On mount, the component calls the server action once
- Until the number arrives it renders nothing, so you never see a fake `0` flash
- `AnimatePresence` fades the pill in when the data lands
- The eye icon wobbles on a loop, just a small detail i wanted
- `ordinalSuffix` turns 1 into 1st and 22 into 22nd, and handles the weird 11th, 12th, 13th cases

&nbsp;

{/* IMAGE 7: Close-up screenshot or short GIF of the pill animating in on your portfolio. */}

![The counter animating in](/blogs/redis/counter-demo.gif)

&nbsp;

### Step 7: Drop it in

Put it wherever you want. i put mine near the bottom of the page.

```tsx
import VisitorCounterProvider from "@/components/visit-count";

export default function Footer() {
  return (
    <footer>
      {/* other footer content */}
      <VisitorCounterProvider />
    </footer>
  );
}
```

&nbsp;

### Test it

Run the project and open the site. You should see the pill with a number.

Refresh a few times and it stays the same. Open an incognito window and it goes up by one.

You can also check Redis directly. In the Upstash **Data Browser** find the `visitors` key and you will see the same number.

&nbsp;

{/* IMAGE 8: Screenshot of the Upstash Data Browser showing the "visitors" key and its value. */}

![The visitors key inside Upstash Data Browser](/blogs/redis/redis-dia4.png)

---

## Final Words

That's it for the blog.

Looking back, the docs alone didn't work for me, a good playlist did, and then building something small made it stick. In that order.

If you have been putting off learning Redis, find a playlist(or watch that i linked) that goes deep, go through it, then open the docs again. After that, build one tiny thing that uses the shii u learned and you will be ready to go.

You can see the live version at the bottom of [my portfolio](https://pra1ham.vercel.app).