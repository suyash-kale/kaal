import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Image from "next/image";

import Logo from "@/assets/logo.jpg";
import { Provider } from "@/components/provider";
import "./globals.css";
import Link from "next/link";

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
        <Provider>
          <header className="flex px-3 py-2 bg-primary-foreground border-b drop-shadow">
            <Link href="/">
              <Image src={Logo} alt="Kaal Logo" height={30} />
            </Link>
          </header>
          <main className="container mx-auto h-full">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
