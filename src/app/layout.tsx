import type { Metadata } from "next";
import {poppins} from "@/app/fonts/fonts";
import "./globals.css";

{/* metadata */}
export const metadata: Metadata = {
  title: "DNA Finance Group - Your Trusted Partner in Home Financing",
  description: "Expert advice, personalized service, and a seamless loan process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
