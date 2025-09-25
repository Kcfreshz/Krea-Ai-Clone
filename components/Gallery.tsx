import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  return (
    <div className="flex justify-between items-center w-full mt-10  px-5 md:px-10">
      <h5 className="text-xl md:text-2xl font-bold text-gray-700 ">Gallery</h5>
      <div className="flex gap-5">
        <Link
          href=""
          className="flex items-center gap-2 rounded-xl bg-[#f5f3f3] py-1 px-2 hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <Image src="/legal.svg" alt="Legal Icon" width={18} height={18} />
          <p className="text-sm">Legal</p>
        </Link>

        <Link
          href=""
          className="flex gap-2 items-center rounded-xl bg-[#f5f3f3] py-1 px-2 hover:bg-gray-200 active:scale-95 transition-all duration-200"
        >
          <Image
            src="/pricetag.svg"
            alt="Pricing Icon"
            width={18}
            height={18}
          />
          <p className="text-sm">Price</p>
        </Link>
      </div>
    </div>
  );
};

export default Gallery;
