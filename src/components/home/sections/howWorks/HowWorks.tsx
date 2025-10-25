import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import style from "./HowWorks.module.css";
import { Button } from "../../../common/buttons/Button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const HowWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !cardsRef.current) return;

      const cards = Array.from(cardsRef.current.children) as HTMLElement[];
      if (cards.length === 0) return;

      cards.forEach((card, index) => {
        gsap.set(card, {
          yPercent: index === 0 ? 0 : 120,
          scale: 1,
          zIndex: index + 1,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${window.innerHeight * (cards.length - 1)}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, index) => {
        if (index >= cards.length - 1) return;
        
        const nextCard = cards[index + 1];
        
        tl.to(card, {
          scale: 0.9,
          ease: "none",
          duration: 1,
        })
        .to(nextCard, {
          yPercent: 0,
          ease: "none",
          duration: 1,
        }, "<");
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={style.howWorksContainer}>
      <div className={style.infoContainer}>
        <h1 className={style.title}>
          How Tickly Works<span className={style.aiSpan}>?</span>
        </h1>
        <p className={style.paragraph}>
          Discovering your next event is as easy as 1-2-3.
        </p>
      </div>
       
      <div className={style.cardsContainer} ref={cardsRef}>
        <div className={style.card + " " + style.cardPurple}>
          <div className={style.iconContainer}>
            <span className="material-symbols-outlined">search</span>
          </div>
          <h2 className={style.itemTitle}>1. Discover with AI</h2>
          <p className={style.itemDescription}>
            Tell us what you're looking for, and our smart AI will sift through thousands of events
            to find your perfect match. Whether it's a concert, festival, or intimate gathering,
            we'll help you discover experiences tailored to your taste.
          </p>
        </div>
         
        <div className={style.card + " " + style.cardLavender}>
          <div className={style.iconContainer}>
            <span className="material-symbols-outlined">confirmation_number</span>
          </div>
          <h2 className={style.itemTitle}>2. Secure Your Ticket</h2>
          <p className={style.itemDescription}>
            Easily purchase your tickets through our secure platform. Your spot is guaranteed in
            just a few clicks. We handle all the details so you can focus on getting excited about
            your upcoming event.
          </p>
        </div>
         
        <div className={style.card + " " + style.cardViolet}>
          <div className={style.iconContainer}>
            <span className="material-symbols-outlined">celebration</span>
          </div>
          <h2 className={style.itemTitle}>3. Enjoy the Show</h2>
          <p className={style.itemDescription}>
            Access your tickets directly from your device. Just show up, scan, and enjoy an
            unforgettable experience. No printing required—everything you need is right in your
            pocket, ready to go.
          </p>
        </div>
         
        <div className={style.card + " " + style.cardButton}>
          <Button text="Try With a Prompt!" active={true} link="discoverevents"/>
        </div>
      </div>
    </section>
  );
};
