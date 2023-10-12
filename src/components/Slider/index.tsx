import { Swiper, SwiperSlide } from "swiper/react";
import "./style.scss";
import Cards from "../Cards";

interface SliderProps {
  info: string[];
  title: string;
}

const Slider: React.FC<SliderProps> = ({ info, title }) => {
  return (
    <div className="container">
      <h2 className="titleSlide">{title}</h2>
      <Swiper grabCursor spaceBetween={10} slidesPerView={"auto"}>
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <Cards item={item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
