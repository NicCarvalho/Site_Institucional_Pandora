import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar_landpage from "@/components/navbar_landpage";
import Footer_landpage from "@/components/footer_landpage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PandoraTextil",
  description: "HomePage - Pandoratextil",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar_landpage />
        {children}
        <Footer_landpage />
      </body>
    </html>
  );
}
