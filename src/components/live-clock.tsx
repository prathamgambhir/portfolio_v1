"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";

export default function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timeInterval = setInterval(() => setTime(new Date()), 10);

    return () => clearInterval(timeInterval);
  });

  return (
    <div className="font-mono text-sm flex items-center text-neutral-700 dark:text-neutral-400" suppressHydrationWarning>
      <span suppressHydrationWarning>| {format(time, "HH:mm:ss")}</span>
      <span suppressHydrationWarning>:{format(time, "SS")}</span>
      <span suppressHydrationWarning>:{format(time, "a")}</span>
    </div>
  );
}
