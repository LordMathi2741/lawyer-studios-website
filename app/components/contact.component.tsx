import React from 'react';
import QR from '../../assets/QR.jpeg';
import Image from "next/image";
export default function ContactComponent(){
    return (
        <div className="contact-container flex justify-center items-center gap-3 text-xs  md:text-lg lg:text-xl xl:text-2xl flex-col mt-10 text-center bg-black text-white">
            <h1> ¿Desea Contactarme? Scanee este codigo QR y guarde mis datos</h1>
            <Image src={QR} alt="QR" className="qr-image"/>
        </div>
    )
}