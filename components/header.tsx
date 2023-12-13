import React from "react";
import Navbar from "@/components/navbar";
import { User } from "lucide-react";
import ProfileIcon from "./profile-icon";
import Hamburger from "./hamburger";
import Link from "next/link";

const Header = () => {
  return (
    <header className='w-full flex justify-start h-[50px] sticky top-0 z-50 bg-white '>
      <nav className='w-full pr-4 sm:w-[90%] flex items-center justify-between'>
        <Navbar />
        <Link href={"/"} className='text-3xl tracking-widest pl-4 sm:p-0'>INESTA</Link>
        <section className='flex gap-4 '>
          <ProfileIcon />
          <Hamburger />
        </section>
      </nav>
    </header>
  );
};

export default Header;
