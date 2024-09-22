import Category from "@/pages/Home/Category/Category";
import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: ({ search, price, category }) => {
        let queryString = `/products?`;
        if (search) queryString += `searchTerm=${search}&`;
        if(price){
          const priceRange = price.split("-")
          // console.log(priceRange)
          queryString +=`minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}`
          // console.log("inside",queryString)
        }
        if(category){
          queryString+=`category=${category}`
        }

        console.log(queryString)

        return {
          method: "GET",
          url: queryString,
        };
      },
      providesTags: ["product"],
    }),
    getFeaturedProduct: builder.query({
        query : ()=>({
            method:"GET",
            url:'/products/featuredProducts'
        }),
        providesTags:['product']
    })
  }),
});

export const { useGetAllProductQuery, useGetFeaturedProductQuery } = productApi;
