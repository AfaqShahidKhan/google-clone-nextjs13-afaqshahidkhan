import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";
export default function HomeHeader() {
  return (
    <>
      <header className="flex justify-end p-2 ">
        <div className="flex space-x-4 items-center">
          <Link
            href="https://mail.google.com"
            className=" hover:underline cursor-pointer "
          >
            Gmail
          </Link>
          <Link
            href="https://image.google.com"
            className=" hover:underline cursor-pointer "
          >
            Images
          </Link>

          {/* write the code here to add icon of griddot */}
          <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
          <button className="bg-blue-500 text-white text-md rounded-md hover: shadow-md hover:transition-shadow hover:brightness-105 px-6 py-2">
            Sign in
          </button>
        </div>
      </header>
    </>
  );
}
