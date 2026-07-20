import AIAssistant from "@/Components/HomePage/AIAssistant/AIAssistant";
import Banner from "@/Components/HomePage/Banner/Banner";
import BrowseByCategory from "@/Components/HomePage/BrowsebyCategory/BrowsebyCategory";
import HowDecoraAIWorks from "@/Components/HomePage/HowDecoraAIWorks/HowDecoraAIWorks";
import WhyChooseDecoraAI from "@/Components/HomePage/WhyChooseDecoraAI/WhyChooseDecoraAI";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>

      <BrowseByCategory></BrowseByCategory>

      <AIAssistant></AIAssistant>

      <WhyChooseDecoraAI></WhyChooseDecoraAI>

      <HowDecoraAIWorks></HowDecoraAIWorks>
    </div>
  );
};

export default HomePage;
