import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ScrollStack.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ScrollStackItemProps {
  itemClassName?: string;
  children: React.ReactNode;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = "",
}) => (
  <div className={`${styles.scrollStackItem} ${itemClassName}`.trim()}>
    {children}
  </div>
);

interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = "",
  triggerRef,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!listRef.current) return;

      const items = Array.from(listRef.current.children) as HTMLElement[];
      if (items.length === 0) return;

      const pinElement = (triggerRef && triggerRef.current) ? triggerRef.current : containerRef.current;
      
      if (!pinElement) return;

      items.forEach((item, index) => {
        gsap.set(item, {
          yPercent: index === 0 ? 0 : 100,
          scale: 1,
          zIndex: items.length - index,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinElement,
          start: "top top",
          end: () => `+=${window.innerHeight * (items.length - 1)}`,
          scrub: true,
          pin: pinElement,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      items.forEach((card, index) => {
        if (index >= items.length - 1) return;
        
        const nextCard = items[index + 1];
        
        tl.to(card, {
          scale: 0.9,
          ease: "none",
        }, index)
        .to(nextCard, {
          yPercent: 0,
          ease: "none",
        }, index);
      });
    });

    return () => ctx.revert();
  }, [triggerRef]);

  return (
    <div ref={containerRef} className={`${styles.scrollStackContainer} ${className}`}>
      <div ref={listRef} className={styles.scrollStackList}>
        {children}
      </div>
    </div>
  );
};

export default ScrollStack;
