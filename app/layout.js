import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

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
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Frederick, MD`,
    template: `%s | ${site.name}`,
  },
  description:
    "Remodeling, additions, kitchens, baths, exteriors, and home repair in Frederick County, MD. One call handles it all, backed by a 5-year workmanship warranty.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" crossOrigin="" />
        <link rel="stylesheet" href="https://use.typekit.net/kje1wvw.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-stone-50 font-sans text-stone-900 antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:shadow"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
