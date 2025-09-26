"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import sliderData from "@/src/data/sliderData";
import { FC } from "react";

const Slider: FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

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
    <div className="p-5 md:p-0 md:pl-10 overflow-hidden">
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
        {sliderData.map((_, index: number) => (
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
