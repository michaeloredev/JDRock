import localFont from "next/font/local";
import "./globals.css";
import NavBanner from "@/components/Nav-Banner";
import AppBgImg from "@/components/AppBgImg";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "JD Rock",
  description: "The Home Site of JD Rock",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/kje1wvw.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased matrix`}
      >
        
        <NavBanner />
        
        {children}
        <AppBgImg />
      </body>
    </html>
  );
}
