"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import { useCurrentUser } from "@/hooks/user-current-user";

import { LoginButton } from "./auth/login-button";
import { Button } from "./ui/button";

export function Hero() {
  const user = useCurrentUser();
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // create as many GSAP animations and/or ScrollTriggers here as you want...
      gsap
        .timeline()
        .fromTo(
          ".name-animation",
          { x: -100, opacity: 0, rotate: -10 },
          {
            x: 0,
            opacity: 1,
            rotate: 0,

            ease: "elastic.out(1,0.3)",
            duration: 1,
            transformOrigin: "left top",
            stagger: { each: 0.1, from: "random" },
          },
        )
        .fromTo(
          ".job-title",
          {
            y: 20,
            opacity: 0,
            scale: 1.2,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scale: 1,
            ease: "elastic.out(1,0.3)",
          },
        )
        .fromTo(
          ".siginin",
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "elastic.out(1,0.3)",
          },
        );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);
  const renderLetters = (text: string, key: string) => {
    return text.split("").map((letter, index) => (
      <span
        key={index}
        className={`name-animation name-animation-${key}-index inline-block opacity-0`}
      >
        {letter}
      </span>
    ));
  };

  return (
    <section ref={component}>
      <div className="flex min-h-[70vh] w-[1200px] flex-col items-center justify-evenly md:flex-row">
        <div className="">
          <h1
            className="mb-8 text-[clamp(3rem,20vmin,20rem)] font-extrabold leading-none tracking-tighter"
            aria-label="Claudio Lins Front End Developer"
          >
            <span className="block text-slate-300">
              {renderLetters("Claudio", "first")}
            </span>
            <span className="-mt-[.2em] block text-slate-500">
              {renderLetters("Lins", "last")}
            </span>
          </h1>
          <span className="job-title block bg-gradient-to-tr from-yellow-500 via-yellow-100 to-yellow-500 bg-clip-text text-2xl font-bold uppercase tracking-[.2em] text-transparent opacity-0 md:text-4xl">
            Front End Developer
          </span>
        </div>
        {!user && (
          <div className="siginin space-y-6 text-center opacity-0">
            <h1 className="text-muted drop-shadow-md">🔐 Auth</h1>
            <p className="text-muted ">A simple authentication service</p>
            <div className="">
              <LoginButton mode="modal" asChild>
                <Button variant={"secondary"} size={"lg"}>
                  Sign Inn
                </Button>
              </LoginButton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
