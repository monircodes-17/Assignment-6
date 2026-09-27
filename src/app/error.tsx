"use client";

interface ErrorPageProps {
error: Error & { digest?: string };
reset: () => void;
}

export default function ErrorPage({
error: _error,
reset,
}: ErrorPageProps) {
return ( <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-4 py-20 text-center"> <h2 className="font-oswald text-2xl font-bold uppercase text-red-500">
Something Went Wrong! </h2>


  <p className="max-w-md text-xs leading-relaxed text-gray-400">
    Failed to load workout data. Please try again.
  </p>

  <button
    type="button"
    onClick={() => reset()}
    className="rounded-md bg-[#CCFF00] px-6 py-2.5 font-oswald text-xs font-bold uppercase text-black transition hover:bg-[#B3FF00]"
  >
    Try Again
  </button>
</div>


);
}
