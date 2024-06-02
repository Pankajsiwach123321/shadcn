import React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
const VerifyOtp = () => {
  return (
    <section className=" flex justify-center items-center min-h-screen flex-col px-3">
      <h2 className=" text-center pb-9">OTP UI only not function</h2>
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <Button className="my-4">
        <a href="/" className="w-full">
          Back
        </a>
      </Button>
    </section>
  );
};

export default VerifyOtp;
