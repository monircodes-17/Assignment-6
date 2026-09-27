"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { usePlan } from "@/context/PlanContext";

const Navbar = () => {
  const pathname = usePathname();
  const { plan, saved } = usePlan();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHomeActive = pathname === "/";
  const isPlanActive = pathname === "/my-plan";

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const getNavLinkClass = (isActive: boolean) =>
    `rounded-2xl border px-4 py-2 text-[14px] font-semibold transition-all duration-200 sm:px-5 sm:py-2.5 sm:text-[15px] lg:text-[16px] ${
      isActive
        ? "border-[#CCFF00]/40 bg-[#CCFF00]/10 text-[#CCFF00]"
        : "border-transparent text-gray-400 hover:border-[#CCFF00]/30 hover:bg-[#CCFF00]/5 hover:text-[#CCFF00]"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#1C1F26] bg-[#0C0D10]/95 backdrop-blur-md">
      <div className="relative flex h-18 w-full items-center px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMobileMenu}
          aria-label="FITLOG Home"
          className="flex shrink-0 items-center gap-2"
        >
          <Image
            src="/assets/logo.png"
            alt="FitLog Logo"
            width={34}
            height={34}
            priority
            className="h-8 w-8 object-contain sm:h-9 sm:w-9"
          />

          <span className="font-oswald text-[21px] font-bold uppercase tracking-wider text-white sm:text-[26px]">
            FITLOG
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-3 md:flex lg:gap-4">
          <Link
            href="/"
            aria-current={isHomeActive ? "page" : undefined}
            className={getNavLinkClass(isHomeActive)}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            aria-current={isPlanActive ? "page" : undefined}
            className={getNavLinkClass(isPlanActive)}
          >
            My Plan
          </Link>
        </div>

        {/* Desktop Counters */}
        <div className="ml-auto hidden items-center gap-2.5 md:flex">
          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full bg-[#CCFF00] px-4 py-2 text-[14px] font-bold text-black transition hover:bg-[#B3FF00] lg:px-5 lg:py-2.5 lg:text-[15px]"
          >
            <span>Plan</span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-black px-1.5 text-[12px] font-bold text-[#CCFF00] lg:h-7 lg:min-w-7 lg:px-2 lg:text-[13px]">
              {plan.length}
            </span>
          </Link>

          <Link
            href="/my-plan"
            className="flex items-center gap-2 rounded-full border border-[#1C1F26] px-4 py-2 text-[14px] font-bold text-gray-300 transition hover:border-[#CCFF00]/40 hover:text-white lg:px-5 lg:py-2.5 lg:text-[15px]"
          >
            <span>Saved</span>

            <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#1C1F26] px-1.5 text-[12px] font-bold text-white lg:h-7 lg:min-w-7 lg:px-2 lg:text-[13px]">
              {saved.length}
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          className="ml-auto flex items-center justify-center text-gray-300 transition hover:text-white md:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="w-full border-t border-[#1C1F26] bg-[#15171C] px-4 py-5 sm:px-6 md:hidden"
        >
          <div className="space-y-5">
            {/* Mobile Navigation */}
            <div className="flex flex-col gap-2.5">
              <Link
                href="/"
                onClick={closeMobileMenu}
                aria-current={isHomeActive ? "page" : undefined}
                className={`block ${getNavLinkClass(isHomeActive)}`}
              >
                Workouts
              </Link>

              <Link
                href="/my-plan"
                onClick={closeMobileMenu}
                aria-current={isPlanActive ? "page" : undefined}
                className={`block ${getNavLinkClass(isPlanActive)}`}
              >
                My Plan
              </Link>
            </div>

            {/* Mobile Counters */}
            <div className="grid grid-cols-2 gap-2.5 border-t border-[#1C1F26] pt-4">
              <Link
                href="/my-plan"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 rounded-full bg-[#CCFF00] py-2.5 text-[13px] font-bold text-black transition hover:bg-[#B3FF00]"
              >
                <span>Plan</span>

                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-black px-1.5 text-[11px] font-bold text-[#CCFF00]">
                  {plan.length}
                </span>
              </Link>

              <Link
                href="/my-plan"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 rounded-full border border-[#1C1F26] py-2.5 text-[13px] font-bold text-white transition hover:border-[#CCFF00]/40"
              >
                <span>Saved</span>

                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#1C1F26] px-1.5 text-[11px] text-white">
                  {saved.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;