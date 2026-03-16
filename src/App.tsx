import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useReducer, useEffect } from "react"; 
import Navbar from "./components/Navbar";
import Home from "./Home";
import Shop from "./Shop";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import PageNotFound from "./PageNotFound";
import { InitialStateI, CartAction, CartReducer } from "./types/types";

const initialState:InitialStateI = {
  items: [],
  totalItems: 0 ,
};

function reducer(state: InitialStateI, action: CartAction): InitialStateI {
  switch (action.type) {
    case "add": {
      const addedQty = action.payload.quantity || 1;
      const existingItem = state.items.find(
        (item) => Number(item.id) === Number(action.payload.id)
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            Number(item.id) === Number(action.payload.id)
              ? { ...item, quantity: item.quantity + addedQty }
              : item
          ),
          totalItems: state.totalItems + addedQty,
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: addedQty }],
        totalItems: state.totalItems + addedQty,
      };
    }

    case "remove": {
      const itemToBeRemoved = state.items.find(
        (item) => Number(item.id) === Number(action.payload.id)
      );
      if (!itemToBeRemoved) return state;

      return {
        ...state,
        items: state.items.filter(
          (item) => Number(item.id) !== Number(action.payload.id)
        ),
        totalItems: state.totalItems - itemToBeRemoved.quantity,
      };
    }

    case "increase":
      return {
        ...state,
        items: state.items.map((item) =>
          Number(item.id) === Number(action.payload.id)
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        totalItems: state.totalItems + 1,
      };

    case "decrease": {
      const item = state.items.find(
        (i) => Number(i.id) === Number(action.payload.id)
      );
      if (!item || item.quantity <= 1) return state;
      return {
        ...state,
        items: state.items.map((item) =>
          Number(item.id) === Number(action.payload.id)
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
        totalItems: state.totalItems - 1,
      };
    }

    case "clear":
      return initialState;

    case "load":
      return action.payload;

    default:
      return state;
  }
}

function App() {
const [state, dispatch] = useReducer<InitialStateI, [CartAction]>(reducer, initialState);

// Then, in useEffect:
useEffect(() => {
  const saved = localStorage.getItem("ether-cart");
  if (saved) {
    dispatch({ type: "load", payload: JSON.parse(saved) }); reducer
  }
}, []);

  const { items, totalItems } = state;

  useEffect(() => {
    localStorage.setItem("ether-cart", JSON.stringify(state));
  }, [state]);

  const basename =
    import.meta.env.MODE === "production"
      ? "/Project-Shopping-Cart---Ether-The-Void-Market/"
      : "/";

  return (
    <Router basename={basename}>
      <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
        <Navbar totalItems={totalItems} />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/shop"
              element={<Shop dispatch={dispatch} items={items} />}
            />
            <Route
              path="/shop/:productId"
              element={<ProductDetail items={items} dispatch={dispatch} />}
            />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route
              path="/cart"
              element={
                <Cart
                  items={items}
                  totalItems={totalItems}
                  dispatch={dispatch}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
