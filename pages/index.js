import BrandCompany from "@/Components/BrandCompany";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";
import Banner from "@/Components/Home/Banner/Banner";
import LuckyCuppon from "@/Components/LuckyCuppon";


export default function Home() {
  return (
    <>
      <div>
        <Banner/>
        <Contact />
        <LuckyCuppon/>
        <BrandCompany/>
        <Footer/>
      </div>
    </>
  )
}
