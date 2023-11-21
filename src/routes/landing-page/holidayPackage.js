import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";
import HolidayPackageContent from "./holidaPackageContent";
import SectionTitle from "../../../components/sectionTitle";
const HolidayPackage = () => {
  const holidayPackage = [
    {
      id: "p1",
      banner: "/images/home/6.png",
      label: "INTERNATIONAL",
      caption: "8 Day Best of Victoria Ultimate Luxury Tour",
      numDays: 4,
      numNights: 3,
      price: 398,
      savePrice: 17.25,
    },
    {
      id: "p2",
      banner: "/images/home/6-1.png",
      label: "INTERNATIONAL",
      caption: "8 Day Best of Victoria Ultimate Luxury Tour",
      numDays: 4,
      numNights: 3,
      price: 398,
      savePrice: 17.25,
    },
    {
      id: "p3",
      banner: "/images/home/6-2.png",
      label: "INTERNATIONAL",
      caption: "8 Day Best of Victoria Ultimate Luxury Tour",
      numDays: 4,
      numNights: 3,
      price: 398,
      savePrice: 17.25,
    },
    {
      id: "p4",
      banner: "/images/home/6-3.png",
      label: "INTERNATIONAL",
      caption: "8 Day Best of Victoria Ultimate Luxury Tour",
      numDays: 4,
      numNights: 3,
      price: 398,
      savePrice: 17.25,
    },
    {
      id: "p5",
      banner: "/images/home/6-4.png",
      label: "INTERNATIONAL",
      caption: "8 Day Best of Victoria Ultimate Luxury Tour",
      numDays: 4,
      numNights: 3,
      price: 398,
      savePrice: 17.25,
    },
    {
      id: "p6",
      banner: "/images/home/6-5.png",
      label: "INTERNATIONAL",
      caption: "8 Day Best of Victoria Ultimate Luxury Tour",
      numDays: 4,
      numNights: 3,
      price: 398,
      savePrice: 17.25,
    },
    {
      id: "p7",
      banner: "/images/home/6.png",
      label: "INTERNATIONAL",
      caption: "8 Day Best of Victoria Ultimate Luxury Tour",
      numDays: 4,
      numNights: 3,
      price: 398,
      savePrice: 17.25,
    },
    {
      id: "p8",
      banner: "/images/home/6-1.png",
      label: "INTERNATIONAL",
      caption: "8 Day Best of Victoria Ultimate Luxury Tour",
      numDays: 4,
      numNights: 3,
      price: 398,
      savePrice: 17.25,
    },
    {
      id: "p9",
      banner: "/images/home/6-2.png",
      label: "INTERNATIONAL",
      caption: "8 Day Best of Victoria Ultimate Luxury Tour",
      numDays: 4,
      numNights: 3,
      price: 398,
      savePrice: 17.25,
    },
    {
      id: "p10",
      banner: "/images/home/6-3.png",
      label: "INTERNATIONAL",
      caption: "8 Day Best of Victoria Ultimate Luxury Tour",
      numDays: 4,
      numNights: 3,
      price: 398,
      savePrice: 17.25,
    },
  ];
  return (
    <section className="holiday-package">
      <div className="holiday-package--package-wrapper">
        <SectionTitle
          headtitle="Our Holiday Packages"
          subTitle="There are many variations of passages of Lorem Ipsum available"
        />
        <div className="holiday-package--list">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={4.5}
            spaceBetween={25}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Autoplay]}
            className="holiday-packageSwiper"
          >
            {holidayPackage.map((data) => (
              <SwiperSlide key={data.id}>
                <HolidayPackageContent
                  id={data.id}
                  key={data.id}
                  banner={data.banner}
                  label={data.label}
                  caption={data.caption}
                  numDays={data.numDays}
                  numNights={data.numNights}
                  price={data.price}
                  savePrice={data.savePrice}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HolidayPackage;
