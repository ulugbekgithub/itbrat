import React from "react";

import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, EffectCoverflow } from "swiper/modules";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { ServiceData } from "../constants";
import { v4 as uuidv4 } from "uuid";

SwiperCore.use([Navigation]);

const MobileSwiper = () => {
  const swiperRef = React.useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-center flex-col h-[500px] text-main-white">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1.5} // Markaziy slaydga e'tibor qaratish
          initialSlide={1} // Dastlabki ko'rinishda ikkinchi slaydni markaziy joylashtirish
          coverflowEffect={{
            rotate: 0, // Slayderni aylantirishni o'chirish
            stretch: 100, // Slaydlar orasidagi bo'shliqni kengaytirish
            depth: 200, // Slaydlar chuqurlikda joylashadi
            modifier: 1, // Effekt kuchini sozlash
            slideShadows: false, // Slayder orqasida soya bo'lishi mumkin
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          ref={swiperRef}
          breakpoints={{
            340: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          modules={[FreeMode, EffectCoverflow]}
          className="max-w-[90%]"
        >
          {ServiceData.map((item, index) => (
            <SwiperSlide key={uuidv4()}>
              <div
                className={`flex flex-col justify-end gap-6 mb-20 relative shadow-lg  px-6 py-8 w-full max-w-[225px] min-h-[254px] rounded-lg overflow-hidden cursor-pointer ${
                  index === 1 ? "z-10" : "z-0"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
                  style={{
                    backgroundImage: `url(${item.backgroundImage})`,
                    filter: index !== 1 ? "blur(2px) grayscale(80%)" : "none", // Orqa fonni xiralashtirish va qora-oq rangda qilish
                  }}
                />
                <div className="absolute" />
                <div className="relative flex flex-col gap-10">
                  <h1 className="text-[16px] font-semibold text-start">
                    {item.title}
                  </h1>
                  <div className="flex items-end justify-between">
                  <p className="text-xs text-second-color text-start">
                    от <br />
                    {item.price} р.
                  </p>
                  <span className="text-main-red underline text-xs">Подробнее</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex gap-5">
          <button
            className="w-[53px] h-[53px] bg-main-red rounded-full flex justify-center items-center"
            onClick={goPrev}
          >
            <GrLinkPrevious color="black" size={40} />
          </button>
          <button
            className="w-[53px] h-[53px] bg-main-red rounded-full flex justify-center items-center"
            onClick={goNext}
          >
            <GrLinkNext color="black" size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileSwiper;
