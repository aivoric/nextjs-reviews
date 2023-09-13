import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";
import Link from "next/link";

export default async function HomePage() {
  console.log("[Homepage] rendering");
  const { slug, title, date, image } = await getFeaturedReview();

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games, reviewed for you.</p>
      <div className="w-80 rounded border bg-white shadow hover:shadow-xl sm:w-full">
        <Link href={`/reviews/${slug}`} className="flex flex-col sm:flex-row">
          {" "}
          <img
            className="rounded-t sm:rounded-l sm:rounded-r-none"
            src={`/images/${slug}.jpg`}
            alt=""
            width="320"
            height="180"
          />
          <h2 className="py-1 text-center font-orbitron font-semibold sm:px-2">
            {title}
          </h2>
        </Link>
      </div>
    </>
  );
}
