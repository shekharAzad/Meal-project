import { useContext, useEffect, useState } from "react";

import CartContext from "../../store/cart-contex";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsLighted, setBtnIsLighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  // console.log(cartCtx.items);

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsLighted ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsLighted(true);

    const timer = setTimeout(() => {
      setBtnIsLighted(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
