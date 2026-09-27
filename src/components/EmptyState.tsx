import Link from "next/link";

const EmptyState = () => {
return ( <div className="my-8 flex min-h-[250px] flex-col items-center justify-center rounded-xl border border-dashed border-[#1C1F26] p-8 text-center sm:p-12"> <h3 className="mb-2 font-oswald text-2xl font-bold uppercase text-white sm:text-3xl lg:text-4xl">
NOTHING HERE YET </h3>

  <p className="mb-6 max-w-sm text-sm leading-relaxed text-gray-400 sm:text-base lg:text-lg">
    Browse the library and add a lift to get today moving.
  </p>

  <Link
    href="/"
    className="rounded-full bg-[#CCFF00] px-5 py-3 font-oswald text-sm font-bold uppercase text-black transition hover:bg-[#B3FF00] sm:px-6 sm:py-3.5 sm:text-base lg:text-lg"
  >
    Go to Workouts
  </Link>
</div>


);
};

export default EmptyState;
