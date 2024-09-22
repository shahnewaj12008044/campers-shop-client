import { createSlice, PayloadAction,} from "@reduxjs/toolkit";
// PayloadAction 
export type TProduct = {
  _id: string;
  name: string;
  description: string;
  price: number;
  neededQuantity:number;//needed by the customers
  quantity: number;//available in stock
  category: string;
  rating: number;
  image: string;
};

const initialState: TProduct[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TProduct>) => {
      const existingProduct = state.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        const newQuantity = existingProduct.neededQuantity + action.payload.neededQuantity;
        if (newQuantity <= action.payload.quantity) {
          existingProduct.neededQuantity = newQuantity;
        } else {
          existingProduct.quantity = action.payload.quantity;
        }
      } else {
        state.push(action.payload);
      }
    },
    incrementProductQuantity: (state, action: PayloadAction<string>) => {
      const product = state.find(product => product._id === action.payload);
      if (product && product.neededQuantity < product.quantity) {
        product.neededQuantity++;
      }
    },
    decrementProductQuantity: (state, action: PayloadAction<string>) => {
      const product = state.find(product => product._id === action.payload);
      if (product && product.neededQuantity > 1) {
        product.neededQuantity--;
      }
    },
    removeProductFromCart: (state, action: PayloadAction<string>) => {
      return state.filter(product => product._id !== action.payload);
    },
    emptyCart: (state) => {
      state.splice(0, state.length);
    },

  },
});

export const {addToCart,incrementProductQuantity,removeProductFromCart,emptyCart,decrementProductQuantity} = cartSlice.actions;
export default cartSlice.reducer;
