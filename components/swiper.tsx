"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperSection() {
  return (
    <div className="w-full mt-1">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
      >
        <SwiperSlide>
          <div
            className="bg-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-center flex justify-center"
            style={{ backgroundImage: "url('/gatherThuisa.png')" }}
          >
            <div className="w-full flex flex-col justify-center items-center bg-black/50 h-full px-6 text-center">
              <h1 className="text-white text-4xl md:text-6xl font-bold animate-in slide-in-from-right delay-700">
                Welcome to THUISA
              </h1>
              <p className="mt-4 text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                The Indonesian Student Association at Tunghai University —
                building community, culture, and support for all Indonesian
                students in Taiwan.
              </p>
              <div className="mt-6">
                <Link
                  href="/about"
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/banner2.png')" }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/banner3.png')" }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
