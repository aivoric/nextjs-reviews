import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";

export const metadata = {
  title: "Reviews",
};

export default async function ReviewsPage() {
  const reviews = await getReviews();

  const renderedReviews = reviews.map(({ slug, title, image }) => (
    <li
      key={slug}
      className="w-80 rounded border bg-white shadow hover:shadow-xl"
    >
      <Link href={`/reviews/${slug}`}>
        {" "}
        <img
          className="mb-2 rounded-t"
          src={image}
          alt=""
          width="320"
          height="180"
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
      <ul className="flex flex-row flex-wrap gap-3">{renderedReviews}</ul>
    </>
  );
}
