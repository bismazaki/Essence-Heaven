import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Essence-Heaven",
  description: "Essence-Heaven - Where Every Scent Tells a Story",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrapper for flexbox layout */}
        <div className="flex flex-col min-h-screen">
          <Navbar/>
          {/* Main content */}
          <main className="flex-grow">{children}</main>

          {/* Footer */}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
