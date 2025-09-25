import { Navbar } from "@/components/Navbar";
import Slider from "@/components/Slider";
import Actions from "@/components/Actions";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="md:m-10 md:mb-0 md:border-gray-100 md:border shadow ">
      <Navbar />
      <Slider />
      <Actions />
      <Gallery />
      <Footer />
    </div>
  );
}
