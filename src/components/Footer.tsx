import Image from "next/image";

const Footer = () => {
return ( <footer className="mt-auto border-t border-[#1C1F26] bg-[#0C0D10] py-7 sm:py-8"> <div className="flex w-full flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8"> <div className="flex items-center gap-2"> <Image
         src="/assets/logo.png"
         alt="FitLog Logo"
         width={34}
         height={34}
         className="h-8 w-8 object-contain sm:h-9 sm:w-9"
       />


      <span className="font-oswald text-[21px] font-bold uppercase tracking-wider text-white sm:text-[26px]">
        FITLOG
      </span>
    </div>

    <p className="text-center text-[13px] text-gray-500 sm:text-right sm:text-[15px] lg:text-[16px]">
      © 2026 FitLog — Workout Library. Train hard, log honest.
    </p>
  </div>
</footer>


);
};

export default Footer;
