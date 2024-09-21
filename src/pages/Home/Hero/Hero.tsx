import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,

} from "@/components/ui/carousel";
import banner1 from "./../../../assets/pictures/hero/banner1.jpg";
import banner2 from "./../../../assets/pictures/hero/banner2.jpg";
import banner3 from "./../../../assets/pictures/hero/banner3.jpg";
import banner4 from "./../../../assets/pictures/hero/banner4.jpg";
import banner5 from "./../../../assets/pictures/hero/banner5.jpg";
import banner6 from "./../../../assets/pictures/hero/banner6.jpg";
import banner7 from "./../../../assets/pictures/hero/banner7.jpg";
import banner8 from "./../../../assets/pictures/hero/banner8.jpg";
import banner9 from "./../../../assets/pictures/hero/banner9.jpg";
import banner10 from "./../../../assets/pictures/hero/banner10.jpg";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const slides = [
    {
      index: 0,
      image: banner1,
      title: "Revolutionary Outdoor Experience",
      description:
        "Leading the way with premium drive-away awnings and exquisite camping accessories.",
    },
    {
      index: 1,
      image: banner2,
      title: "Embark on an Adventure",
      description:
        "Uncover the finest camping accessories for your next extraordinary journey.",
    },
    {
      index: 2,
      image: banner3,
      title: "Superior Quality Gear",
      description:
        "Providing top-tier gear to meet all your sophisticated camping needs.",
    },
    {
      index: 3,
      image: banner4,
      title: "Discover the Great Outdoors",
      description:
        "Equip yourself for unparalleled outdoor adventures with our premium products.",
    },
    {
      index: 4,
      image: banner5,
      title: "Innovative Design Excellence",
      description:
        "Experience the pinnacle of design and functionality in our cutting-edge camping gear.",
    },
    {
      index: 5,
      image: banner6,
      title: "Wilderness Wonders",
      description:
        "Explore the untamed beauty of nature with our exceptional camping gear.",
    },
    {
      index: 6,
      image: banner7,
      title: "Epic Journeys Await",
      description:
        "Prepare for epic journeys with our top-of-the-line camping essentials.",
    },
    {
      index: 7,
      image: banner8,
      title: "Nature's Embrace",
      description:
        "Feel the embrace of nature with our high-quality outdoor equipment.",
    },
    {
      index: 8,
      image: banner9,
      title: "Adventure Unleashed",
      description:
        "Unleash your adventurous spirit with our innovative camping solutions.",
    },
    {
      index: 9,
      image: banner10,
      title: "Trailblazing Expeditions",
      description: "Blaze new trails with our expertly crafted camping gear.",
    },
  ];

  return (
    <div className="flex  flex-col items-center gap-2 bg-slate-400 p-3">
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full max-2xl "
      >
        <CarouselContent className="rounded-md">
          {slides.map((item, index) => (
            <CarouselItem key={index}>
              <div className=" relative">
                <Card>
                  <CardContent className="relative bg-cover bg-center h-[50vh] w-full">
                    <img
                      src={item.image}
                      className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      alt={item.title}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <div className="text-white text-center">
                        <h2 className="text-2xl font-bold">{item.title}</h2>
                        <p className="mt-2">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {slides.map((_, index) => (
                        <span
                          key={index}
                          className={`w-3 h-3 rounded-full inline-block ${
                            index === item.index ? "bg-white" : "bg-gray-400"
                          }`}
                        ></span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div>
        <Button className="hover:bg-lime-400 bg-lime-600 font-bold text-xl">
          Shop Now
        </Button>
      </div>
    </div>
  );
};
