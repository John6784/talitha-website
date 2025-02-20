"use client";


export default function HeroSection() {
  return (
    <section className="relative w-[100vw] h-screen justify-center items-center text-black z-50 px-8">
      <div className="mt-96 grid grid-flow-col grid-rows-3 gap-4">
        <h1 className="text-4xl font-bold">Welcome to Our Company</h1>
        <p className="text-lg mt-4">
          We provide innovative solutions to take your business to the next
          level.
        </p>
      </div>
    </section>
  );
}
