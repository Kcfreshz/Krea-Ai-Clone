"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const sliderData = [
  {
    id: 1,
    title: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic features.",
    imgSrc: "/img1.webp",
    buttonText: "Try WAN 2.2",
  },
  {
    id: 2,
    title: "FLUX.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate within it in Krea image.",
    imgSrc: "/img2.jpg",
    buttonText: "Try FLUX.1",
  },
  {
    id: 3,
    title: "Ultra-Realistic Portraits",
    description:
      "Create lifelike portraits with accurate skin tones, natural lighting, and smooth textures that look professionally shot.",
    imgSrc: "/img3.webp",
    buttonText: "Generate Portrait",
  },

  {
    id: 4,
    title: "Next-Gen Landscape Rendering",
    description:
      "Bring breathtaking landscapes to life with cinematic skies, lush textures, and realistic depth powered by AI.",
    imgSrc: "/img4.webp",
    buttonText: "Create Landscape",
  },

  {
    id: 5,
    title: "High-Fidelity Concept Art",
    description:
      "Produce detailed concept art for games, films, and comics with perfect composition and consistent style control.",
    imgSrc: "/img5.webp",
    buttonText: "Make Concept Art",
  },
  {
    id: 6,
    title: "AI-Powered Product Mockups",
    description:
      "Turn your product ideas into professional mockups with realistic materials, soft shadows, and perfect lighting.",
    imgSrc: "/img6.webp",
    buttonText: "Design Mockup",
  },

  {
    id: 7,
    title: "Hyper-Real Environments",
    description:
      "Generate immersive 3D-like environments that look ready for AAA video games or photorealistic film scenes.",
    imgSrc: "/img7.webp",
    buttonText: "Build World",
  },

  {
    id: 8,
    title: "Stylized Art Filters",
    description:
      "Transform any photo into cartoon, oil painting, or sketch style while keeping perfect proportions and details.",
    imgSrc: "/img8.webp",
    buttonText: "Apply Style",
  },

  {
    id: 9,
    title: "Precision Prompt Control",
    description:
      "Fine-tune every detail of your prompts with sliders and settings to get exactly the image you imagined.",
    imgSrc: "/img9.webp",
    buttonText: "Start Creating",
  },
];

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handlers for next and previous buttons
  const nextSlide = () =>
    setActiveSlide((prev) => (prev + 1) % sliderData.length);
  const prevSlide = () =>
    setActiveSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1));

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  // Get only current and next slide
  const slidesToShow = [
    sliderData[activeSlide],
    sliderData[(activeSlide + 1) % sliderData.length],
  ];

  return (
    <div className="p-5 md:p-0 md:pl-10  overflow-hidden ">
      {/* Slider Container */}
      <div className="flex justify-center gap-10 transition-all duration-700 ease-in-out">
        <div
          key={slidesToShow[0].id}
          style={{
            backgroundImage: `url(${slidesToShow[0].imgSrc})`,
          }}
          className="bg-cover bg-center w-full md:w-[80%] h-[200px] sm:h-[300px] md:h-[450px] lg:[500px]  rounded-3xl shadow text-white "
        >
          <div className="p-5 flex flex-col justify-between sm:gap-[150px] md:gap-72 ">
            <p>NEW IMAGE MODEL</p>
            <div className="mt-13 sm:mt-0 ">
              <h1 className="text-xl md:text-3xl font-semibold pb-2">
                {slidesToShow[0].title}
              </h1>
              <div className="flex items-center">
                <p
                  className={`text-xs md:text-sm w-full md:w-[50%] text-gray-100/50 font-semibold`}
                >
                  {slidesToShow[0].description}
                </p>

                <button className="hidden md:flex ml-auto bg-white text-black/80 py-2.5 px-5 rounded-full hover:opacity-90 font-bold text-sm cursor-pointer transition-colors">
                  {slidesToShow[0].buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Next Slide - hidden on small screens */}
        <div
          key={slidesToShow[1].id}
          className="hidden md:flex items-end rounded-l-3xl shadow text-white bg-cover bg-center transition-all duration-700 w-[30%] h-[200px] sm:h-[300px] md:h-[450px] lg:[500px]"
          style={{
            backgroundImage: `url(${slidesToShow[1].imgSrc})`,
          }}
        >
          <div className="pl-5 pb-10">
            <h1 className="text-3xl font-semibold">{slidesToShow[1].title}</h1>
            <p className={` text-gray-100/50 font-semibold`}>
              {slidesToShow[1].description}
            </p>
          </div>
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center items-center gap-2 pt-3 md:pl-[300px]">
        {sliderData.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
              index === activeSlide ? "bg-black" : "bg-gray-400"
            }`}
            onClick={() => handleSlideChange(index)}
          ></div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end items-center gap-1 md:pr-10 -mt-3 ">
        <button
          onClick={prevSlide}
          className=" bg-gray-400/40 hover:bg-gray-700/60 text-white p-1 rounded-full transition"
        >
          <Image
            src="/left-arrow.svg"
            alt="Previous Slide arrow"
            width={20}
            height={20}
          />
        </button>

        <button
          onClick={nextSlide}
          className=" bg-gray-400/40 hover:bg-gray-700/60 text-white p-1 rounded-full transition"
        >
          <Image
            src="/right-arrow.svg"
            alt="Next Slide arrow"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};

export default Slider;
