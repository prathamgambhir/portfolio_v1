"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname, useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";


interface SmoothScrollProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: SmoothScrollProps) {
  const lenis = useLenis();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Use a ref to track if the last navigation was via back/forward buttons
  const isPopState = useRef(false);

  useEffect(() => {
    const handlePopState = () => {
      isPopState.current = true;
    };

    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  useEffect(() => {
    if (isPopState.current) {
      // If it was a back/forward action, reset the flag and do nothing
      isPopState.current = false;
      return;
    }
    // Scroll to the top when the pathname or search parameters change
    lenis?.scrollTo(0, { immediate: true });
    
  }, [pathname, searchParams, lenis]);

  // Better Settings: 
  // 'lerp' is usually smoother than 'duration' for high-end sites.
  // 0.1 is the "sweet spot" for most developers.
  const lenisOptions = {
    lerp: 0.1, 
    duration: 2,
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 2,
    infinite: false,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}