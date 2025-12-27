import Link from "next/link";

import Image from "next/image";

export default function Home() {
  return (
  <div className="flex w-full flex-col items-center px-2 md:px-6 lg:px-24 py-0">
      {/* Full-bleed hero: must span the full viewport width and not have max-width, rounded corners, or shadow */}
      <div className="w-full">
  <div className="mx-auto max-w-7xl px-4 md:px-12 lg:px-24 py-8">
          {/* Hero content (structure unchanged) */}
            <div className="w-full p-4 md:p-8 lg:p-10">
              <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-20 lg:gap-32">
              {/* Text column */}
              <div className="order-1 w-full md:order-1 md:w-1/2">
                <h1 className="text-3xl font-extrabold leading-tight text-orange-600 md:text-4xl lg:text-5xl">
                  Find the Right Hashtags for Your Instagram Reels
                </h1>
                <p className="mt-2 max-w-lg text-base text-slate-600 md:text-lg">
                  Boost your reach and engagement effortlessly with the perfect hashtags for your short videos.
                </p>

                <div className="mt-2 md:mt-6 flex items-center gap-3 md:gap-3">
                  {/* Mobile: show small thumbnail next to CTA; desktop keeps the big illustration on the right */}
                  <Link
                    href="/trending"
                    className="flex items-center w-full rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow hover:brightness-95 md:w-auto whitespace-nowrap justify-center"
                  >
                    Explore Trending Hashtags
                  </Link>

                  {/* Small thumbnail visible only on sm and below (mobile). Hidden on md+ where the big illustration is shown. */}
                  <div className="block md:hidden">
                    <div className="h-20 w-20 overflow-hidden rounded-lg bg-transparent p-1 border border-white/20">
                      <Image
                        src="/hashtag.svg"
                        alt="Hash thumbnail"
                        width={160}
                        height={160}
                        className="w-full h-full object-contain p-1 mix-blend-multiply"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Illustration - placed below text on mobile; anchored to bottom on larger screens */}
              <div className="order-2 mt-4 w-full md:order-2 md:mt-0 md:w-1/2 md:flex md:justify-center md:self-center">
                {/* Hide the large hero illustration on small screens; show from md+ */}
                <div className="hidden md:flex h-48 sm:h-56 md:h-64 lg:h-80 w-full items-center justify-center overflow-hidden rounded-md p-2">
                  <div className="relative h-full w-full -translate-y-1 md:-translate-y-6 bg-white/10 rounded-lg flex items-center justify-center">
                    <Image
                      src="/hashtag.svg"
                      alt="Hashify"
                      width={640}
                      height={640}
                      className="w-full h-full object-contain p-2 md:p-3 mix-blend-multiply opacity-95"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards placed inside the hero background to create a smooth transition */}
          <div className="mt-6 border-t border-transparent">
            {/* Section heading */}
            <div className="mx-auto max-w-6xl px-4 md:px-12 lg:px-12 py-4 -mt-4">
              <h2 className="text-center text-2xl md:text-3xl font-bold text-slate-900">Why use Hashify?</h2>
            </div>
            {/* Move the cards slightly up on mobile (-mt) and keep normal spacing on md+ */}
            <div className="max-w-6xl px-4 md:px-12 lg:px-12 py-8 mx-auto -mt-8 md:mt-6">
              <div className="grid w-full grid-cols-1 gap-6 md:gap-10 lg:gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch mx-auto">
                {/* Each card is a horizontal rectangle on md+ and stacks on mobile; lg uses a 2fr/1fr/1fr layout so first card is wider */}
                <div className="group flex flex-row items-center bg-white border border-slate-100 rounded-lg px-6 py-4 md:px-8 md:py-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all w-full h-full min-h-20">
                  <span className="inline-block mr-4 shrink-0 h-3 w-3 rounded-full bg-rose-400" aria-hidden />
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-slate-900 md:truncate">Category-wise hashtags</h3>
                    <p className="mt-1 text-sm md:text-base text-slate-600 md:max-w-[48ch]">Organized collections for popular reel themes.</p>
                  </div>
                </div>

                <div className="group flex flex-row items-center bg-white border border-slate-100 rounded-lg px-6 py-4 md:px-8 md:py-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all w-full h-full min-h-20">
                  <span className="inline-block mr-4 shrink-0 h-3 w-3 rounded-full bg-amber-400" aria-hidden />
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-slate-900 md:truncate">Optimized for Instagram reels</h3>
                    <p className="mt-1 text-sm md:text-base text-slate-600 md:max-w-[36ch]">Curated tags to help increase reach and discoverability.</p>
                  </div>
                </div>

                <div className="group flex flex-row items-center bg-white border border-slate-100 rounded-lg px-6 py-4 md:px-8 md:py-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all w-full h-full min-h-20">
                  <span className="inline-block mr-4 shrink-0 h-3 w-3 rounded-full bg-emerald-400" aria-hidden />
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-slate-900 md:truncate">Easy to copy and use</h3>
                    <p className="mt-1 text-sm md:text-base text-slate-600 md:max-w-[36ch]">Select and copy hashtags quickly for your captions.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
