import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './styles.css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from "swiper";
import BannerImg from "./BannerImg";


export default function Banner() {

  return (
    <>
      <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className="mySwiper">

        <SwiperSlide>
          <BannerImg index="0" />
        </SwiperSlide>

        <SwiperSlide>
          <BannerImg index="1" />
        </SwiperSlide>

        <SwiperSlide>
          <BannerImg index="2" />
        </SwiperSlide>
      </Swiper>
    </>

  );
}
