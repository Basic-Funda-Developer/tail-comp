import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-transparent p-5">
      <ul className="space-x-3 flex justify-center items-center text-cyan-500 font-bold tracking-wide">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact Us</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
