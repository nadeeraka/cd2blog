import CategoryFilter from "@/components/shared/PostFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
// import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-2 md:py-4">
        <div className="wrapper grid grid-cols-1 gap-2 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-4">
            <h3 className="h3-bold">
              The value of an idea lies in the using of it
            </h3>
            <p className="p-regular-20 md:p-regular-24">
              Success is the ability to go from failure to failure without
              losing your enthusiasm.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>

          {/* <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          /> */}
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">let's create something mining full</h2>

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
