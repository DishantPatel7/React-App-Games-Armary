import "./container2.css";
import b1 from "../Images/Best seller/b1.webp";
import b2 from "../Images/Best seller/b2.webp";
import b3 from "../Images/Best seller/b3.webp";
import b4 from "../Images/Best seller/b4.webp";
import b5 from "../Images/Best seller/b5.webp";
import b6 from "../Images/Best seller/b6.webp";
import b7 from "../Images/Best seller/b7.webp";

// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";
// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from 'swiper/react';

function Cont2() {
  // let data = [
  //   {
  //     img: b1,
  //     name: "Mach Gaming Chair",
  //     price: "₹12000",
  //   },
  //   {
  //     img: b2,
  //     name: "X-2 Wireless",
  //     price: "₹2500",
  //   },
  //   {
  //     img: b3,
  //     name: "Headphone XD200",
  //     price: "₹2399",
  //   },
  //   {
  //     img: b4,
  //     name: "Sparun Mechanical keyboard",
  //     price: "₹2000",
  //   },
  //   {
  //     img: b5,
  //     name: "Raptor",
  //     price: "₹5099",
  //   },
  //   {
  //     img: b6,
  //     name: "Wave",
  //     price: "₹2199",
  //   },
  //   {
  //     img: b7,
  //     name: "PS5",
  //     price: "₹35049",
  //   },
  // ];
  return (
    <>
      <div id="container2">
        <div class="cont-slider-text">
          <h1>BEST SELLERS</h1>
          <button>view all</button>
        </div>
        <div id="bestseller">
          <Swiper
            slidesPerView={4}
            spaceBetween={40}
            loop={true}
            cssMode={true}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              mousewheel: true,
              keyboard: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            // Responsive breakpoints

            breakpoints={{
              // when window width is >= 320px
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              400: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 480px
              600: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              // when window width is >= 640px
              750: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
          >
            <SwiperSlide>
              <div class="slideImg">
                <img src={b1} alt="" />
              </div>
              <div class="slideText">
                <p>Mach Gaming Chair</p>
                <p>₹12000</p>
              </div>
              <div class="cont2-btn">
                <button>Add to Cart</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slideImg">
                <img src={b2} alt="" />
              </div>
              <div class="slideText">
                <p>X-2 Wireless</p>
                <p>₹2500</p>
              </div>
              <div class="cont2-btn">
                <button>Add to Cart</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slideImg">
                <img src={b3} alt="" />
              </div>
              <div class="slideText">
                <p>Headphone XD200</p>
                <p>₹2399</p>
              </div>
              <div class="cont2-btn">
                <button>Add to Cart</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slideImg">
                <img src={b4} alt="" />
              </div>
              <div class="slideText">
                <p>Sparun Mechanical keyboard</p>
                <p>₹2000</p>
              </div>
              <div class="cont2-btn">
                <button>Add to Cart</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slideImg">
                <img src={b5} alt="" />
              </div>
              <div class="slideText">
                <p>Raptor</p>
                <p>₹5099</p>
              </div>
              <div class="cont2-btn">
                <button>Add to Cart</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slideImg">
                <img src={b6} alt="" />
              </div>
              <div class="slideText">
                <p>Wave</p>
                <p>₹2199</p>
              </div>
              <div class="cont2-btn">
                <button>Add to Cart</button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="slideImg">
                <img src={b7} alt="" />
              </div>
              <div class="slideText">
                <p>PS5</p>
                <p>₹35049</p>
              </div>
              <div class="cont2-btn">
                <button>Add to Cart</button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
export default Cont2;
