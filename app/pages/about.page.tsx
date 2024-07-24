import React from 'react';
export default function AboutPage(){
    return (
        <div className="mt-10 grid place-content-center gap-2">
            <h1 className="text-md md:text-lg lg:text-2xl font-bold"> Sobre Nosotros</h1>
            <div className="flex flex-col gap-3">
                <h2 className="text-xs md:text-lg lg:text-2xl"> Soluciones Juridicas Integrales </h2>
                <div className=" about-container flex flex-col lg:flex-row gap-10 lg:gap-20 text-justify text-xs md:text-md lg:text-lg text-gray-600">
                    <h3> Somos una organización con 19 años de experiencia en el mercado proveyendo asesoría legal para la solución de conflictos en el sistema judicial y arbitral, a fin de maximizar valor para nuestros clientes.
                        Nuestro equipo se compone por abogados sénior y junior, de reconocida reputación profesional y elevada formación académica en universidades de Europa y América Latina, con amplia experiencia en el sector público y privado, acompañados por colaboradores con alto desempeño académico y sólida formación personal. Capacidades que nos otorgan una ventaja competitiva puesta al servicio de nuestros clientes nacionales y extranjeros.
                        En estos años de servicio hemos patrocinado más de 850 casos, por un valor total estimado en 200 millones de soles, obteniendo decisiones jurisdiccionales que luego se han convertido en referentes para diversas Cortes del Perú.
                        Los servicios que brindamos son accesibles a través de canales de atención virtual y físico, pensados siempre para la seguridad y comodidad de nuestros clientes. Con este propósito nuestra sede institucional está organizada en un área de 600 m2, dotada con los medios digitales más usados para garantizar el estándar que merece nuestra cartera.</h3>
                   <img src="https://lirp.cdn-website.com/981b6613/dms3rep/multi/opt/GettyImages-1351110189-1920w.jpg" alt="Brand logo" className="w-72 h-64 lg:h-72  lg:mt-32"/>
                </div>
            </div>
        </div>
    )
}