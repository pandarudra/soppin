import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-9">
        <div className="h-16 w-full">
          <Header />
        </div>
        <div className="w-auto h-auto">
          <h2 className="font-black text-3xl text-center">
            "Elegance Redefined: Our Journey in Women's Fashion"
          </h2>
          <h2 className="w-auto h-auto p-6 text-xl">
            In the heart of our bustling city, amidst the vibrant tapestry of
            cultures and styles, our journey in women's fashion began with a
            simple yet profound vision: to redefine elegance for the modern
            woman. Welcome to our world, where every stitch tells a story, and
            every design embodies the essence of grace and sophistication. Our
            story is one of passion, perseverance, and a deep-rooted commitment
            to craftsmanship. Founded by a team of fashion enthusiasts with a
            shared love for timeless beauty, we embarked on this adventure with
            a clear purpose – to empower women to embrace their individuality
            and express themselves through the artistry of clothing. At the core
            of our brand is a dedication to quality and attention to detail.
            Each garment is meticulously crafted using the finest materials,
            sourced ethically and sustainably. From luxurious silks to sumptuous
            velvets, we spare no effort in ensuring that every piece exudes
            refinement and refinement. Inspired by the rich tapestry of global
            cultures and the ever-evolving landscape of fashion, our design
            philosophy is a fusion of tradition and innovation. Whether it's the
            understated elegance of a classic silhouette or the bold allure of
            avant-garde couture, our collections embody a harmonious blend of
            timeless sophistication and contemporary flair. But beyond the realm
            of fashion, our brand is built on the values of integrity,
            inclusivity, and community. We believe in the power of fashion to
            unite, inspire, and uplift. That's why we're dedicated to fostering
            a community where every woman feels seen, heard, and celebrated for
            who she is. From our customer service team who goes above and beyond
            to ensure your shopping experience is nothing short of
            extraordinary, to our commitment to sustainability and ethical
            practices, every aspect of our brand reflects our unwavering
            dedication to excellence. As we continue on this journey, our vision
            remains clear – to be more than just a fashion brand, but a beacon
            of elegance, empowerment, and inspiration for women around the
            world. Join us as we redefine what it means to be truly elegant, one
            exquisite garment at a time.
          </h2>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default About;
