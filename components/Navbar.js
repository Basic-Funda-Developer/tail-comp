import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="bg-gray-100 drop-shadow-xl shadow-cyan-500 p-5 items-center">
      <ul className="space-x-3 flex justify-center items-center text-cyan-500 font-bold tracking-wide">
        <li className="hover:text-cyan-600"><Link href="/">Home</Link></li>
        <li className="hover:text-cyan-600"><Link href="/about">About Us</Link></li>
        <li className="hover:text-cyan-600"><Link href="/contact">Contact Us</Link></li>
        <li className="hover:text-cyan-600"><Link href="/comp">Components</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
    