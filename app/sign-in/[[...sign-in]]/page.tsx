import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  const defaultColor = "#d90429";
  const gradientColor = `linear-gradient(to bottom, ${defaultColor}, #ff0440)`;

  return (
    <div style={{ background: gradientColor }} className="flex justify-center w-full h-screen items-center flex-col gap-10">
      <SignIn />
    </div>
  );
};

export default SignInPage;
