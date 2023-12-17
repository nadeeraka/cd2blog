"use server";

import { revalidatePath } from "next/cache";

import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/models/post.models";
// import Order from "@/lib/database/models/order.model";
// import Event from "@/lib/database/models/event.model";
import { handleError } from "@/lib/utils";

import { CreateUserParams, PostParms, UpdateUserParams } from "@/types";

export async function createPost(post: PostParms) {
  try {
    await connectToDatabase();

    const newPost = await User.create(post);
    return JSON.parse(JSON.stringify(newPost));
  } catch (error) {
    handleError(error);
  }
}

// export async function getUserById(userId: string) {
//   try {
//     await connectToDatabase();

//     const user = await User.findById(userId);

//     if (!user) throw new Error("User not found");
//     return JSON.parse(JSON.stringify(user));
//   } catch (error) {
//     handleError(error);
//   }
// }
