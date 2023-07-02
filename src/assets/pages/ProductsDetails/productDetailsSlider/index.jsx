import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import './styles.scss';

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const ProductDetailSlider = ({sliderImages}) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
console.log(sliderImages);
    return (
      <>
        
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
           {sliderImages?.map(img => ( <SwiperSlide key={img.id}>
              <img src={img?.url}  />
            </SwiperSlide>))}
          
          
          </Swiper>
       
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
         {sliderImages?.map(img => ( <SwiperSlide key={img.id}>
            <img src={img?.url}  />
          </SwiperSlide>))}
         
        </Swiper>
      </>
    );
}

export default ProductDetailSlider