import React, { useState } from "react";
import CartProvider from "./store/CartProvider";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals.js";
// import CartContext from "./store/cart-contex";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
    console.log("hello");
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {/* <h2>Hello Azad!</h2> */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}

      <Header onShownCart={showCartHandler} />

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
