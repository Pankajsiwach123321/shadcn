"use client";
import React from "react";
import { Tilt } from "react-tilt";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 3000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 3000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
const TiltReact = () => {
  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="w-[400px]  flex justify-center mx-auto">
        <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </Tilt>
      </div>
    </section>
  );
};

export default TiltReact;
