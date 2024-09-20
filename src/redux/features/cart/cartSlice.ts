import { createSlice,} from "@reduxjs/toolkit";
// PayloadAction 
export type TProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  rating: number;
  image: string;
};

const initialState: TProduct[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

// export const {} = cartSlice.actions;
export default cartSlice.reducer;
