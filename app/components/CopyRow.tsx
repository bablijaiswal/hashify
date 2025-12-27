"use client";
import { useState } from "react";

export default function CopyRow({ tags }: { tags: string[] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(tags.join(" "));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="mt-2 flex items-center justify-between px-1">
      <span className="text-xs text-slate-600">{tags.length} tags</span>
      <button
        onClick={handleCopy}
        className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm hover:opacity-90 text-center"
        aria-pressed={copied}
      >
        {copied ? (
          "Copied"
        ) : (
          <span className="leading-tight">
            <span className="block">Copy</span>
            <span className="block">All</span>
          </span>
        )}
      </button>
    </div>
  );
}
