// import CheckoutButton from '@/components/shared/CheckoutButton';
import Collection from "@/components/shared/Collection";
import Header from "@/components/shared/Header";
import { getPostById } from "@/lib/actions/post.action";
import { dateFormat } from "@/lib/dateTime";
// import { getEventById, getRelatedEventsByCategory } from '@/lib/actions/post.action'
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Image from "next/image";

const PostDetails = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  console.log(id);
  const post = await getPostById(id);
  console.log(post);

  // const relatedEvents = await getRelatedEventsByCategory({
  //   categoryId: event.category._id,
  //   eventId: event._id,
  //   page: searchParams.page as string,
  // })

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <article className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-600 mb-4">
            Published on{" "}
            <span className="text-gray-700">
              {" "}
              {dateFormat(post?.createdAt)}
            </span>{" "}
          </p>

          <img
            src="https://placekitten.com/800/400"
            alt="Blog Post Image"
            className="w-full h-64 object-cover mb-6 rounded-lg"
          />

          <div className="prose max-w-full mb-6">
            <p>{post.content}</p>
          </div>

          <div className="flex items-center">
            <div className="flex-1 text-gray-700">
              <a href="#" className="hover:underline">
                Tags
              </a>
            </div>
            <div className="text-gray-500">
              <span className="mr-2">Share:</span>
              <a href="#" className="text-blue-500 hover:underline">
                Twitter
              </a>
              <span className="mx-2">/</span>
              <a href="#" className="text-blue-500 hover:underline">
                Facebook
              </a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default PostDetails;
