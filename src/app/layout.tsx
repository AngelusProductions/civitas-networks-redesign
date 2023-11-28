import { Nunito, Nunito_Sans } from "next/font/google";
import Head from "next/head";

import clsx from "clsx";
import "./globals.scss";

import Navbar from "@/components/Navbar";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap"
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={clsx(nunito.variable, nunitoSans.variable)}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
