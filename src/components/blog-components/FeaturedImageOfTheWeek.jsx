import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";

export default function FeaturedImageOfTheWeek({ images }) {
  console.log(images);
  return (
    <>
      {images?.map((images) => (
        <div>
          <img src={images.image.url} alt="" />
        </div>
      ))}
    </>
  );
}
