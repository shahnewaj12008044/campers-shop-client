import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useGetFeaturedProductQuery } from "@/redux/features/product/productApi";
import { TProduct } from "../BestSellingProducts/BestSellingProduct";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FadeLoader from "react-spinners/Fadeloader";

const FeaturedProducts = () => {
  const { data, isLoading } = useGetFeaturedProductQuery({});

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <FadeLoader
          color={"#020C29"}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );

  return (
    <div className="md:container mx-auto my-8">
      <div className="px-8">
        <div className="border-l-4 border-l-lime-400 px-4 py-4 bg-white rounded-lg w-full sm:w-3/4 md:w-1/2 mb-4">
          <h2 className="text-xs sm:text-sm md:text-2xl font-bold text-[#020C29] mb-4">
            Featured Products
          </h2>
        </div>
        <Carousel className="w-full ">
          <CarouselContent>
            {data?.data?.map((product: TProduct) => (
              <CarouselItem
                key={product?._id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="h-auto md:h-96 lg:h-auto">
                    <CardContent className="flex flex-col p-4 md:p-6 lg:p-8">
                      <div className="image-fluid">
                        <img
                          className="magnifier object-scale-down mb-4 w-full h-48 md:h-64 lg:h-80"
                          src={product?.image}
                          alt={product.name}
                        />
                      </div>
                      <div>
                        <h3 className="text-sm md:text-lg lg:text-xl font-semibold hover:text-[#020C29] mb-2">
                          {product.name}
                        </h3>
                       <p className="text-xs md:text-base lg:text-lg  text-slate-800">
                          {product.category}
                        </p>
                        <p className="text-sm md:text-base lg:text-lg text-[#020C29]">
                          Price: ${product.price}
                        </p>
                        <Link to={`/products-details/${product._id}`}>
                          <Button className="btn-primary mt-2">
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-4" />
          <CarouselNext className="mr-4" />
        </Carousel>
      </div>
    </div>
  );
};

export default FeaturedProducts;
