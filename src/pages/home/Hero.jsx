import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image1 from "../../assets/hero-carousel/img1.jpg";
import Image2 from "../../assets/hero-carousel/img2.jpg";
import Image3 from "../../assets/hero-carousel/img3.jpg";
import Image4 from "../../assets/hero-carousel/img4.jpg";
import Image5 from "../../assets/hero-carousel/img5.jpg";
import Image6 from "../../assets/hero-carousel/img6.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:gap-14 gap-8">
      <div className="md:w-1/2 w-full text-center">
        <h1 className="md:text-5xl text-3xl font-bold md:leading-tight">
          Descubre los negocios que hacen grande al Huila
        </h1>
        <p className="py-4">
          Explora lo mejor de nuestra comunidad, donde cada negocio cuenta una
          historia de esfuerzo, innovación y tradición.{" "}
        </p>
        <p className="font-medium">
          ¡Apoya lo local y encuentra de todo en el Huila!
        </p>
      </div>

      <div className="md:w-1/2 w-full mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={1}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Image5} className="w-full lg:h-[420px] sm:h-96 h-80 " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image6} className="w-full lg:h-[420px] sm:h-96 h-80 " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image1} className="w-full lg:h-[420px] sm:h-96 h-80 " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image2} className="w-full lg:h-[420px] sm:h-96 h-80 " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image3} className="w-full lg:h-[420px] sm:h-96 h-80 " />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Image4} className="w-full lg:h-[420px] sm:h-96 h-80 " />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
