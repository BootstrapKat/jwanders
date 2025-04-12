import Link from "next/link";
import { flashFiction } from "@/app/data/flashFiction";

const WritingPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Writing</h1>
      <div className="space-y-8">
        {flashFiction.map((work) => (
          <section key={work.slug} className="border-b pb-4">
            <h2 className="text-xl font-semibold">{work.title}</h2>

            <blockquote className="italic">{work.quote}</blockquote>
            <p className="text-md text-gray-600 mt-2">{work.timeToRead}</p>

            {work.pdf ? (
              <Link
                href={work.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 underline inline-block mt-2"
              >
                Read PDF
              </Link>
            ) : work.content ? (
              <Link
                href={`/writing/${work.slug}`}
                className="text-indigo-500 underline inline-block mt-2"
              >
                Read More
              </Link>
            ) : work.published?.link ? (
              <a
                href={work.published.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 underline inline-block mt-2"
              >
                Read on {work.published.source}
              </a>
            ) : null}
          </section>
        ))}
      </div>
    </div>
  );
};

export default WritingPage;
