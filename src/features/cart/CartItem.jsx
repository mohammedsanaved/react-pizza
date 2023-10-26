import Button from "../../UI/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  if (!item) {
    return <p>Sorry, Your Cart Is Empty</p>;
  }

  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:justify-between">
      <>
        <p className="mb-1 sm:mb-0">
          {quantity}&times; {name}
        </p>
        <div className="flex items-center justify-between sm:gap-6">
          <p className="font-bold text-sm">{formatCurrency(totalPrice)}</p>
          <Button type={"small"}>Delete</Button>
        </div>
      </>
    </li>
  );
}

export default CartItem;
