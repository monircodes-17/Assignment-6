"use client";

import Image from "next/image";

const Hero = () => {
  const handleScroll = () => {
    document.getElementById("library")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="mt-[30px] mb-6 grid w-full grid-cols-1 items-center gap-6 overflow-hidden rounded-2xl border border-[#1C1F26] bg-[#15171C] px-4 py-6 sm:mt-[40px] sm:mb-8 sm:px-6 sm:py-8 md:mt-[60px] md:grid-cols-[1.1fr_0.9fr] md:gap-6 md:px-8 md:py-8 lg:px-10 lg:py-10">
      <div className="space-y-5 sm:space-y-6">
        <span className="font-oswald text-xs font-bold uppercase tracking-widest text-[#CCFF00] sm:text-[15px]">
          WORKOUT LIBRARY
        </span>

        <h1 className="font-oswald text-[36px] font-extrabold uppercase leading-tight text-white sm:text-[46px] lg:text-[66px]">
          TRAIN WITH INTENT.
          <br />
          LOG EVERY SET.
        </h1>

        <p className="max-w-2xl text-[13px] leading-relaxed text-gray-400 sm:text-[15px] lg:text-[17px]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>

        <button
          type="button"
          onClick={handleScroll}
          className="rounded-md bg-[#CCFF00] px-6 py-3 font-oswald text-xs font-bold uppercase tracking-wider text-black transition hover:bg-[#B3FF00] sm:px-7 sm:py-3.5 sm:text-sm"
        >
          Browse Workouts
        </button>
      </div>

      <div className="relative ml-auto h-[280px] w-[105%] translate-x-[8%] sm:h-[380px] md:h-[440px] lg:h-[520px]">
        <Image
          src="/assets/banner.png"
          alt="FitLog workout banner"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;