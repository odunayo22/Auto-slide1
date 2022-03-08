
import React, {useState} from 'react';
import {SliderData} from './components/SliderData';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'; 

const ImageSlider = ({ slides }) => {
    key={index};
    const [current, setCurrent] = useState(0);
    const length = slides.length;

   
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }

    console.log(current)

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    
    }

  return(
  <section className='slider'>
      <FaArrowCircleLeft className='left-arrow' 
      onClick={prevSlide}  />
      <FaArrowCircleRight className='right-arrow'   onClick={nextSlide}  />
    {SliderData.map((slide, index) => {
        return(
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                {index === current && (
                <img src={slide.image} alt="mySlidings" className='image' />)}
            </div>
        );
                           
    })};
    </section>
  )
  
};

export default ImageSlider;