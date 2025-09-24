import { Navbar } from "@/components/Navbar";
import Slider from "@/components/Slider";
export default function Home() {
  return (
    <div className="md:m-10s md:border-gray-100 md:border shadow ">
      <Navbar />
      <Slider />
    </div>
  );
}
