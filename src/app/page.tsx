export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="text-center space-y-4">
        <p className="text-amber-500 uppercase tracking-[0.4em] text-sm font-semibold">
          Attorney at Law
        </p>
        <h1 className="text-white font-serif text-7xl font-bold tracking-tight">
          Harvey Specter
        </h1>
        <div className="w-24 h-px bg-amber-500 mx-auto mt-6" />
        <p className="text-zinc-500 uppercase tracking-widest text-xs mt-4">
          Pearson Hardman
        </p>
      </div>
    </div>
  );
}
