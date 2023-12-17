"use server";
import { createUser } from "@/lib/actions/use.actions";
import { auth, clerkClient, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export const createProfile = async (userName: string) => {
  console.log("run");
  const { userId } = auth();

  const user = await currentUser();
  if (user) {
    const new_user = {
      clerkId: user?.id,
      username: userName,
      firstName: user?.firstName,
      lastName: user?.lastName,
      photo: user?.imageUrl,
    };

    const newUser = await createUser(new_user);

    // if (newUser) {
    //   await clerkClient.users.updateUserMetadata(id, {
    //     publicMetadata: {
    //       userId: newUser._id,
    //     },
    //   });
    // }

    return NextResponse.json({ message: "OK", user: newUser });
  }
};
