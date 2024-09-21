import BestSelling from "./BestSellingProducts/BestSellingProduct";
import Category from "./Category/Category";
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts";
import { Hero } from "./Hero/Hero";

const Home = () => {
  return (
    <div className="z-9 ">
      <Hero></Hero>
      <BestSelling></BestSelling>
      <Category></Category>
      <FeaturedProducts></FeaturedProducts>
    </div>
  );
};

export default Home;
