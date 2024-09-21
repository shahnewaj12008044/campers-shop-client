import BestSelling from "./BestSellingProducts/BestSellingProduct";
import { Hero } from "./Hero/Hero";

const Home = () => {
  return (
    <div className="z-9 ">
      <Hero></Hero>
      <BestSelling></BestSelling>
    </div>
  );
};

export default Home;
