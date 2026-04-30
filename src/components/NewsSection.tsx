import { Fragment } from "react";

const POSTS = [
  {
    image: "/news-1.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offset: false,
  },
  {
    image: "/news-2.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offset: true,
  },
  {
    image: "/news-3.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offset: false,
  },
];

function ReadMore() {
  return (
    <div className="flex gap-[10px] items-center border-b border-black pb-1 shrink-0">
      <span className="font-medium text-[14px] text-black tracking-[-0.56px]">
        Read more
      </span>
      {/* reuse the same diagonal arrow */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/portfolio-arrow.svg"
        alt=""
        width={18}
        height={18}
        className="-rotate-90 w-[18px] h-[18px]"
      />
    </div>
  );
}

export function NewsSection() {
  return (
    <section className="bg-[#f3f3f3] px-4 md:px-8 py-16 md:py-[120px]">

      {/* ── Mobile ── */}
      <div className="md:hidden flex flex-col gap-8">
        <h2 className="font-light text-black text-[32px] tracking-[-2.56px] leading-[0.86] uppercase">
          Keep up with my latest news &amp; achievements
        </h2>

        {/* Cards — horizontal scroll on mobile */}
        <div className="flex gap-4 overflow-x-auto pb-2 -mr-4 pr-4">
          {POSTS.map((post, i) => (
            <div key={i} className="flex flex-col gap-4 shrink-0 w-[300px]">
              <div className="relative h-[398px] w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <p className="text-[#1f1f1f] text-[14px] leading-[1.3] tracking-[-0.56px]">
                {post.description}
              </p>
              <ReadMore />
            </div>
          ))}
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:flex items-end justify-between gap-8">

        {/* Rotated heading */}
        <div className="flex items-center justify-center shrink-0 w-[110px] h-[706px]">
          <h2
            className="font-light text-black text-[64px] tracking-[-5.12px] leading-[0.86] uppercase whitespace-nowrap"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            <span className="block">Keep up with my latest</span>
            <span className="block">news &amp; achievements</span>
          </h2>
        </div>

        {/* Three article cards with dividers */}
        <div className="flex gap-0 items-start flex-1">
          {POSTS.map((post, i) => (
            <Fragment key={i}>
              <div
                className={`flex flex-col gap-4 w-[353px] shrink-0 ${post.offset ? "pt-[120px]" : "h-[581px]"}`}
              >
                <div className="relative h-[469px] w-full overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <p className="text-[#1f1f1f] text-[14px] leading-[1.3] tracking-[-0.56px] flex-1">
                  {post.description}
                </p>
                <ReadMore />
              </div>

              {/* Vertical divider between cards */}
              {i < POSTS.length - 1 && (
                <div className="self-stretch w-px bg-black/20 mx-8 shrink-0" />
              )}
            </Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
