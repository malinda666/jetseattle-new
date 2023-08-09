import Hero from "@/views/Hero";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section>
        <Hero />
      </section>
      <div className="h-screen w-full bg-slate-500" />
      <div className="h-screen w-full bg-purple-700" />
    </main>
  );
}
