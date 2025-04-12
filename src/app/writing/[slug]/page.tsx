"use client";

import { notFound } from "next/navigation";
import { flashFiction } from "@/app/data/flashFiction";
import { useParams } from "next/navigation";
import ReactMarkdown from "react-markdown";

const FlashFictionDetail = () => {
  const { slug } = useParams(); // Retrieve the slug from the URL

  const work = flashFiction.find((item) => item.slug === slug);

  if (!work) {
    notFound(); // Render the 404 page if the story is not found
  }

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-4">{work.title}</h1>
      <blockquote className="text-gray-600 italic mb-6">
        {work.quote}
      </blockquote>
      <article className="prose dark:prose-invert max-w-none">
        {"pdf" in work && work.pdf ? (
          <p>
            <a
              href={work.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-indigo-500 transition"
            >
              Read full story as PDF
            </a>
          </p>
        ) : (
          <ReactMarkdown>{work.content}</ReactMarkdown>
        )}
      </article>
    </div>
  );
};

export default FlashFictionDetail;
