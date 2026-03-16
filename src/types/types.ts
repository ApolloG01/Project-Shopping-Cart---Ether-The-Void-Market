// Define the product item type (adjust based on your products.js)
export interface Product {
  id: number;
  name: string;
  description: string;
  price?: number | 0;
  image: string;
  color: string;
}

// Cart item extends product with quantity
export interface CartItem extends Product {
  quantity: number | string;
}

// State type
export interface InitialStateI {
  items?: CartItem[];
  totalItems: number;
}

export interface CartPropsI extends InitialStateI{
dispatch: (action: CartAction) => void;  
}

// Action types
export type CartAction =
  | { type: "add"; payload: Product & { quantity?: number } }
  | { type: "remove"; payload: { id: number } }
  | { type: "increase"; payload: { id: number } }
  | { type: "decrease"; payload: { id: number } }
  | { type: "clear" }
  | { type: "load"; payload: InitialStateI };



// Reducer function type
export type CartReducer = (state: InitialStateI, action: CartAction) => InitialStateI;