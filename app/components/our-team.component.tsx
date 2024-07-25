import {EmblaCarousel} from "@/app/components/embla-carousel.component";

export default function OurTeamComponent(){
    return (
        <div className=" mt-10 text-sm md:text-base lg:text-xl xl:text-2xl font-bold flex flex-col gap-20 items-center">
            <h1> Conoce acerca de nuestro equipo </h1>
            <div className="mx-auto">
                <EmblaCarousel/>
            </div>
        </div>
    )
}