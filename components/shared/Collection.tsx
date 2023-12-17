import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";
// import CreateButton from "./CreateButton";
import { Button } from "../ui/button";
import Link from "next/link";

type CollectionProps = {
  data: any;
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  collectionType?: "Events_Organized" | "My_Tickets" | "All_Events";
};

const Collection = ({
  data,

  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: any) => {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map((event: any) => {
              // const hasOrderLink = collectionType === "Events_Organized";
              // const hidePrice = collectionType === "My_Tickets";

              return (
                <li key={event._id} className="flex justify-center">
                  <Card event={event} />
                </li>
              );
            })}
          </ul>

          {totalPages > 1 && (
            <Pagination
              urlParamName={urlParamName}
              page={page}
              totalPages={totalPages}
            />
          )}
        </div>
      ) : (
        <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
          <h3 className="p-bold-20 md:h5-bold">No post found</h3>
          <Link href={"/post/create"}>
            <Button>Create post</Button>
          </Link>

          <p className="p-regular-14">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  );
};

export default Collection;
