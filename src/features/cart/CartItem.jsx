import { useSelector } from "react-redux";
import Button from "../../UI/Button";
import { formatCurrency } from "../../utils/helpers";
import UpdateItemQuantity from "../order/UpdateItemQuantity";
import DeleteItem from "./DeleteItem";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  if (!item) {
    return <p>Sorry, Your Cart Is Empty</p>;
  }

  return (
    <li className="py-3 sm:flex sm:justify-between">
      <>
        <p className="mb-1 sm:mb-0">
          {quantity}&times; {name}
        </p>
        <div className="flex items-center justify-between sm:gap-6">
          <p className="font-bold text-sm">{formatCurrency(totalPrice)}</p>
          <UpdateItemQuantity
            pizzaId={pizzaId}
            currentQuantity={currentQuantity}
          />
          <DeleteItem pizzaId={pizzaId} />
        </div>
      </>
    </li>
  );
}

export default CartItem;
