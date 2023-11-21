import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import MainBannerContent from "./mainBannerContent";
const ManinBanner = () => {
  const bannerImage = [
    {
      id: "b1",
      image: "/images/home/Image3@2x.png",
      title: "Never. Stop. Exploring",
      paragraph: `Lorem Ipsum has been the industry's standard dummy text ever since
      the 1500s Lorem Ipsum`,
    },
    {
      id: "b2",
      image: "/images/home/Image3@2x.png",
      title: "Never. Stop. Exploring",
      paragraph: `Lorem Ipsum has been the industry's standard dummy text ever since
      the 1500s Lorem Ipsum`,
    },
    {
      id: "b3",
      image: "/images/home/Image3@2x.png",
      title: "Never. Stop. Exploring",
      paragraph: `Lorem Ipsum has been the industry's standard dummy text ever since
      the 1500s Lorem Ipsum`,
    },
    {
      id: "b4",
      image: "/images/home/Image3@2x.png",
      title: "Never. Stop. Exploring",
      paragraph: `Lorem Ipsum has been the industry's standard dummy text ever since
      the 1500s Lorem Ipsum`,
    },
  ];
  return (
    <section className="travel-banner">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          type: "fraction",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="travel-banner--mySwiper"
      >
        {bannerImage.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="travel-banner--banner-img">
              <MainBannerContent
                key={data.id}
                image={data.image}
                title={data.title}
                paragraph={data.paragraph}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ManinBanner;
