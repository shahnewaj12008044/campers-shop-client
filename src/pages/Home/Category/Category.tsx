import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


import tents from "./../../../assets/pictures/category/tent.jpg";
import backpack from "./../../../assets/pictures/category/backpack.jpg";
import shoes from "./../../../assets/pictures/category/shoes.jpg";
import sleepingBag from "./../../../assets/pictures/category/sleeping.jpg";
import accessories from "./../../../assets/pictures/category/travel_utensils.jpg";
import cooking from "./../../../assets/pictures/category/cookware.jpg";
import Loader from "@/components/shared/Loader";

const Category = () => {
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 1, name: "Tents", icon: tents },
    { id: 2, name: "Backpacks", icon: backpack },
    { id: 3, name: "Cookware", icon: cooking },
    { id: 4, name: "Sleeping Bags", icon: sleepingBag },
    { id: 5, name: "Footwear", icon: shoes },
    { id: 6, name: "Accessories", icon: accessories },
  ];

  // Simulate loading delay for demonstration (you can remove this in a real app)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1400); // Simulate 1.5s loading time

    return () => clearTimeout(timeoutId);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto my-8">
        <Loader />
      </div>
    );
  }

  return (
    <div className="md:container my-8 mx-auto">
      <div className="px-8">
        <div className="border-l-4 border-l-lime-400 px-4 py-4 bg-white rounded-lg w-full sm:w-3/4 md:w-1/2 mb-4">
          <h2 className="text-xs sm:text-sm md:text-2xl font-bold text-[#020C29] mb-4">
            Category
          </h2>
        </div>

        <div className="mx-auto grid grid-cols-1 p-4 md:p-0 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.id}>
              <Card className="custom-transition hover:scale-105 hover:shadow-md hover:shadow-blue-900">
                <CardContent className="pt-5">
                  <div className="relative">
                    <img
                      className="rounded-md h-64 w-full"
                      src={category.icon}
                      alt={category.name}
                      loading="lazy" // Lazy loading images
                    />
                  </div>
                </CardContent>
                <div>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#020C29] hover:text-[#72f838]">
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
