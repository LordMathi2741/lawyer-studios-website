import NavBarContent from "@/app/public/components/navbar-content.component";
import HomeScreen from "@/app/public/pages/home-screen.page";
import AboutPage from "@/app/pages/about.page";
import ContactPage from "@/app/pages/contact.page";


export default function Home() {
  return (
    <div>
      <NavBarContent/>
        <HomeScreen/>
        <AboutPage/>
        <ContactPage/>
    </div>
  );
}
