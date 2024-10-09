"use client";
import React from "react";
import { SignOutButton, useUser } from "@clerk/nextjs";

const Dashboard = () => {
  const { user } = useUser();
  return (
    <div>
      Hello, {user?.lastName} <SignOutButton>SignOut</SignOutButton>
    </div>
  );
};

export default Dashboard;
