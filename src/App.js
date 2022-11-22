import React, { Fragment, useState } from "react";

import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals.js";

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
    <Fragment>
      {/* <h2>Hello Azad!</h2> */}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      {/* <Cart /> */}

      <Header onShownCart={showCartHandler} />
      {/* <Header /> */}
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
