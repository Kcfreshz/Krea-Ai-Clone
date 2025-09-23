"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

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
    title: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic features.",
    imgSrc: "/img5.webp",
    buttonText: "Try WAN 2.2",
  },
  {
    id: 3,
    title: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherence and ultra-realistic features.",
    imgSrc: "/img3.webp",
    buttonText: "Try WAN 2.2",
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
    <div className="p-5 overflow-hidden">
      {/* Slider Container */}
      <div className="flex justify-center gap-5 transition-all duration-700 ease-in-out">
        {slidesToShow.map((slide, index) => (
          <div
            key={slide.id}
            style={{
              backgroundImage: `url(${slide.imgSrc})`,
              width: index === 0 ? "80%" : "30%",
              height: "500px",
            }}
            className="bg-cover bg-center w-full h-[450px] md:w-4xl md:h-[500px] rounded-2xl shadow text-white "
          >
            <div className="p-5 flex flex-col justify-between gap-[270px] md:gap-80 ">
              <p>NEW IMAGE MODEL</p>
              <div>
                <h1 className="text-3xl font-semibold">{slide.title}</h1>
                <div className="flex items-center">
                  <p
                    className={`w-[70%] md:w-[50%] text-gray-100/50 font-semibold`}
                  >
                    {slide.description}
                  </p>
                  {index === 0 && (
                    <button className="ml-auto bg-white text-black/80 py-2.5 px-5 rounded-full hover:opacity-90 font-bold text-sm cursor-pointer transition-colors">
                      {slide.buttonText}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center items-center gap-2 mt-8">
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
      <div className="flex justify-end items-center gap-1 -mt-5">
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
