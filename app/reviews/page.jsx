import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews, getSearchableReviews } from "@/lib/reviews";
import PaginationBar from "@/components/PaginationBar";
import SearchBox from "@/components/SearchBox";

export const revalidate = 30; // seconds

export const metadata = {
  title: "Reviews",
};

const PAGE_SIZE = 6;

export default async function ReviewsPage({ searchParams }) {
  const page = parsePageParams(searchParams.page);
  const { reviews, pageCount } = await getReviews(PAGE_SIZE, page);
  // console.log(
  //   "[REVIEW PAGE] reviews:",
  //   reviews.map(({ slug, title }) => ({ slug, title })),
  // );

  const renderedReviews = reviews.map(({ slug, title, image }, index) => (
    <li
      key={slug}
      className="w-80 rounded border bg-white shadow hover:shadow-xl"
    >
      <Link href={`/reviews/${slug}`}>
        {" "}
        <Image
          className="mb-2 rounded-t"
          src={image}
          alt=""
          width="320"
          height="180"
          priority={index === 0 || index === 1}
        />
        <h2 className="py-1 text-center font-orbitron font-semibold">
          {title}
        </h2>
      </Link>
    </li>
  ));

  return (
    <>
      <Heading>Reviews</Heading>
      <div className="flex justify-between pb-3">
        <PaginationBar page={page} pageCount={pageCount} href="/reviews" />
        <SearchBox />
      </div>
      <ul className="flex flex-row flex-wrap gap-3">{renderedReviews}</ul>
    </>
  );
}

function parsePageParams(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) & (page > 0)) {
      return page;
    }
  }
  return 1;
}
