import { useState } from "react";

// Local Components
import BtnSlider from "./btnSlider/BtnSlider";

// Styles
import s from "./Slider.module.css";

export interface ProductProps {
  images: {
    url: string;
  }[];
}
function Slider({ images }: ProductProps) {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === images.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(images.length);
    }
  };

  return (
    <div className={s.slider}>
      {images.map((image, index) => (
        <div
          className={
            slideIndex === index + 1 ? `${s.slide} ${s.active__anim}` : s.slide
          }
          key={image.url}
        >
          <img src={image.url} alt="image" width="400px" />
        </div>
      ))}

      {images.length > 1 && (
        <>
          <BtnSlider moveSlide={nextSlide} direction="next" />
          <BtnSlider moveSlide={prevSlide} direction="prev" />
        </>
      )}
    </div>
  );
}

export default Slider;
