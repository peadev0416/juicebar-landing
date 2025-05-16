export default function NewsletterSignup() {
    return (
        <section id="newsletter" className="py-20 bg-green-100 px-4">
            <div className="max-w-3xl mx-auto text-center" data-aos="fade-left">
                <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                    Get 10% Off Your First Order
                </h2>
                <p className="text-gray-700 mb-6">
                    Subscribe to our newsletter for promos, updates, and fresh juice perks!
                </p>

                <form
                    action="https://yourname.us21.list-manage.com/subscribe/post?u=abc1234567890&amp;id=xyz987654321"
                    method="POST"
                    target="_blank"
                    className="flex flex-col sm:flex-row justify-center items-center gap-4"
                >
                    <input
                        type="email"
                        name="EMAIL"
                        placeholder="Enter your email"
                        required
                        className="w-full sm:w-auto px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
}

