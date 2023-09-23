import Image from "next/image";
import { notFound } from "next/navigation";
import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getReview, getSlugs } from "@/lib/reviews";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  // console.log("[ReviewPage] generateStaticParams:", slugs);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  if (!review) notFound();
  return {
    title: review.title,
  };
}

export default async function ReviewPage({ params: { slug } }) {
  console.log("[ReviewPage]:", slug);
  const review = await getReview(slug);
  if (!review) notFound();

  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="pb-3 font-semibold">{review.subtitle}</p>
      <div className="flex items-baseline gap-3">
        <p className="pb-2 italic">{review.date}</p>
        <ShareLinkButton />
      </div>
      <Image
        className="mb-2 rounded"
        src={review.image}
        alt=""
        width="640"
        height="360"
        priority
      />
      <article
        className="prose prose-slate max-w-screen-sm"
        dangerouslySetInnerHTML={{ __html: review.body }}
      />
    </>
  );
}
