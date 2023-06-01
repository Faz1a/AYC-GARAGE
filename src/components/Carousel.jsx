import SOne from '../assets/DetailingCar.jpg'
import STwo from '../assets/WrapCar.png'
import SThree from '../assets/WindowsTint.png'
import SFour from '../assets/PaintCar.png'
import SFive from '../assets/RentCar.png'

import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


function Carousel() {
    const slides = [
        {
            url: SOne,
            heading: "CAR DETAILING",
            text: "Get your car looking like new with our professional detailing services.",
            button: "Saznaj više"
        },
        {
            url: STwo,
            heading: "CAR WRAPPING",
            text: "Give your car a bold new look with our custom vinyl wraps.",
            button: "Saznaj više"
        },
        {
            url: SThree,
            heading: "WINDOWS TINT",
            text: "Protect your privacy and keep your car cool with our window tinting.",
            button: "Saznaj više"
        },
        {
            url: SFour,
            heading: "CAR PAINTING",
            text: "Transform your car with a fresh coat of paint from our expert team.",
            button: "Saznaj više"
        },
        {
            url: SFive,
            heading: "RENT A CAR",
            text: "Explore the open road with our reliable and affordable rental cars.",
            button: "Saznaj više"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(slideInterval);
    }, [currentIndex]);

    return (
        <div className='h-[649px] w-full relative group'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full bg-center bg-cover duration-1000'>
                <div className='pt-40 xl:pt-60'>
                    <h1 className="text-5xl xl:text-7xl font-bold mb-2 text-white text-center font-aycfont">{slides[currentIndex].heading}</h1>
                    <p className="text-2xl xl:text-3xl  text-aycolor text-center mt-8">{slides[currentIndex].text}</p>
                    <div className='flex justify-center mt-8'>
                    <button type="button" class="font-aycfont text-white bg-black hover:bg-aycolor hover:duration-700 dark:focus:ring-aycolor shadow-lg shadow-aycolor dark:shadow-lg dark:shadow-aycolor font-medium rounded-lg text-sm px-10 py-5 text-center">{slides[currentIndex].button}</button>
                    </div>
                </div>
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>

            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                    <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className='text-2xl cursor-pointer'
                    >

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carousel