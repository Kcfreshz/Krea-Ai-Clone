"use client";

import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex flex-wrap justify-center items-center px-4 py-4 md:px-10 md:py-10 md:justify-between">
      <div className="">
        <div className="hidden items-center gap-6 md:flex">
          <Image src="/logo.png" alt="Home page logo" width={60} height={60} />

          <div className="flex items-center gap-2">
            <Image src="/glow.svg" alt="glow image" width={20} height={20} />
            <span>benevolentaicreation</span>
            <Image
              src="/dropdown.svg"
              alt="draw down icon"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4 py-1 pl-1 pr-3 rounded-xl bg-[#f5f3f3] md:gap-6">
        <Link
          href=""
          className="bg-white p-1.5  rounded-xl hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <Image src="/home.svg" alt="home Page Icon" width={20} height={20} />
        </Link>
        <Link
          href=""
          className="p-2 rounded-xl hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <Image
            src="/photoicon.svg"
            alt="Photo Gallery Icon"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href=""
          className="p-2 rounded-xl hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <Image
            src="/recordingicon.png"
            alt="Recording Icon"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href=""
          className="p-2 rounded-xl hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <Image
            src="/enhancericon.svg"
            alt="Enhancer icon"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href=""
          className="p-2 rounded-xl hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <Image
            src="/realtimeicon.svg"
            alt="Real time icon"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href=""
          className="p-2 rounded-xl hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <Image src="/A.svg" alt="Edit icon" width={20} height={20} />
        </Link>
        <Link
          href=""
          className="p-2 rounded-xl hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <Image src="/asseticon.svg" alt="Asset icon" width={20} height={20} />
        </Link>
      </div>
      <div className="hidden items-center gap-4 md:flex">
        <Link
          href=""
          className="flex gap-2 rounded-xl bg-[#f5f3f3] p-2 hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <Image
            src="/galleryedit-icon.svg"
            alt="Gallery Edit Icon"
            width={20}
            height={20}
          />
          <p>Gallery</p>
        </Link>

        <Link
          href=""
          className="flex gap-2 rounded-xl bg-[#f5f3f3] p-2  hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <Image src="/support.svg" alt="Support Icon" width={20} height={20} />
          <p>Support</p>
        </Link>

        <Link
          href=""
          className="rounded-xl bg-[#f5f3f3] p-2 hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <Image
            src="/notification-bell.svg"
            alt="Notification Bell Icon"
            width={20}
            height={20}
          />
        </Link>
        <Link
          href=""
          className="rounded-xl bg-[#f5f3f3] p-2 hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <Image src="/moon.svg" alt="Dark Mode Icon" width={20} height={20} />
        </Link>

        <Link
          href=""
          className="rounded-xl bg-[#f5f3f3] p-2 hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <Image src="/sun.svg" alt="Light Mode Icon" width={20} height={20} />
        </Link>

        <Link
          href=""
          className="rounded-xl bg-[#f5f3f3] p-2 hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <Image src="/glow.svg" alt="Glow Icon" width={20} height={20} />
        </Link>
      </div>
    </nav>
  );
};
