import Banner from "@/Components/Banner";
import AdoptionJourney from "@/Components/Design/AdoptionJourney";
import PetCareTips from "@/Components/Design/PetCareTips";
import QuotePage from "@/Components/Design/QuotePage";
import Statistics from "@/Components/Design/Statistics";
import SuccessStories from "@/Components/Design/SuccessStories";
import WhyAdoptPets from "@/Components/Design/WhyAdoptPets";
import FeaturedSectionHome from "@/Components/FeaturedSectionHome";

export const metadata = {
  title: "Home - Pet Harbor",
  description: "Welcome to Pet Harbor - Your Trusted Pet Adoption Platform. Discover loving pets waiting for a forever home. ",
   
}; 

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
