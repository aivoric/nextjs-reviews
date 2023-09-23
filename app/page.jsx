import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 30; // seconds

export default async function HomePage() {
  const { reviews } = await getReviews(3);

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <ul className="flex flex-col gap-3">
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="w-80 rounded border bg-white shadow hover:shadow-xl sm:w-full"
          >
            <Link
              href={`/reviews/${review.slug}`}
              className="flex flex-col sm:flex-row"
            >
              {" "}
              <Image
                className="rounded-t sm:rounded-l sm:rounded-r-none"
                src={review.image}
                alt=""
                width="320"
                height="180"
                priority={index === 0 || index === 1}
              />
              <div className="sm: flex flex-col px-2 py-1 text-center sm:text-left">
                <h2 className=" font-orbitron font-semibold">{review.title}</h2>
                <p className="hidden pt-2 sm:block">{review.subtitle}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
