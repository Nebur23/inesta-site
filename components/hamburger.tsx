"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Hamburger = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className='drawer drawer-end sm:hidden block'>
      <input
        id='my-drawer-4'
        type='checkbox'
        checked={isChecked}
        className='drawer-toggle'
        onChange={() => isChecked}
      />
      <div className='drawer-content'>
        {/* Page content here */}
        <label
          htmlFor='my-drawer-4'
          className='drawer-button cursor-pointer bg-white'
          onClick={handleCheckboxChange}
        >
          <Menu className='' />
        </label>
      </div>
      <div className='drawer-side'>
        <label
          htmlFor='my-drawer-4'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='menu p-4 w-80 min-h-full bg-white text-black'>
          {/* Sidebar content here */}
          <span
            className='flex justify-end close side-bar'
            onClick={handleCheckboxChange}
          >
            <X />
          </span>
          <li>
            <Link href={"/Homme"}>Homme</Link>
          </li>
          <li>
            <Link href={"/Femme"}>Femme</Link>
          </li>
          <li>
            <Link href={"/Enfant"}>Enfant</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
