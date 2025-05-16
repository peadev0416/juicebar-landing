



export default function AboutUs() {
    return (
        <section id="about" className="py-20 bg-white px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
                {/* Image Section */}
                <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-lg" data-aos="fade-right">
                    <img
                        src="/assets/images/about-juice.jpg"
                        alt="Fresh Juice"
                        className="absolute inset-0 w-full sm:h-[500px] md:h-[600px] lg:h-auto object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-500/40 to-transparent" />
                </div>

                {/* Text Section */}
                <div data-aos="fade-left">
                    <h2 className="text-4xl font-bold text-green-500 mb-4">About JuiceBar</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        At <strong>JuiceBar</strong>, we’re passionate about fueling your life with pure, cold-pressed
                        goodness. Every bottle is handcrafted daily using locally-sourced fruits and veggies — no
                        added sugar, no preservatives, just honest nutrition.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        We care about your health and the planet. That’s why we use eco-friendly packaging and
                        support sustainable farms. Whether you're post-workout or powering through your day,
                        we’re here to refresh you — one sip at a time.
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm">
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                            100% Natural
                        </span>
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                            Locally Sourced
                        </span>
                        <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                            Eco-Friendly
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
