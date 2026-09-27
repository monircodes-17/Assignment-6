import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";
import { PlanProvider } from "@/context/PlanContext";

export const metadata: Metadata = {
title: "FitLog — Workout Library",
description:
"A dark, no-nonsense gym companion and workout tracking platform.",
};

interface RootLayoutProps {
children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
return ( <html lang="en"> <body className="flex min-h-screen flex-col bg-[#0C0D10] text-white"> <PlanProvider> <Navbar />


      <main className="w-full flex-1 px-3 pb-12 sm:px-5 md:px-6 lg:px-8">
        {children}
      </main>

      <Footer />

      <ToastProvider />
    </PlanProvider>
  </body>
</html>


);
};

export default RootLayout;
