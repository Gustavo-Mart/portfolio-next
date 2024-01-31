'use client'

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import styles from "./Hero.module.scss";
import { animateTitle, revealMenu } from "./animations";

export const LandingPage = () => {
  const timeline = useRef(gsap.timeline());
  const heroRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const tl = timeline.current;

      tl.add(animateTitle()).add(revealMenu(), 0);
    }, heroRef);

    return () => context.revert();
  }, []);
  
  return (
  <section className={styles.hero} ref={heroRef} data-scroll-container>
    <div className={styles.hero__top}>
      <div data-menu-item data-hidden>
        <a href="#">projects</a>
      </div>
      <span data-hero-line className={styles.hero__line}></span>

      <div data-menu-item data-hidden>
        <a href="#">about</a>
      </div>
      <span data-hero-line className={styles.hero__line}></span>
      <div data-menu-item data-hidden>
        <a href="#">contacts</a>
      </div>
    </div>

    <h1 className={styles.hero__title} data-scroll data-scroll-speed=".3">
      <span data-hidden data-title-first>
        Gustavo
      </span>
      <span data-hero-line className={styles.hero__line}></span>
      <span data-hidden data-title-last >
        Martins
      </span>
    </h1>
  </section>
  )
}
