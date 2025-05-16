import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';

type Slide = {
  image: string;
  headline: string;
  sub: string;
};

const slides: Slide[] = [
  {
    image: '/assets/images/slider-2.jpg',
    headline: 'Fresh, Cold-Pressed Juices Delivered Daily',
    sub: '100% Natural · No Preservatives · Just Goodness',
  },
  {
    image: '/assets/images/slider-2.jpg',
    headline: 'Healthy Starts Here',
    sub: 'Boost your day with vibrant flavors & vitamins',
  },
];

export default function HeroSlider() {

  return (
    <section id="hero" className="w-full h-screen overflow-hidden">
      <Swiper
        modules={[Pagination, EffectFlip, Autoplay]}
        effect={'flip'}
        speed={2500}
        grabCursor
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-start text-center text-white sm:px-50"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-opacity-50 max-w-2xl text-center w-full sm:w-fit" data-aos="fade-up">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.headline}</h1>
                <p className="text-lg md:text-xl mb-6">{slide.sub}</p>
                <a
                  href="#contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full"
                >
                  Order Now
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section >
  );
}
