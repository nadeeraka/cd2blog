import CategoryFilter from "@/components/shared/PostFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
// import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { getAllPost } from "@/lib/actions/post.action";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  // const events = await getAllEvents({
  //   query: searchText,
  //   category,
  //   page,
  //   limit: 6,
  // });

  const events: any = [];
  console.log(getAllPost());
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-2 md:py-3">
        <div className="wrapper ">
          <div className="flex  justify-between items-center gap-4">
            <h2 className="h3-bold">let's create something meaning full</h2>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Create post</Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={[]}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
