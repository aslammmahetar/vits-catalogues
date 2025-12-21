"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const ProductImageCarousel = ({ images }) => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        navigation={true}
        pagination={{ clickable: true }}
        className="rounded-xl overflow-hidden"
      >
        {images?.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-48 w-full sm:h-56">
              <Image
                src={img.preview}
                alt={`Product Image ${i}`}
                fill
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductImageCarousel;
