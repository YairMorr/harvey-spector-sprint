const SERVICES = [
  {
    num: "[ 1 ]",
    title: "Brand Discovery",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/services-brand-discovery.jpg",
  },
  {
    num: "[ 2 ]",
    title: "Web design & Dev",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/services-web-design.jpg",
  },
  {
    num: "[ 3 ]",
    title: "Marketing",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/services-marketing.jpg",
  },
  {
    num: "[ 4 ]",
    title: "Photography",
    description:
      "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences.",
    image: "/services-photography.jpg",
  },
];

export function ServicesSection() {
  return (
    <section data-nav-dark className="bg-black px-4 md:px-8 py-12 md:py-[80px] flex flex-col gap-8 md:gap-[48px] overflow-x-hidden">

      {/* [ services ] */}
      <span className="font-mono text-sm text-white uppercase leading-[1.1]">
        [ services ]
      </span>

      {/* [4]   Deliverables */}
      <div className="flex items-center justify-between w-full font-light text-white uppercase tracking-[-2.56px] md:tracking-[-7.68px] text-[32px] md:text-[96px] leading-none">
        <span>[4]</span>
        <span>Deliverables</span>
      </div>

      {/* Service items */}
      <div className="flex flex-col gap-[48px] w-full">
        {SERVICES.map((service) => (
          <div key={service.num} className="flex flex-col gap-3 md:gap-[9px] w-full">

            {/* Number + divider */}
            <span className="font-mono text-sm text-white uppercase leading-[1.1]">
              {service.num}
            </span>
            <div className="w-full h-px bg-white/20" />

            {/* Content — stacked on mobile, row on desktop */}
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between flex-wrap">

              {/* Title */}
              <h3 className="font-bold italic text-white uppercase text-[36px] tracking-[-1.44px] leading-[1.1] shrink-0">
                {service.title}
              </h3>

              {/* Description + image */}
              <div className="flex flex-col gap-4 md:flex-row md:gap-6 md:items-start">
                <p className="text-white text-sm font-normal leading-[1.3] tracking-[-0.56px] md:w-[393px]">
                  {service.description}
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  width={151}
                  height={151}
                  className="w-[151px] h-[151px] object-cover shrink-0"
                />
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
