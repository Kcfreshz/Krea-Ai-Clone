import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between items-center h-30 w-full bg-[#3a3a3a] px-7">
      <div className="flex gap-5 items-center">
        <Link href="">
          <Image src="/footerlogo.svg" alt="logo" width={50} height={50} />
        </Link>
        <h5 className="text-3xl font-bold text-white">Krea AI</h5>
      </div>

      <div className="flex items-center gap-1 text-white">
        <p className="text-2xl font-bold">curated by</p>
        <Link href="">
          <Image
            src="/mobbinlogo.svg"
            alt="mobbin logo"
            width={100}
            height={100}
          />
        </Link>
        <h5 className="text-4xl font-bold">Mobbin</h5>
      </div>
    </div>
  );
};

export default Footer;
