import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';



function renderStars(rating: number) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<FaStar key={i} className="text-yellow-400" />);
        } else if (rating >= i - 0.5) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
        } else {
            stars.push(<FaRegStar key={i} className="text-yellow-400" />);
        }
    }
    return <div className="flex justify-center gap-1 mb-2">{stars}</div>;
}

const testimonials = [
    {
        name: 'Anna Rivera',
        role: 'Health Enthusiast',
        image: '/assets/images/testimonial-1.jpg',
        review:
            'Absolutely love the freshness and taste. I feel energized every morning thanks to JuiceBar!',
        rating: 5,
    },
    {
        name: 'Marco Li',
        role: 'Fitness Coach',
        image: '/assets/images/testimonial-2.jpg',
        review:
            'Clean ingredients, great service, and flavors that really stand out. Highly recommend!',
        rating: 4,
    },
    {
        name: 'Sara Kim',
        role: 'Yoga Instructor',
        image: '/assets/images/testimonial-3.jpg',
        review:
            'Best cold-pressed juice I’ve tried. My clients and I are big fans of their detox options.',
        rating: 4.5,
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-white px-4">
            <div className="text-center mb-12" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-green-700">Customer Testimonials</h2>
                <p className="text-gray-600 mt-2">What our happy customers are saying</p>
            </div>

            <div className="max-w-4xl mx-auto">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    loop
                    spaceBetween={30}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-green-50 rounded-2xl p-8 shadow-md text-center" data-aos="fade-down">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                                    loading="lazy"
                                />
                                <p className="text-gray-700 text-lg italic mb-4">“{testimonial.review}”</p>
                                <h4 className="text-xl font-semibold text-gray-800">{testimonial.name}</h4>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                                {renderStars(testimonial.rating)}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
