import { auth } from "@clerk/nextjs";
import Editor from "@/app/Editor";

const CreatePost = () => {
  const { userId }: { userId: string | null } = auth();

  // const { sessionClaims } = auth();

  // const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-6">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Blog Post
        </h3>
      </section>

      <div className="">
        <Editor userId={userId} />
      </div>
    </>
  );
};

export default CreatePost;
