import Link from "next/link";

export default function NotFound() {
return ( <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-4 py-20 text-center"> <h2 className="font-oswald text-4xl font-extrabold uppercase text-white">
404 - Page Not Found </h2>


  <p className="max-w-md text-xs leading-relaxed text-gray-400">
    The workout or page you are searching for does not exist.
  </p>

  <Link
    href="/"
    className="inline-block rounded-md bg-[#CCFF00] px-6 py-2.5 font-oswald text-xs font-bold uppercase text-black transition hover:bg-[#B3FF00]"
  >
    Back to Library
  </Link>
</div>


);
}
