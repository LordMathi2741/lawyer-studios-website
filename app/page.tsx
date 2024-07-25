import NavBarContent from "@/app/public/components/navbar-content.component";
import HomeScreen from "@/app/public/pages/home-screen.page";
import AboutComponent from "@/app/components/about.component";
import ContactComponent from "@/app/components/contact.component";
import OurTeamComponent from "@/app/components/our-team.component";
import FooterContent from "@/app/public/components/footer-content.component";


export default function Home() {
  return (
    <div>
      <NavBarContent/>
        <HomeScreen/>
        <AboutComponent/>
        <hr className="bg-gray-500 p-1"/>
        <OurTeamComponent/>
        <ContactComponent/>
        <FooterContent/>
    </div>
  );
}
