import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      //get all products with query
      query: ({ search, price, category, sort }) => {
        let queryString = `/products?`;
        if (search) queryString += `searchTerm=${search}&`;
        if (price) {
          const priceRange = price.split("-");
          queryString += `minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&`;
        }
        if (category) {
          queryString += `category=${category}&`;
        }
        if (sort) {
          queryString += `sort=${sort}`;
        }
        return {
          method: "GET",
          url: queryString,
        };
      },
      providesTags: ["product"],
    }),
    //get the featured products
    getFeaturedProduct: builder.query({
      query: () => ({
        method: "GET",
        url: "/products/featuredProducts",
      }),
      providesTags: ["product"],
    }),
    //get single products by id
    getSingleProduct: builder.query({
      query: (id) => {
        console.log(id)
        return {
          method: "GET",
          url: `/products/${id}`,
        };
      },
      providesTags: ["product"],
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetFeaturedProductQuery,
  useGetSingleProductQuery,
} = productApi;
