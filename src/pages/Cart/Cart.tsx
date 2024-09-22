import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  incrementProductQuantity,
  decrementProductQuantity,
  removeProductFromCart,
  TProduct,
} from "@/redux/features/cart/cartSlice";

import { useGetAllProductQuery } from "@/redux/features/product/productApi";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Swal from "sweetalert2";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cart);
  const { data, isLoading } = useGetAllProductQuery({});
  const dispatch = useAppDispatch();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.neededQuantity,
    0
  );

  const handleDeleteItem = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeProductFromCart(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your item has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleIncreaseQuantity = (id: string) => {
    const product = cart.find((item) => item._id === id);
    const result = data?.data?.find((product: TProduct) => product._id === id);
    if (product && product.neededQuantity < result.quantity) {
      dispatch(incrementProductQuantity(id));
    } else {
      toast.error("Not enough stock available");
    }
  };

  const handleDecreaseQuantity = (id: string) => {
    dispatch(decrementProductQuantity(id));
  };

  if (isLoading) {
    return <Loader />;
  }

  const isCartEmpty = cart.length === 0;

  const handlePlaceOrder = () => {
    navigate("/checkout", { state: { totalPrice } });
  };

  return (
    <section className="max-w-7xl mx-auto py-20 px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="border border-gray-200 rounded-lg shadow-md p-6 bg-white">
            <div className="pb-4 border-b border-gray-200">
              <h2 className="text-2xl text-gray-800 font-semibold hover:text-lime-400">
                Your Cart
              </h2>
              <p className="text-sm text-gray-600">
                Total products: {cart?.length}
              </p>
            </div>
            <div className="overflow-x-auto">
              <Table className="p-12 min-w-[600px]">
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Product</TableHead>
                    <TableHead className="text-center">Quantity</TableHead>
                    <TableHead className="text-center">Total</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="">
                  {cart?.map((item) => (
                    <TableRow className="" key={item._id}>
                      <TableCell className="md:w-1/2 bg-slate-200 rounded-lg py-4 shadow-md">
                        <div className="flex items-center space-x-4">
                          <img
                            className="object-cover rounded-md w-20 h-20"
                            src={item.image}
                            alt={item.name}
                          />
                          <div>
                            <h4 className="text-base font-medium text-gray-800">
                              {item.name}
                            </h4>
                            <p className="text-sm text-gray-500">
                              ${item.price}
                            </p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="">
                        <div className="flex items-center justify-center space-x-3">
                          <Button
                            onClick={() => handleDecreaseQuantity(item._id)}
                            disabled={item.neededQuantity === 1}
                            variant="ghost"
                            className="border border-gray-300 p-1"
                          >
                            <FaMinus />
                          </Button>
                          <span className="text-lg font-semibold text-gray-900">
                            {item.neededQuantity}
                          </span>
                          <Button
                            onClick={() => handleIncreaseQuantity(item._id)}
                            variant="ghost"
                            className="border border-gray-300 p-1"
                          >
                            <IoMdAdd className="font-bold text-xl text-lime-700" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <p className="text-lg font-semibold text-gray-900">
                          ${item.price * item.neededQuantity}
                        </p>
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button
                          className=" bg-red-700 hover:bg-lime-400 hover:text-[#020C29]"
                          onClick={() => handleDeleteItem(item._id)}
                        >
                          <MdDeleteOutline className="size-6 font-bold" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        <div>
          <div className="border border-gray-200 rounded-lg shadow-md p-6 bg-white">
            <h2 className="text-2xl text-gray-900 font-semibold mb-4 hover:text-lime-400">
              Summary
            </h2>
            <div className="flex justify-between text-lg font-medium text-gray-900">
              <span>Total</span>
              <span>${totalPrice}</span>
            </div>
            <div className="mt-4 text-sm text-gray-600 hover:text-lime-400">
              Tax included. Shipping calculated at checkout.
            </div>

            {isCartEmpty ? (
              <Button
                className="w-full bg-gray-300 text-gray-600 cursor-not-allowed mt-6"
                disabled
              >
                Place Order
              </Button>
            ) : (
              <Button
                onClick={handlePlaceOrder}
                className="w-full mt-6 bg-[#020C29] text-white hover:bg-gray-600"
              >
                Place Order
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
