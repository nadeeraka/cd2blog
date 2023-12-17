"use server";

import { revalidatePath } from "next/cache";

import { connectToDatabase } from "@/lib/database";
import User from "@/lib/database/models/post.models";
// import Order from "@/lib/database/models/order.model";
// import Event from "@/lib/database/models/event.model";
import { handleError } from "@/lib/utils";
import { CreateUserParams, PostParms, UpdateUserParams } from "@/types";
import Category from "../database/category.model";
import Post from "@/lib/database/models/post.models";
import { auth } from "@clerk/nextjs";
const { userId }: { userId: string | null } = auth();

const getCategoryByName = async (name: string) => {
  return Category.findOne({ name: { $regex: name, $options: "i" } });
};

// CREATE
// export async function createEvent({ userId, event, path }: CreateEventParams) {
//   try {
//     await connectToDatabase();

//     const organizer = await User.findById(userId);
//     if (!organizer) throw new Error("Organizer not found");

//     const newEvent = await Event.create({
//       ...event,
//       category: event.categoryId,
//       organizer: userId,
//     });
//     revalidatePath(path);

//     return JSON.parse(JSON.stringify(newEvent));
//   } catch (error) {
//     handleError(error);
//   }
// }

export const createPost = async ({
  postId,
  title,
  userId,
  content,
  comments,
}: PostParms) => {
  try {
    await connectToDatabase();
    // check wether user exists
    // const user = await User.findById(userId);
    // if (!user) throw new Error("user not found");

    const newPost = await Post.create({
      postId,
      userId,
      title,
      content,
      comments,
    });
    return JSON.parse(JSON.stringify(newPost));
  } catch (error) {
    handleError(error);
  }
};

export const getAllPost = async () => {
  await connectToDatabase();
  let result: any = "";
  try {
    result = await Post.find({});
    console.log(result);
  } catch (error) {
    console.error(error);
    return false;
  }
  return result;
};

export const getPostById = async (id: string) => {
  await connectToDatabase();
  let result: any = "";
  try {
    result = await Post.findById(id);
    console.log(result);
  } catch (error) {
    console.error(error);
    return false;
  }
  return result;
};

export async function updatePost(id: string, post: UpdateUserParams) {
  try {
    await connectToDatabase();

    const updatedPost = await User.findByIdAndUpdate(id, post, {
      new: true,
    });
    if (!updatedPost) throw new Error("Post not found");
    revalidatePath(`/post/${id}`);
    return JSON.parse(JSON.stringify(updatedPost));
  } catch (error) {
    handleError(error);
  }
}

export async function deletePost(id: string) {
  try {
    await connectToDatabase();

    const deletedPost = await User.findByIdAndDelete(id);
    if (!deletedPost) throw new Error("Post not found");
    revalidatePath(`/post/${id}`);
    return JSON.parse(JSON.stringify(deletedPost));
  } catch (error) {
    handleError(error);
  }
}

// export async function getAllEvents({ query, limit = 6, page, category }:any) {
//   try {
//     await connectToDatabase()

//     const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {}
//     const categoryCondition = category ? await getCategoryByName(category) : null
//     const conditions = {
//       $and: [titleCondition, categoryCondition ? { category: categoryCondition._id } : {}],
//     }

//     const skipAmount = (Number(page) - 1) * limit
//     const eventsQuery = Event.find(conditions)
//       .sort({ createdAt: 'desc' })
//       .skip(skipAmount)
//       .limit(limit)

//     const events = await populateEvent(eventsQuery)
//     const eventsCount = await Event.countDocuments(conditions)

//     return {
//       data: JSON.parse(JSON.stringify(events)),
//       totalPages: Math.ceil(eventsCount / limit),
//     }
//   } catch (error) {
//     handleError(error)
//   }
// }

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
