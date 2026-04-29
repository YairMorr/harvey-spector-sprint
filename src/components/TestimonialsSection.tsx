const TESTIMONIALS = [
  {
    logo: "/testimonial-logo-1.svg",
    logoW: 143,
    logoH: 19,
    quote:
      "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    author: "Marko Stojković",
    // desktop position & rotation
    style: { top: 142, left: "7%", rotate: "-6.85deg" },
  },
  {
    logo: "/testimonial-logo-2.svg",
    logoW: 138,
    logoH: 19,
    quote:
      "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    author: "Lukas Weber",
    style: { top: 272, left: "47%", rotate: "2.9deg" },
  },
  {
    logo: "/testimonial-logo-3.svg",
    logoW: 109,
    logoH: 31,
    quote:
      "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    author: "Sarah Jenkins",
    style: { top: 553, left: "21%", rotate: "2.23deg" },
  },
  {
    logo: "/testimonial-logo-4.svg",
    logoW: 81,
    logoH: 36,
    quote:
      "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    author: "Sofia Martínez",
    style: { top: 546, left: "68%", rotate: "-4.15deg" },
  },
];

function Card({
  logo,
  logoW,
  logoH,
  quote,
  author,
  rotate,
}: {
  logo: string;
  logoW: number;
  logoH: number;
  quote: string;
  author: string;
  rotate: string;
}) {
  return (
    <div
      className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4 w-[calc(100%-2rem)] max-w-[353px] shrink-0"
      style={{ rotate }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={logo} alt="" width={logoW} height={logoH} className="h-auto" style={{ width: logoW }} />
      <p className="text-[#1f1f1f] text-[18px] leading-[1.3] tracking-[-0.72px]">
        {quote}
      </p>
      <p className="font-black text-black text-[16px] leading-[1.1] tracking-[-0.64px] uppercase">
        {author}
      </p>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="bg-white overflow-hidden">

      {/* ── Mobile ── */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">
        <h2 className="font-medium text-black text-[64px] tracking-[-4.48px] leading-[0.8] capitalize">
          Testimonials
        </h2>
        {/* Two cards overlapping */}
        <div className="flex items-start relative">
          <div className="relative z-10">
            <Card {...TESTIMONIALS[0]} rotate="-3.5deg" />
          </div>
          <div className="relative -ml-8 mt-4">
            <Card {...TESTIMONIALS[3]} rotate="2deg" />
          </div>
        </div>
      </div>

      {/* ── Desktop ── */}
      <div className="hidden md:block relative min-h-[960px] py-[120px] px-8">

        {/* "Testimonials" text — centered, large, in normal flow */}
        <h2 className="font-medium text-black text-[198px] tracking-[-13.86px] leading-[1.1] capitalize text-center w-full">
          Testimonials
        </h2>

        {/* Scattered cards */}
        {TESTIMONIALS.map((t) => (
          <div
            key={t.author}
            className="absolute"
            style={{ top: t.style.top, left: t.style.left }}
          >
            <Card {...t} rotate={t.style.rotate} />
          </div>
        ))}

      </div>

    </section>
  );
}
