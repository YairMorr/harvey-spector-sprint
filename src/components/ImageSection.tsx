export function ImageSection() {
  return (
    <section className="w-full overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/pexels-vazhnik-7562188 2.png"
        alt=""
        width={1440}
        height={900}
        style={{ display: "block", width: "100%", height: "auto" }}
      />
    </section>
  );
}
