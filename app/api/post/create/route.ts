import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
// import { createUser, deleteUser, updateUser } from '@/lib/actions/user.actions'
import { clerkClient } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { createPost } from "@/lib/actions/post.action";

export async function POST(req: Request) {
  const reqBody = await req.json();
  const { postId, userId, title, content, comments } = reqBody;

  const postData = {
    postId,
    userId,
    title,
    content,
    comments,
  };

  const newPost = await createPost(postData);

  //   if (newPost) {
  //     await clerkClient.users.updateUserMetadata(id, {
  //       publicMetadata: {
  //         userId: newPost._id,
  //       },
  //     });
  //   }

  return NextResponse.json({ message: "OK", post: newPost });
}

//   if (eventType === "user.updated") {
//     const { id, image_url, first_name, last_name, username } = evt.data;

//     const user = {
//       firstName: first_name,
//       lastName: last_name,
//       username: username!,
//       photo: image_url,
//     };

//     // const updatedUser = await updateUser(id, user)

//     // return NextResponse.json({ message: 'OK', user: updatedUser })
//   }

//   if (eventType === "user.deleted") {
//     const { id } = evt.data;

//     // const deletedUser = await deleteUser(id!)

//     // return NextResponse.json({ message: 'OK', user: deletedUser })
//   }

//   return new Response("", { status: 200 });
// }
