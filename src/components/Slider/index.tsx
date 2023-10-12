import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./style.module.scss";

interface SliderProps {
  info: string[];
  title: string;
}

const Slider: React.FC<SliderProps> = ({ info, title }) => {
  console.log(info, title);

  return (
    <div>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={10}
        slidesPerView={"auto"}
        className={styles.swiper}
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <div style={{ color: "white" }}>{item.original_title}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
