---
title: 'Schedulify'
image: '/projects/schedulify.png'
technologies:
  [
    'Next.js',
    'TypeScript',
    'React',
    'Tailwind CSS',
    'PostgreSQL',
    'Prisma',
    'NextAuth',
    'Google Calendar API',
    'Zod',
    'React Hook Form',
    'shadcn/ui',
    'Framer Motion',
  ]
github: 'https://github.com/prathamgambhir/schedulify'
live: 'https://scheduulify.vercel.app'
ytLink: 'https://www.youtube.com/embed/2oWW8-w2EbU?autoplay=1'
timeline: '2 months'
role: 'Full Stack'
team: 'Solo'
status: 'completed'
featured: true
challenges:
  [
    'Calendar synchronization',
    'Time zone handling',
    'OAuth authentication',
    'Preventing double bookings',
    'Designing scalable server actions',
    'UX for availability management',
  ]
learnings:
  [
    'SaaS architecture with Next.js App Router',
    'Google Calendar & Meet API integration',
    'Secure authentication using NextAuth',
    'Handling real-world scheduling edge cases',
    'Designing production-ready dashboards',
    'Server Actions & database-driven workflows',
  ]
isPublished: true
---

# Schedulify | Smart Meeting Scheduling Platform

## Overview

Schedulify is a full-stack scheduling project
It removes the back-and-forth of scheduling meetings by allowing users to share a booking link that automatically syncs with their calendar and generates meeting links.

The focus was on **real-world usability**, **clean UX**, and **production-ready architecture**.

---

## What Users Can Do

- **Create Booking Pages**  
  Personalized public booking URLs (e.g. `/username`) to share with anyone.

- **Manage Events**  
  Create multiple event types with custom durations, descriptions, and visibility.

- **Set Smart Availability**  
  Define weekly schedules, buffer times, and handle timezones automatically.

- **Automate Meetings**  
  Google Calendar events + Google Meet links generated instantly on booking.

- **Dashboard Control**  
  View bookings, manage events, and update availability from a central dashboard.

- **Authentication & Security**  
  Sign in via Google OAuth or credentials with secure session handling.

---

## Why I Built This

Scheduling meetings manually is inefficient and repetitive.

I wanted to build a **real SaaS product**, not just a CRUD app — something that:

- Solves a real problem developers & professionals face  
- Integrates deeply with third-party services (Google Calendar)  
- Handles edge cases like overlapping bookings & timezones  
- Feels polished enough to be used in production  

Schedulify was built to simulate **real startup-level complexity**.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Auth:** NextAuth.js (Google OAuth + Credentials)
- **UI:** Tailwind CSS, shadcn/ui
- **Forms & Validation:** React Hook Form + Zod
- **Animations:** Framer Motion
- **APIs:** Google Calendar & Google Meet

---

## Key Engineering Highlights

- Used **Server Actions** to keep sensitive logic secure  
- Implemented **atomic booking flows** to prevent race conditions  
- Designed **scalable database schemas** for events & availability  
- Built reusable UI components for dashboard & public pages  
- Added motion subtly to improve UX without hurting performance  

---

## After Launch

- Successfully deployed a production-ready SaaS
- Created a full demo walkthrough video
- Tested real-world booking flows end-to-end
- Identified UX improvements through self-testing
- Strengthened understanding of SaaS product thinking

---

## Future Improvements
 
- Team scheduling support  
- Advanced analytics for bookings  
- Own Calender API's
- Stripe integration for paid bookings



 
