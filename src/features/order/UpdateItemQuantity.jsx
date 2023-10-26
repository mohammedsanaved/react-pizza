import React from "react";
import Button from "../../UI/Button";
import { useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../cart/cartSlice";

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-1 md:gap-3 items-center">
      <Button
        type={"round"}
        onClick={() => dispatch(decreaseQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="gap-2 flex items-center font-medium md:gap-3">
        {currentQuantity}
      </span>
      <Button
        type={"round"}
        onClick={() => dispatch(increaseQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
