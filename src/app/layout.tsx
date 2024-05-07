"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import IconLink from "./ui/IconLink";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

const links = [
  { name: "dashboard", href: "/dashboard", icon: "Motherboard" },
  { name: "tenents", href: "/tenents", icon: "People" },
  { name: "buildings", href: "/buildings", icon: "BuildingAdd" },
  { name: "bills", href: "/bills", icon: "PencilSquare" },
  { name: "reports", href: "/reports", icon: "FilePost" },
  { name: "settings", href: "/settings", icon: "Gear" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased}`}>
        <main className="grid gap-2 grid-cols-7 grid-rows-1 h-screen py-3 px-5">
          <div className="transparent col-span-1 flex flex-1 flex-col justify-around items-center">
            <h1 className="font-bold mb-20 mt-5 text-left  p2 text-xl">
              Ez Rent
            </h1>
            <ul className="flex-1 mt-10 flex-column justify-items-center align-items-center mx-auto text-lg">
              {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                  <IconLink
                    href={link.href}
                    key={link.name}
                    icon={link.icon}
                    linkClass={clsx(
                      "flex h-[48px] focus:outline-none hover:bg-primary-hover grow items-center justify-start rounded-2xl my-2 py-5 pl-5 pr-10 py-5 text-[20px] shadow-1",
                      {
                        "bg-primary-hover": pathname === link.href,
                      }
                    )}
                  >
                    <p className="font-bold ml-2 font-medium capitalize">
                      {link.name}
                    </p>
                  </IconLink>
                );
              })}
            </ul>
          </div>
          <div className="bg-gray my-2 mx-2 rounded-xl flex-1 col-span-6 p-6 text-black capitalize">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
