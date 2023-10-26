// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../../UI/Button";
import LinkButton from "../../UI/LinkButton";
import CartItem from "./CartItem";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  // const cart = fakeCart;
  const cart = useSelector((item) => item.cart.cart);
  console.log(cart);
  const username = useSelector((state) => state.user.username);

  return (
    <div className="px-2 py-4">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 font-semibold text-xl">
        Your cart, <span className="font-bold uppercase">{username}</span>
      </h2>
      <ul className="divide-y divide-stone-500 border-b mt-4 bg-stone-200 rounded-3xl py-6 px-4">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order Pizza
        </Button>
        {/* <Link to="/order/new">Order pizzas</Link> */}
        {/* <button>Clear cart</button> */}
        <Button type="secondary">Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
