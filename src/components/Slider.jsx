import { useState, useEffect } from 'react';


import img1 from "../assets/SliderBanner/1.png";
import img2 from "../assets/SliderBanner/2.png";
import img3 from "../assets/SliderBanner/3.png";
import img4 from "../assets/SliderBanner/4.png";

const Slider = () => {
  const slides = [
    {
      image: img1,
      heading: 'Welcome to Slide 1',
      description: 'This is the first slide content.'
    },
    {
      image: img2,
      heading: 'Indeed, Allah loves those who are constantly repentant and loves those who purify themselves.',
      description: '[Quran 2:222]'
    },
    {
      image: img3,
      heading: 'Welcome to Slide 3',
      description: 'This is the third slide content.'
    },
    {
      image: img4,
      heading: 'Welcome to Slide 4',
      description: 'This is the third slide content.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const changeSlide = (direction) => {
    const newIndex = (currentSlide + direction + slides.length) % slides.length;
    setCurrentSlide(newIndex);
  };

  return (
    <div className="relative overflow-hidden">
     
      <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
            <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-20">
              <h1 className="text-white text-xl font-bold mb-4">{slide.heading}</h1>
              <p className="text-white text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2" onClick={() => changeSlide(-1)}>
        &#10094;
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-4 py-2" onClick={() => changeSlide(1)}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
