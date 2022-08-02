import { Image, ImageField, Item, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
/*import SwiperCore from 'swiper';*/
import React from 'react';
type CarouselSliderProps = ComponentProps & {
  fields: {
    slides: Item[];
  };
};

/**
 * Demonstrates usage of a Content List field type within JSS.
 * Content Lists are references to 0..n other content items.
 * In Sitecore terms, this maps by default to a Treelist field.
 */
const CarouselSlider = (props: CarouselSliderProps): JSX.Element => {
  return (
    <React.Fragment>
      <h3 className="font-jakartaBold text-3xl py-12">My Work</h3>
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={true}
        navigation={{
          nextEl: '.next-button',
          prevEl: '.prev-button',
        }}
        tag="section"
        id="main"
        className="w-full max-w-7xl h-full"
        breakpoints={{
          1100: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        centeredSlides={true}
        centeredSlidesBounds={true}
        slidesPerView={1}
        spaceBetween={1}
      >
        {props.fields.slides &&
          props.fields.slides.map((item, index) => (
            <SwiperSlide key={`slide-${index}`} className="w-full h-full">
              <Image field={item.fields.image as ImageField} className="rounded-lg h-full" />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="flex py-10 w-36 justify-between">
        <svg
          className="cursor-pointer prev-button"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="32" fill="#030303" />
          <path
            d="M32.9999 24L25 32L32.9999 40L34.6866 38.3133L29.566 33.1927H39.8072V30.8072H29.566L34.6866 25.6866L32.9999 24Z"
            fill="white"
          />
        </svg>

        <svg
          className="cursor-pointer next-button"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="32" fill="#030303" />
          <path
            d="M31.8073 40L39.8072 32L31.8073 24L30.1206 25.6867L35.2412 30.8073H25V33.1928H35.2412L30.1206 38.3134L31.8073 40Z"
            fill="white"
          />
        </svg>
      </div>
    </React.Fragment>
  );
};

export default withDatasourceCheck()<CarouselSliderProps>(CarouselSlider);
