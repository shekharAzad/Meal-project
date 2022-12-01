import { useRef, useState } from "react";

import classes from "./Checkout.module.css";
// import classes from "./Model.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveChar = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [formInputIsValid, setInputIsValid] = useState({
    name: true,
    mobile: true,
    street: true,
    postal: true,
    city: true,
  });
  const nameInputRef = useRef();
  const mobileInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredMobile = mobileInputRef.current.value;
    const enteredstreet = streetInputRef.current.value;
    const enteredpostal = postalInputRef.current.value;
    const enteredcity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredmobileIsValid = !isEmpty(enteredMobile);
    const enteredStreetIsValid = !isEmpty(enteredstreet);
    const enteredCityIsValid = !isEmpty(enteredcity);
    const enteredPostalIsValid = isFiveChar(enteredpostal);

    setInputIsValid({
      name: enteredNameIsValid,
      mobile: enteredmobileIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredmobileIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    //  submit Data
    props.onConfirm({
      name: enteredName,
      mobile: enteredMobile,
      street: enteredstreet,
      postal: enteredpostal,
      city: enteredcity,
    });
  };
  const nameControlClasses = `${classes.control} ${
    formInputIsValid.name ? "" : classes.invalid
  }`;
  const mobileControlClasses = `${classes.control} ${
    formInputIsValid.mobile ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formInputIsValid.street ? "" : classes.invalid
  }`;
  const postalControlClasses = `${classes.control} ${
    formInputIsValid.postal ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    formInputIsValid.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputIsValid.name && <p>Enter Valid Name</p>}
      </div>

      <div className={mobileControlClasses}>
        <label htmlFor="mobile">Call Me</label>
        <input type="number" id="monile" ref={mobileInputRef} />
        {!formInputIsValid.mobile && <p>Enter Valid phone No</p>}
      </div>

      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputIsValid.street && <p>Enter Valid street name!</p>}
      </div>

      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputIsValid.postal && <p>Enter Valid Postal code</p>}
      </div>

      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputIsValid.city && <p>Enter Valid City Name</p>}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>

        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
