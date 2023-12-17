import { auth, currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Page() {
  // Get the userId from auth() -- if null, the user is not logged in
  const { userId } = auth();

  if (userId) {
    // Query DB for user specific information or display assets only to logged in users
  }

  // Get the User object when you need access to the user's information
  const user = await currentUser();
  // Use `user` to render user details or create UI elements
  // console.log(user?.email_addresses[0]);

  if (user?.firstName) {
    redirect("/profile/create");
  }
  redirect("/");
}
