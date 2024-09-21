
import BestSelling from "./BestSellingProducts/BestSellingProduct";
import Category from "./Category/Category";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import { Hero } from "./Hero/Hero";
import Unique from "./Unique/Unique";
import Faq from "./Accordion/Accordion";

const Home = () => {
  return (
    <div className="z-9 ">
      <Hero></Hero>
      <BestSelling></BestSelling>
      <Category></Category>
      <FeaturedProducts></FeaturedProducts>
      <Unique></Unique>
      <Faq></Faq>
    </div>
  );
};

export default Home;
