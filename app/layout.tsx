import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { Provider } from "@/app/provider";
import "./globals.css";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kaal",
  description: "That is time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased h-screen`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
