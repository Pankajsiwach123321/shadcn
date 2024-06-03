"use client";
import React, { useEffect } from "react";
import groovyWalkAnimation from "../../../public/assets/json/bounce.json";
import Lottie from "lottie-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
const LottieShow = () => {
  useEffect(() => {
    gsap.set(".moveX", { x: 0 });
    gsap.set(".caroot", { right: 0 });
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(".moveX", {
      x: "1400px",
      duration: 2,
    });
    tl.to(".caroot", {
      left: 0,
    });
    tl.to(".moveX", {
      rotateY: 180,
    });
    tl.to(".moveX", {
      x: "40px",
      duration: 2,
    });
    tl.to(".caroot", {
      right: 0,
    });
  }, []);
  return (
    <>
      <section className="body min-h-screen overflow-hidden">
        <div className="moveX inline-block">
          <Lottie
            animationData={groovyWalkAnimation}
            className="w-[400px] h-[400px]"
            loop={true}
          />
        </div>
        <Image
          className="absolute caroot  top-[120px] w-[100px]"
          src="/assets/images/carrot.png"
          width={60}
          height={60}
          alt="carrot"
        />
      </section>
      <section className="min-h-screen bg-black"></section>
    </>
  );
};

export default LottieShow;
