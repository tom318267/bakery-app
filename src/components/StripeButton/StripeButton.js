import React from "react";
import StripeCheckout from "react-stripe-checkout";
import cupcake from "../../assets/pinkcupcake.png";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_UVobHw2eUhAXx2VMf3wBZZMt00l556a7Bs";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Kristen's Bakery"
      billingAddress
      shippingAddress
      image={cupcake}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
