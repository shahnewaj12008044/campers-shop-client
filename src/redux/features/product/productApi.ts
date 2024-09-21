import { baseApi } from "@/redux/api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => {
   
        return {
          method: "GET",
          url: "/products",
        };
      },
      providesTags: ["product"],
    }),
  }),
});

export const { useGetAllProductQuery } = productApi;
