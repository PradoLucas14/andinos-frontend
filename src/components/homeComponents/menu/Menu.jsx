import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Menu.css";

// Importa las imágenes
import img1 from "../../../assets/img/imgMenu1.jpg";
import img2 from "../../../assets/img/imgMenu2.jpg";
import img3 from "../../../assets/img/imgMenu3.jpg";
import img4 from "../../../assets/img/imgMenu4.jpg";
import img5 from "../../../assets/img/imgMenu5.jpg";

function Menu() {
  const menuItems = [
    { src: img1, title: "Empanadas", price: "$500" },
    { src: img2, title: "Hamburgueza", price: "$3500" },
    { src: img3, title: "Pizza", price: "$6100" },
    { src: img4, title: "Tacos de Carne", price: "$800" },
    { src: img5, title: "Ñoquis", price: "$3800" }
  ];

  return (
    <div className="menu-container">
      <h2 className="menu-title">- Menú del Día -</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 6500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        className="menu-swiper"
      >
        {menuItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="menu-card">
              <img src={item.src} alt={item.title} className="menu-image" />
              <div className="menu-info">
                <h3 className="menu-item-title">{item.title}</h3>
                <p className="menu-item-price">{item.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Menu;

