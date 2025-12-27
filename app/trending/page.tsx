"use client";
import HashtagCard from "../components/HashtagCard";
import CopyRow from "../components/CopyRow";
import { HASHTAGS, CATEGORY_COLORS } from "../data/hashtags";

export default function TrendingPage() {
  const entries = Object.entries(HASHTAGS);

  return (
    <div className="w-full bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 xl:py-16">
        <header className="mb-6">
          <h1 className="mb-2 text-3xl font-extrabold text-slate-900">Trending Hashtags</h1>
          <p className="text-sm text-slate-600">Popular Instagram hashtags grouped by reel category — copy and use instantly.</p>
        </header>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {entries.map(([title, tags]) => (
            <div key={title} className="flex flex-col justify-between min-h-55">
              <div>
                <HashtagCard title={title} tags={tags} color={CATEGORY_COLORS[title] ?? "from-sky-100 to-indigo-100"} />
              </div>
              <div className="mt-4">
                <CopyRow tags={tags} />
              </div>
            </div>
          ))}
        </div>

        <div className="h-6" />
        <div className="pb-24" />
      </div>
    </div>
  );
}
