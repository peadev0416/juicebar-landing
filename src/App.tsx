import AOS from 'aos';
import { Helmet } from 'react-helmet';
import Header from './components/Header'
import HeroSlider from './components/HeroSlider'
import AboutUs from './components/AboutUs';
import OurJuices from './components/OurJuices';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import NewsletterSignup from './components/NewsletterSignup';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import 'aos/dist/aos.css';

AOS.init({ easing: 'ease-in-out', offset: 200, duration: 500, mirror: true, once: false });

function App() {
  return (
    <>
      <Helmet>
        <title>JuiceBar – Fresh Cold-Pressed Juices</title>
        <meta name="description" content="Order cold-pressed juices made from 100% natural ingredients. Get 10% off your first order!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="juice, cold-pressed, fresh juice, organic, delivery, healthy" />
        <meta name="author" content="JuiceBar" />
        <link rel="canonical" href="https://juicebar.com" />

        {/* Open Graph */}
        <meta property="og:title" content="JuiceBar – Fresh Cold-Pressed Juices" />
        <meta property="og:description" content="Enjoy the taste of health with our naturally made juices." />
        <meta property="og:image" content="/assets/images/juice-preview.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JuiceBar – Fresh Cold-Pressed Juices" />
        <meta name="twitter:description" content="Get 10% off your first order!" />
        <meta name="twitter:image" content="/assets/images/juice-preview.jpg" />
      </Helmet>

      <Header />
      <HeroSlider />
      <AboutUs />
      <OurJuices />
      <WhyChooseUs />
      <Testimonials />
      <NewsletterSignup />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
