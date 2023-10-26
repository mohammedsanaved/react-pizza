import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotalQuantity, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
function CartOverview() {
  const cartQuantity = useSelector(getCartTotalQuantity);
  console.log(cartQuantity);
  const cartTotalPrice = useSelector(getTotalCartPrice);
  console.log(cartTotalPrice);
  if (!cartQuantity) return null;
  return (
    <div className="bg-stone-800 text-stone-100 px-4 py-4 sm:px-6 text-sm md:text-base flex items-center justify-between">
      <p className="text-stone-300 space-x-4 font-bold sm:space-x-6">
        <span>{cartQuantity} pizzas</span>
        <span>{formatCurrency(cartTotalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
