type Juice = {
  name: string;
  price: number;
  image: string;
};

const juices: Juice[] = [
  { name: 'Avocado Juice', price: 18, image: '/assets/images/product1.png' },
  { name: 'Jackfruit Juice', price: 15, image: '/assets/images/product2.png' },
  { name: 'Blue Ice Juice', price: 17, image: '/assets/images/product3.png' },
  { name: 'Orange Juice', price: 14, image: '/assets/images/product4.png' },
  { name: 'Strawberry Juice', price: 13, image: '/assets/images/product5.png' },
  { name: 'Coconut Juice', price: 12, image: '/assets/images/product6.png' },
];

export default function OurJuices() {
  return (
    <section id="menu" className="px-4 container mx-auto">
      <div className="bg-yellow-400 rounded-[40px] py-20">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-green-700">Our Juices</h2>
          <p className="text-gray-700 mt-2">Freshly made with love — every glass, every day</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-34 sm:gap-x-18 md:gap-x-12 px-6 px-auto md:px-16">
          {juices.map((juice, idx) => (
            <div className="relative pt-36 max-w-96 min-w-80 mx-auto" key={idx} data-aos="fade-up">
              <div
                className="bg-transparent rounded-2xl shadow-md overflow-hidden text-center hover:shadow-2xl transition duration-300"
              >
                {/* Orange background with image floating above */}
                <div className="bg-orange-300 pt-46 pb-6 rounded-t-2xl overflow-hidden">
                  <img
                    src={juice.image}
                    alt={juice.name}
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-90 w-auto drop-shadow-lg"
                    loading="lazy"
                  />
                </div>

                {/* Info below */}
                <div className="pt-4 pb-6 bg-white">
                  <h3 className="text-lg font-medium text-gray-800">{juice.name}</h3>
                  <p className="text-red-500 text-xl font-semibold">${juice.price}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
