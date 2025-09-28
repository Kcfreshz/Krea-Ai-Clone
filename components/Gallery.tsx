import Image from "next/image";
import Link from "next/link";

interface GalleryLink {
  href: string;
  icon: string;
  alt: string;
  label: string;
}

const galleryLinks: readonly GalleryLink[] = [
  { href: "legal", icon: "/legal.svg", alt: "Legal Icon", label: "Legal" },
  { href: "price", icon: "/pricetag.svg", alt: "Pricing Icon", label: "Price" },
];

const Gallery = () => {
  return (
    <div className="flex justify-between items-center w-full mt-10  px-5 md:px-10">
      <h5 className="text-xl md:text-2xl font-bold ">Gallery</h5>
      <div className="flex gap-5">
        {galleryLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="flex items-center gap-2 rounded-xl text-gray-950 bg-[#f5f3f3] py-1 px-2 hover:bg-gray-200 active:scale-95 transition-all duration-200"
          >
            <Image src={link.icon} alt={link.alt} width={18} height={18} />
            <p className="text-sm">{link.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
