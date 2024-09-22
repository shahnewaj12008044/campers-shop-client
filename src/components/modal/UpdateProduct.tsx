import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useUpdateproductMutation } from "@/redux/features/product/productApi";
import { toast } from "sonner";
import { MdSystemUpdateAlt } from "react-icons/md";

const image_hosting_key = import.meta.env.VITE_img_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

type TProduct = {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  quantity: number;
}

interface UpdateProductProps {
  item: TProduct;
  id: string;
}

const UpdateProduct = ({ item, id }: UpdateProductProps) => {
  const [open, setOpen] = useState(false);
  const [updateproduct] = useUpdateproductMutation();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Loading...");
    const formData = new FormData();
    formData.append("image", data.image[0]);

    try {
      const res = await fetch(image_hosting_api, {
        method: "POST",
        body: formData,
      });
      const imageData = await res.json();

      const productData = {
        name: data.name,
        price: parseFloat(data.price),
        description: data.description,
        image: imageData?.data?.url,
        category: data.category,
        rating: data.rating,
        quantity: data.quantity,
      };

      const updateProductData = {
        id,
        data: productData,
      };

      // console.log("Update Product Data:", updateProductData);

      const updateResponse = await updateproduct(updateProductData).unwrap();
      console.log("Update Response:", updateResponse);

      if (updateResponse?.success) {
        toast.success(updateResponse?.message, { id: toastId, duration: 2000 });
        setOpen(false);
        reset();
      } else {
        throw new Error(updateResponse?.message || "Failed to update product");
      }
    } catch (err) {
      console.error(err);
      toast.error("Error updating product", { id: toastId, duration: 2000 });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          className="mb-2 bg-[#020C29]  text-white hover:bg-lime-500"
        >
         <MdSystemUpdateAlt className="size-6 font-bold" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="hover:text-[#020C29] font-semibold">
            Update Product
          </DialogTitle>
          <DialogDescription>
            Make changes to your product here.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              {...register("name")}
              id="name"
              defaultValue={item.name}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Image
            </Label>
            <Input
              {...register("image")}
              id="image"
              type="file"
              className="col-span-3 text-none"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              {...register("description")}
              id="description"
              defaultValue={item.description}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="category" className="text-right">
              Category
            </Label>
            <Input
              {...register("category")}
              id="category"
              defaultValue={item.category}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input
              {...register("price")}
              id="price"
              type="number"
              defaultValue={item.price}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rating" className="text-right">
              Rating
            </Label>
            <Input
              {...register("rating")}
              id="rating"
              type="number"
              defaultValue={item.rating}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stock" className="text-right">
              Stock
            </Label>
            <Input
              {...register("stock")}
              id="stock"
              type="number"
              defaultValue={item.quantity}
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="btn-primary"
            >
              Update Product
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProduct;
