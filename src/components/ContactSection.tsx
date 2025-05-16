export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-white px-4 container mx-auto">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <div data-aos="fade-right">
                    <h2 className="text-3xl font-bold text-green-700 mb-6">Contact Us</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                        />
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Your Message"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                        />
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Italian Address + Map */}
                <div className="space-y-6" data-aos="fade-left">
                    <h3 className="text-2xl font-semibold text-gray-800">Our Location</h3>
                    <p className="text-gray-600">
                        JuiceBar Milano<br />
                        Via Torino 52<br />
                        20123 Milano, Italy<br />
                        Phone: +39 02 1234 5678
                    </p>

                    <div className="w-full h-64 rounded-lg overflow-hidden shadow">
                        <iframe
                            title="Google Map - JuiceBar Milano"
                            src="https://maps.google.com/maps?q=Via%20Torino%2052%2C%2020123%20Milano%2C%20Italy&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
