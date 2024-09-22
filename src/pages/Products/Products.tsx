import { useState, useEffect } from "react";
import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import FadeLoader from "react-spinners/Fadeloader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Search from "./Search";
import { Link } from "react-router-dom";

type TQueryParams = {
  search?: string;
  price?: string;
  category?: string;
  sort?: string;
};
type TProduct = {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

const Products = () => {
  const [queryParams, setQueryParams] = useState<TQueryParams>({});
  const { data, refetch, isLoading } = useGetAllProductQuery(queryParams);
  // console.log(data);

  useEffect(() => {
    refetch();
  }, [queryParams, refetch]);

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
    <div className="md:container mx-auto px-8 my-8 lg:px-0">
      <Search
        queryParams={queryParams}
        setQueryParams={setQueryParams}
      ></Search>
      {/* product section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-80">
        {data?.data?.map((product: TProduct) => (
          <Card
            key={product?._id}
            className="relative flex flex-col shadow-md hover:shadow-blue-700 h-full"
          >
            <CardContent className="flex-grow p-4 image-fluid">
              <div className="p-2 ">
                <img
                  className="w-full h-auto magnifier rounded-md"
                  src={product.image}
                  alt=""
                />
              </div>
            </CardContent>
            <CardHeader className="p-4">
              <CardTitle>{product.name}</CardTitle>
              <hr/>
              <CardDescription>{`${product.description.substring(
                0,
                50
              )}...`}</CardDescription>
              <p>Price:{product.price}</p>
            </CardHeader >
            <CardFooter className="mt-auto p-4 w-full">
              <Link to={`/product-details/${product?._id}`} className="w-full" >
                <Button className="btn-primary w-full">See Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Products;
