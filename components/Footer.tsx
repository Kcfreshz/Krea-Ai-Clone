import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center w-full bg-black px-5 md:px-10 py-5 gap-4">
      <div className="flex flex-col md:flex-row gap-3 md:gap-5 items-center">
        <Link href="/" className="opacity-80">
          <Image src="/footerlogo.svg" alt="logo" width={40} height={40} />
        </Link>
        <h5 className="text-xl md:text-3xl font-bold text-white text-center md:text-left">
          Krea AI
        </h5>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-1 text-white">
        <p className="text-lg md:text-2xl font-bold">curated by</p>
        <Link href="/" className="opacity-80">
          <Image
            src="/mobbinlogo.svg"
            alt="mobbin logo"
            width={80}
            height={80}
            className="mt-1 md:mt-0"
          />
        </Link>
        <h5 className="text-2xl md:text-4xl font-bold">Mobbin</h5>
      </div>
    </footer>
  );
};

export default Footer;
