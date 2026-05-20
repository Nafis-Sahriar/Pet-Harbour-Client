import Banner from "@/Components/Banner";
import AdoptionJourney from "@/Components/Design/AdoptionJourney";
import PetCareTips from "@/Components/Design/PetCareTips";
import QuotePage from "@/Components/Design/QuotePage";
import Statistics from "@/Components/Design/Statistics";
import SuccessStories from "@/Components/Design/SuccessStories";
import WhyAdoptPets from "@/Components/Design/WhyAdoptPets";
import FeaturedSectionHome from "@/Components/FeaturedSectionHome";
import { Button } from "@heroui/react";
import { Quote } from "lucide-react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function Home() {

  
  return (
    <div>
      
      <Banner></Banner>
      <FeaturedSectionHome></FeaturedSectionHome>
      <WhyAdoptPets></WhyAdoptPets>
      <SuccessStories></SuccessStories>
      <AdoptionJourney/>
      <PetCareTips></PetCareTips>
      <Statistics></Statistics>
      <QuotePage></QuotePage>
       
     
    </div>
  );
}
