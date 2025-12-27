"use client";
export default function HashtagCard({
  title,
  tags,
  color = "from-emerald-100 to-emerald-200",
}: {
  title: string;
  tags: string[];
  color?: string;
}) {
  // show all tags by default

  const icon = (() => {
    const t = title.toLowerCase();
    if (t.includes("travel")) {
      return (
        <svg className="h-5 w-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M2 12l20-8-8 20-4-8-8-4z" />
        </svg>
      );
    }
    if (t.includes("food") || t.includes("foodie") || t.includes("food")) {
      return (
        <svg className="h-5 w-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M5 7h14" />
        </svg>
      );
    }
    if (t.includes("fashion") || t.includes("style") || t.includes("ootd")) {
      return (
        <svg className="h-5 w-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
        </svg>
      );
    }
    if (t.includes("fit") || t.includes("fitness") || t.includes("gym")) {
      return (
        <svg className="h-5 w-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M20 7L9 18M9 7l11 11" />
        </svg>
      );
    }
    // default tech
    return (
      <svg className="h-5 w-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" d="M16 7l-8 10M8 7l8 10" />
      </svg>
    );
  })();

  return (
    <div className={`relative flex flex-col rounded-lg p-3 shadow-md bg-linear-to-br ${color} text-slate-900` }>
      <div className="flex items-start justify-between">
        <h4 className="text-sm font-semibold">{title}</h4>
        <div className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/80">{icon}</div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        {tags.map((t) => (
          <span key={t} className="inline-block rounded-full bg-white/80 px-2 py-0.5 text-xs text-slate-800">{t}</span>
        ))}
      </div>
    </div>
  );
}
