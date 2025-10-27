import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from "./Preloader.module.css";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const hasCompletedRef = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (hasCompletedRef.current) return;
          
          hasCompletedRef.current = true;
          
          setTimeout(() => {
            onComplete();
          }, 300);
        },
      });

      timelineRef.current = tl;

      tl.set(logoRef.current, {
        scale: 0,
        opacity: 0,
      })
        .to(logoRef.current, {
          scale: 2.5,
          opacity: 1,
          duration: 1.0,
          ease: "power2.out",
        })
        .to({}, { duration: 0.8 })
        .to(logoRef.current, {
          y: -30,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(logoRef.current, {
          y: 0,
          duration: 0.5,
          ease: "bounce.out",
        })
        .to({}, { duration: 0.5 })
        .to(logoRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          ease: "power3.in",
        })
        .to(
          containerRef.current,
          {
            opacity: 0,
            duration: 0.3,
          },
          "-=0.2"
        );
    }, containerRef);

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.preloader}>
      <div className={styles.content}>
        <div ref={logoRef} className={styles.logoContainer}>
          <img
            src="/images/tickly_logo.png"
            alt="Tickly Logo"
            className={styles.logo}
          />
        </div>
      </div>
    </div>
  );
};