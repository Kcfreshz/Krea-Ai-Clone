"use client";

import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="flex justify-center items-center p-4 md:justify-between">
      <div className="">
        <div className="hidden items-center gap-6 md:flex">
          <Image src="/logo.svg" alt="Home page logo" width={20} height={20} />

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
        <span className="bg-white p-1.5  rounded-xl">
          <Image src="/home.svg" alt="home Page Icon" width={20} height={20} />
        </span>
        <span>
          <Image
            src="/photoicon.svg"
            alt="Photo Gallery Icon"
            width={20}
            height={20}
          />
        </span>
        <span>
          <Image
            src="/recordingicon.png"
            alt="Recording Icon"
            width={20}
            height={20}
          />
        </span>
        <span>
          <Image
            src="/enhancericon.svg"
            alt="Enhancer icon"
            width={20}
            height={20}
          />
        </span>
        <span>
          <Image
            src="/realtimeicon.svg"
            alt="Real time icon"
            width={20}
            height={20}
          />
        </span>
        <span>
          <Image src="/A.svg" alt="Edit icon" width={20} height={20} />
        </span>
        <span>
          <Image src="/asseticon.svg" alt="Asset icon" width={20} height={20} />
        </span>
      </div>
      <div className="hidden items-center gap-4 md:flex">
        <div className="flex gap-2 rounded-xl bg-[#f5f3f3] p-2">
          <Image
            src="/galleryedit-icon.svg"
            alt="Gallery Edit Icon"
            width={20}
            height={20}
          />
          <p>Gallery</p>
        </div>

        <div className="flex gap-2 rounded-xl bg-[#f5f3f3] p-2">
          <Image src="/support.svg" alt="Support Icon" width={20} height={20} />
          <p>Support</p>
        </div>

        <span className="rounded-xl bg-[#f5f3f3] p-2">
          <Image
            src="/notification-bell.svg"
            alt="Notification Bell Icon"
            width={20}
            height={20}
          />
        </span>
        <span className="rounded-xl bg-[#f5f3f3] p-2 cursor-pointer">
          <Image src="/moon.svg" alt="Dark Mode Icon" width={20} height={20} />
        </span>

        <span className="rounded-xl bg-[#f5f3f3] p-2 cursor-pointer">
          <Image src="/sun.svg" alt="Light Mode Icon" width={20} height={20} />
        </span>

        <span className="rounded-xl bg-[#f5f3f3] p-2">
          <Image src="/glow.svg" alt="Glow Icon" width={30} height={30} />
        </span>
      </div>
    </nav>
  );
};
