"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const enum Routes {
  HOME = "/",
  GALLERY = "/gallery",
  RECORDING = "/recording",
  ENHANCER = "/enhancer",
  REALTIME = "/realtime",
  EDIT = "/edit",
  ASSEST = "/asset",
} // This is where the routes for some of the links are stored but most point to no where because there's no routes for them. As the app scales, their routes will be added making the code easy to maintain and scalable.

type NavLink = {
  href: Routes;
  icon: string;
  alt: string;
}; // Types for the href, src and alt attributes values for the links

const mainLinks: NavLink[] = [
  { href: Routes.HOME, icon: "/home.svg", alt: "Home Page Icon" },
  { href: Routes.GALLERY, icon: "/photoicon.svg", alt: "Photo Gallery Icon" },
  { href: Routes.RECORDING, icon: "/recordingicon.png", alt: "Recording Icon" },
  { href: Routes.ENHANCER, icon: "/enhancericon.svg", alt: "Enhancer Icon" },
  { href: Routes.REALTIME, icon: "/realtimeicon.svg", alt: "Real Time Icon" },
  { href: Routes.EDIT, icon: "/A.svg", alt: "Edit Icon" },
  { href: Routes.ASSEST, icon: "/asseticon.svg", alt: "Asset Icon" },
]; // Array of objects for the link data

export const Navbar: FC = () => {
  return (
    <nav className="flex flex-col gap-4 md:flex-row md:justify-between items-center px-4 py-4 md:px-10 md:py-6">
      <div>
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
        {mainLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={`${
              index === 0
                ? "bg-white hover:bg-white/80 p-1.5"
                : "p-2 hover:bg-gray-200"
            } rounded-xl  active:scale-95 transition-all duration-200`}
          >
            <Image src={link.icon} alt={link.alt} width={20} height={20} />
          </Link>
        ))}
      </div>
      <div className=" flex items-center gap-4 md:flex">
        <Link
          href="/"
          className="flex gap-2 rounded-xl bg-[#f5f3f3] py-1 px-2 hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <Image
            src="/galleryedit-icon.svg"
            alt="Gallery Edit Icon"
            width={20}
            height={20}
          />
          <p className="text-sm">Gallery</p>
        </Link>

        <Link
          href=""
          className="flex gap-2 rounded-xl bg-[#f5f3f3] py-1 px-2  hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <Image src="/support.svg" alt="Support Icon" width={20} height={20} />
          <p className="text-sm">Support</p>
        </Link>

        <button className="rounded-xl bg-[#f5f3f3] p-2 hover:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer">
          <Image
            src="/notification-bell.svg"
            alt="Notification Bell Icon"
            width={20}
            height={20}
          />
        </button>
        <button className="rounded-xl bg-[#f5f3f3] p-2 hover:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer">
          <Image src="/moon.svg" alt="Dark Mode Icon" width={20} height={20} />
        </button>

        <button className="rounded-xl bg-[#f5f3f3] p-2 hover:bg-gray-200 active:scale-95 transition-all duration-200 cursor-pointer">
          <Image src="/sun.svg" alt="Light Mode Icon" width={20} height={20} />
        </button>

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
// className="p-2 rounded-xl hover:bg-gray-200 active:scale-95 transition-all duration-200"

// "bg-white p-1.5  rounded-xl hover:bg-gray-200 active:scale-95 transition-all duration-200";
