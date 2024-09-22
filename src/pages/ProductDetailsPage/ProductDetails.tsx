/* eslint-disable @typescript-eslint/no-unused-vars */
import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { Rating } from "@smastrom/react-rating";
import ImageMagnifier from "./ImageMagnifier";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading, refetch } = useGetSingleProductQuery(id);
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart);
  const [neededQuantity, setNeededQuantity] = useState(1);

  const existingCartProduct = cart.find((product) => product._id === id);

  const handleAddToCart = async () => {
    const newQuantity = existingCartProduct
      ? existingCartProduct.neededQuantity + neededQuantity
      : neededQuantity;
    console.log(data.data.quantity, newQuantity);
    if (data?.data?.quantity < newQuantity) {
      toast.error("Not enough stock available");
      return;
    }
    try {
      refetch();
      const cartData = {
        ...data.data,
        neededQuantity,
      };

      dispatch(addToCart(cartData));
      toast.success("Product added to cart");
    } catch (error) {
      toast.error("Failed to add product to cart");
    }
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setNeededQuantity(value);
  };

  if (isLoading) {
    return <Loader></Loader>;
  }
  console.log(data);

  return (
    <div className="max-w-screen-xl mx-auto my-8 bg-slate-100 p-4 md:p-0 rounded-md">
      <div className="flex flex-col md:flex-row gap-8 p-4 items-center">
        <div className="image-container md:w-1/2">
          <ImageMagnifier
            src={data?.data?.image}
            width={400} // Provide the width (e.g., 400px)
            height={300} // Provide the height (e.g., 300px)
            alt="Product Image" // Provide alt text
            className="rounded-md" // Optional: custom Tailwind CSS classes
            magnifierHeight={150} // Optional: height of magnifier (default is 200)
            magnifierWidth={150} // Optional: width of magnifier (default is 200)
            zoomLevel={2} // Optional: magnification level (default is 1.5)
          />

          {/* <img src={data?.data?.image} className="rounded-md" /> */}
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4 hover:text-lime-400">
            {data?.data?.name}
          </h1>
          <div className="flex items-center text-gray-600 mb-4 hover:text-lime-400">
            Rating:{" "}
            <Rating
              style={{ maxWidth: 100 }}
              readOnly
              orientation="horizontal"
              value={data?.data?.ratings}
            />
          </div>
          <p className="text-gray-700 mb-4 hover:text-lime-400">
            {data?.data?.description}
          </p>
          <div className="flex items-center mb-4">
            <span className="text-gray-700 font-medium mr-2 hover:text-lime-400">
              Category:
            </span>
            <span className="text-gray-600 hover:text-lime-400">
              {data?.data?.category}
            </span>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-[#020C29] font-semibold mr-2">Price:</span>
            <span className="text-[#020C29] font-semibold">
              ${data?.data?.price}
            </span>
          </div>
          <div className="flex items-center mb-4">
            {data?.data?.quantity ? (
              <p className="flex gap-1 items-center text-gray-700 font-semibold hover:text-lime-400">
                Stock: {data?.data?.quantity}
              </p>
            ) : (
              <p className="text-[#020C29] font-semibold flex gap-1 items-center">
                Out Of Stock
              </p>
            )}
          </div>
          <div className="flex items-center mb-4">
            <label
              htmlFor="quantity"
              className="text-gray-700 font-medium mr-2 hover:text-lime-400"
            >
              Quantity:
            </label>
            <input
              id="quantity"
              type="number"
              value={neededQuantity}
              onChange={handleQuantityChange}
              className="w-16 px-3 py-1 border border-gray-300 rounded-md"
              min="1"
            />
          </div>
          <Button
            onClick={handleAddToCart}
            disabled={data?.data?.stock === 0}
            className="btn-primary"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
