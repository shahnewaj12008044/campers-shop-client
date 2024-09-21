import FadeLoader from "react-spinners/Fadeloader";
import { Button } from "@/components/ui/button";
import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge"

type TProduct = {
  _id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}
const BestSelling = () => {
  const { data, isLoading } = useGetAllProductQuery({});
  if (isLoading) return (
    <div className="flex items-center justify-center min-h-screen">
      <FadeLoader
        color={"#020C29"}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
  
  return (
    <div className="md:conteiner  px-8">
      <div className="max-w-screen-xl mx-auto mt-16 p-4 md:p-0 ">
      <div className="border-l-4
        border-l-lime-400 px-4 py-4 bg-white rounded-lg w-1/2 mb-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 ">
          Best Selling/Recommended Products
        </h2>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data?.data?.slice(4,8).map((product: TProduct) => (
            <div
              className="bg-white rounded-lg overflow-hidden custom-transition shadow-md shadow-blue-900 hover:scale-105 duration-300"
             
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <hr  />
                <Badge className="bg-[#020C29] mx-auto my-auto"><p className="text-lime-400 font-bold">Price: ${product.price}</p></Badge>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/products">
            <Button className="btn-primary">
              View More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
