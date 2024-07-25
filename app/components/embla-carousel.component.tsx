"use client";
import React from 'react'
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export function EmblaCarousel() {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay({delay:2000, stopOnInteraction:false})])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide w-full flex justify-center"><img
                    src="https://sepulvedabogados.com/wp-content/uploads/2020/05/Aprende-t%C3%A9rminos-legales-en-ingl%C3%A9s-para-abogados.jpg"
                    className="carrousel-image"/></div>
                <div className="embla__slide w-full flex justify-center"><img
                    src="https://www.globalfoto.es/wp-content/uploads/2016/02/shutterstock_295265978reducida.jpg"
                    className="carrousel-image"/></div>
                <div className="embla__slide w-full flex justify-center"><img
                    src="https://www.globalfoto.es/wp-content/uploads/2016/02/shutterstock_295265978reducida.jpg"
                    className="carrousel-image"/></div>
            </div>
        </div>
    )
}
