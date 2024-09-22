import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { FieldValues, useForm } from "react-hook-form";
import { useAddproductMutation } from "@/redux/features/product/productApi";
import { toast } from "sonner";
import { useState } from "react";
import { IoCreateOutline } from "react-icons/io5";

const image_hosting_key = import.meta.env.VITE_img_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



const AddProduct = () => {
  const [addproduct] = useAddproductMutation();
  const { register, handleSubmit, reset } = useForm();
  const [open, setOpen] = useState(false);


  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Loading...');
    const formData = new FormData();
    formData.append("image", data.image[0]);

    const res = await fetch(image_hosting_api, {
      method: "POST",
      body: formData,
    });
    const imageData = await res.json();

    const productData = {
      name: data.name,
      price: data.price,
      description: data.description,
      image: imageData.data.url,
      category: data.category,
      rating: data.rating,
      quantity: data.quantity,
    };
    try{
        const res = await addproduct(productData).unwrap()
        if(res.success){
         toast.success(res?.message, { id: toastId, duration: 2000 }); 
         setOpen(false);
         reset();
        }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }catch(err){
        toast.error('Something went wrong', { id: toastId, duration: 2000 });
    }
  };



  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} className="mb-2 btn-primary">
        <IoCreateOutline className="size-6 font-bold" />
          Create Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-screen overflow-y-auto">
        <DialogHeader>
          <DialogTitle className=" hover:text-lime-500 font-semibold">Add Product</DialogTitle>
          <DialogDescription>
            Add new  product here.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input {...register("name")} id="name" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              Image
            </Label>
            <Input
              {...register("image")}
              id="image"
              type="file"
              accept="image/*"
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
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Price
            </Label>
            <Input {...register("price")} id="price" type="number" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rating" className="text-right">
              Rating
            </Label>
            <Input {...register("rating")} id="rating" type="number" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="stock" className="text-right">
            quantity
            </Label>
            <Input {...register("quantity")} id="quantity" type="number" className="col-span-3" />
          </div>
          <DialogFooter>
            <Button type="submit" className="btn-primary">Add Product</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProduct;
