import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import "./LanguagePhysics.css";

// 🔹 Import your 7 images
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";
import Img5 from "../assets/img5.jpg";
import Img6 from "../assets/img6.jpg";
import Img7 from "../assets/img7.jpg";

function LanguagePhysicsCanvas() {
  const slides = [
    { img: Img1, name: "Swetha Venkat - French Student" },
    { img: Img2, name: "Anugayathiri - German Student" },
    { img: Img3, name: "Cris Joy - German Student" },
    { img: Img4, name: "Sumitha Magesh - French Student" },
    { img: Img5, name: "Chitransha Tanwar - French Student" },
    { img: Img6, name: "Nithish Raghavendar T K - Japanese Student" },
    { img: Img7, name: "Revanth Raj S - Japanese Student" },
  ];

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "2rem 1rem",
      }}
    >
      <h2 className="faq-title">Our Testimonials</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="review-carousel"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="review-slide">
            <div className="review-card">
              <img src={slide.img} alt={slide.name} className="review-img" />
              <p className="review-name">{slide.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LanguagePhysicsCanvas;
