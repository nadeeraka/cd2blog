"use client";
import React from "react";
import { ProfileForm } from "./form";
import { Separator } from "@radix-ui/react-separator";

const Profile = async () => {
  return (
    <div className="space-y-3">
      <div>
        <h3 className="text-3xl font-medium">Profile</h3>
        <p className="text-sm text-muted-foreground mb-4 mt-6">
          Lets Create your profile
        </p>
      </div>
      <Separator />
      <ProfileForm />
    </div>
  );
};

export default Profile;
