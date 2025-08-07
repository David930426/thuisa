"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SwiperSection() {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-1">
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
            className="bg-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/gatherThuisa.png')" }}
          >
            <h1 className="text-white text-4xl font-bold">Welcome to THUISA</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div
            className="bg-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/banner2.png')" }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
            <div
            className="bg-cover h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/banner3.png')" }}
          >
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
