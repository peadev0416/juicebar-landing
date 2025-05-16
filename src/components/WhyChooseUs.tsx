import { FaCheck } from 'react-icons/fa';

export default function WhyChooseUs() {
    return (
        <section id="benefits" className="py-20 px-4 bg-white container mx-auto">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[40%_60%] gap-12 items-center">
                {/* Left Image */}
                <div className="flex justify-end mb-6 md:mb-0" data-aos="fade-left">
                    <img
                        src="/assets/images/whyus.png"
                        alt="Juice Variety"
                        className="w-full rounded-3xl shadow-lg object-cover"
                        loading="lazy"
                    />
                </div>

                {/* Right Content */}
                <div data-aos="fade-right">
                    <p className="text-red-500 font-medium mb-2">Benefit</p>
                    <h2 className="text-4xl font-bold text-green-700 mb-4">Why Choose Us</h2>
                    <p className="text-gray-700 mb-6">
                        At JuiceBar, we offer more than just refreshing drinks. We combine premium ingredients,
                        sustainable practices, and fast delivery to bring health and convenience straight to your door.
                    </p>

                    {/* Sub image and paragraph */}
                    <div className="flex items-start gap-6 mb-6">
                        <img
                            src="/assets/images/juice-benefit.png"
                            alt="Benefits"
                            className="w-50 h-40 object-cover rounded-2xl"
                            loading="lazy"
                        />
                        <p className="text-gray-600 text-sm">
                            Every juice is cold-pressed and packaged to preserve nutrients. Whether it’s post-workout
                            fuel or a daily detox, we deliver with freshness you can taste.
                        </p>
                    </div>

                    {/* Checklist */}
                    <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
                        {[
                            'Healthy',
                            'Fresh Fruit',
                            'Pure Sugar',
                            'Good Taste',
                            'Packing',
                            'Low Price',
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-800">
                                <FaCheck className="text-red-500 text-xs" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
