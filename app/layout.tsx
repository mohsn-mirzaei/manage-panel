import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";
import NavBar from "./NavBar";
import QueryClientProvider from "./QueryClientProvider";
import SideBar from "./SideBar";

const iranYekan = localfont({
  src: "../public/fonts/Qs_Iranyekan.woff2",
});

export const metadata: Metadata = {
  title: "پنل مدیریتی",
  description: "قالب پنل مدیریتی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={iranYekan.className}>
      <body className="lg:flex lg:justify-center p-5">
        <QueryClientProvider>
          <NavBar />
          <SideBar />
          <main className="w-full max-w-[1024px] px-4 grid grid-cols-8">
            <div className="col-span-8 rounded-lg border-2 border-grade2 p-3 sm:p-7">
              {children}
            </div>
          </main>
          <Analytics />
        </QueryClientProvider>
      </body>
    </html>
  );
}
