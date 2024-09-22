
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddProduct from "@/components/modal/AddProduct";
import { useDeleteproductMutation, useGetAllProductQuery } from "@/redux/features/product/productApi";
import UpdateProduct from "@/components/modal/UpdateProduct";
import Swal from "sweetalert2";
import { toast } from "sonner";
import Loader from "@/components/shared/Loader";
import { MdDeleteOutline } from "react-icons/md";



interface IProduct {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string; 
  rating: number; 
  quantity: number;
}

const ProductManagement = () => {
  const [deleteProduct] = useDeleteproductMutation();
  const { data, isLoading } = useGetAllProductQuery({});


  const handleDelete = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await deleteProduct(id).unwrap();
        if (res?.success) {
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
          });
        } else {
          toast.error("Failed to delete product");
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        toast.error("Failed to delete product");
      }
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div className="max-w-screen-xl mx-auto py-20 px-3">
      <div className="border border-gray-400 rounded-lg p-8">
        <AddProduct />
        <p className="flex justify-end font-semibold">
          Total products: {data?.data?.length}
        </p>
        <Table className="p-12">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data?.map((item: IProduct) => (
              <TableRow key={item._id}>
                <TableCell>
                  <img
                    className="object-cover rounded-lg size-14"
                    src={item.image}
                    alt={item.name}
                  />
                </TableCell>
                <TableCell className="text-sm">{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.quantity}</TableCell>
                <TableCell className="text-right space-x-2">
                  <UpdateProduct item={item} id={item._id} />
                  <Button
                    onClick={() => handleDelete(item._id)}
                    className="bg-red-600 text-white hover:bg-gray-600"
                  >
               <MdDeleteOutline className="size-6 font-bold"></MdDeleteOutline>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ProductManagement;
