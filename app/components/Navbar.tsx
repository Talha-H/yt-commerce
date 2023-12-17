"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="mb-8 mt-4 border-b shadow-xl">
      <div className="flex items-center mx-auto justify-between px-4 max-w-2xl sm:px-6 lg:max-w-7xl">
        <Link href={"/"}>
          <h1 className="text-4xl font-bold">
            Jojo
            <span className="text-4xl font-bold text-[#DC143C]">Fashion</span>
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-[#DC143C]"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-[#DC143C] "
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        
      </div>
    </header>
  );
};

export default Navbar;
