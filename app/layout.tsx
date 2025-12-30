import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveLinkProvider from "@/context/activeLinkProvider";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeLinkProvider from "@/context/themeLinkProvider";
import { ToastContainer} from 'react-toastify';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David | Personal Portfolio",
  description: "David is a full stack developer with 4 years experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-950 dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90 relative h-[300vh] pt-28 sm:pt-36`}
      >
        <div className="bg-[#fbe2e3] dark:bg-[#946263] -z-10 absolute top-[-6rem] right-[8rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.38rem]"></div>
        <div className="bg-[#dbd7fb] dark:bg-[#676394] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] blur-[10rem] rounded-full sm:w-[68.38rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <ThemeLinkProvider>
            <ActiveLinkProvider>

                <Header/>
                {children}
                <Analytics/>
                <ToastContainer/>
                <Footer/>
            </ActiveLinkProvider>
            <ThemeSwitch/>
        </ThemeLinkProvider>
      </body>
    </html>
  );
}
