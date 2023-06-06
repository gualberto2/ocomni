import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";

export default function FeaturedImageOfTheWeek({ imgs }) {
  console.log(imgs);
  return (
    <>
      {imgs?.map((img) => (
        <div>
          <img src={img.image.url} alt="" />
        </div>
      ))}
    </>
  );
}
