
"use client";
import React, {useEffect, useState} from 'react';
import Image from "next/image";
import Logo from "../../../assets/logo.png";
import { FaPhoneAlt} from "react-icons/fa";
import {RxHamburgerMenu} from "react-icons/rx";
import {IoMdCloseCircleOutline} from "react-icons/io";
export default function NavBarContent(){
    const [toolbar, setToolbar] = useState(false);
    function setToggleToolbar(){
        setToolbar(!toolbar);
    }
    const [header, setHeader] = useState(false);


    const changeBackground = () => {
        setHeader(window.scrollY > 0);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);

        return () => {
            window.removeEventListener('scroll', changeBackground);
        }
    }, [])

    return (
        <nav className={`navbar-container flex justify-between lg:justify-evenly p-4  ${header ? 'bg-slate-200 text-black' : 'bg-black text-white'}  text-xs md:text-md lg:text-lg`} aria-label="Nvbar content section">
            <div >
              <Image src={Logo} alt="Brand logo" className=" w-20 lg:w-44"/>
            </div>
            <div className=" flex flex-col lg:mt-10">
                <RxHamburgerMenu onClick={setToggleToolbar} className={`${!toolbar ? 'block' :'hidden' } hover:text-yellow-600 hover:cursor-pointer text-xl lg:hidden mt-10 mr-4`}/>
                <ul className={`${toolbar ? 'flex':'hidden'}   text-center lg:flex flex-col lg:flex-row gap-2 lg:gap-5`}>
                    <li className="hover:bg-yellow-600 hover:cursor-pointer lg:p-3 xl:p-5 "> Inicio </li>
                    <li className="hover:bg-yellow-600 hover:cursor-pointer lg:p-3 xl:p-5"> Nosotros </li>
                    <li className="hover:bg-yellow-600 hover:cursor-pointer lg:p-3 xl:p-5"> Equipo </li>
                    <li className="hover:bg-yellow-600 hover:cursor-pointer lg:p-3 xl:p-5"> Servicios</li>
                    <li className="hover:bg-yellow-600 hover:cursor-pointer lg:p-3 xl:p-5"> Otros </li>
                    <li className="hover:bg-yellow-600 hover:cursor-pointer lg:p-3 xl:p-5"> Contacto</li>
                    <li className=" md:p-2 lg:p-3 xl:p-5 text-yellow-600 flex items-center  gap-2">
                        <FaPhoneAlt />
                        <p className="lg:text-sm xl:text-xl"> +51 974 660 869</p>
                    </li>
                    <li className="mx-auto">
                        <IoMdCloseCircleOutline onClick={setToggleToolbar} className="text-xl lg:hidden hover:text-yellow-600 hover:cursor-pointer"/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}