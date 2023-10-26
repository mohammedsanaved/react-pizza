/* eslint-disable react/no-unescaped-entities */
// import { useState } from "react";

import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../UI/Button";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const username = useSelector((state) => state.user.username);
  // const [withPriority, setWithPriority] = useState(false);
  const formError = useActionData();
  const cart = fakeCart;
  const navigation = useNavigation();
  console.log(navigation);
  const isSubmitting = navigation.state === "submitting";
  return (
    <div className="py-6 px-4">
      <h2 className="mb-8 text-xl font-bold">Ready to order? Let's go!</h2>
      <Form method="POST">
        <div className="flex flex-col sm:flex-row mb-5 sm:items-center gap-2">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            required
            defaultValue={username}
            className="input grow"
          />
        </div>

        <div className="flex flex-col sm:flex-row mb-5 sm:items-center gap-2">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formError?.phone && (
              <p className="text-xs text-red-600 bg-red-200 px-2 py-2 rounded-md mt-2">
                {formError.phone}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row mb-5 sm:items-center gap-2">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              className="input w-full"
              required
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-6">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 transition-all duration-300 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"

            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority ?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? "Placing Order..." : "Order Now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  console.log(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };
  console.log(order);
  const error = {};

  if (!isValidPhone(order.phone))
    error.phone =
      "Please give us your Correct phone Number. We might need to contact you..";
  if (Object.keys(error).length > 0) return error;
  // If everyThing is okay ,create new Order
  const newOrder = await createOrder(order);
  // console.log("newOrder", newOrder);
  return redirect(`/order/${newOrder.id}`);
}
export { CreateOrder };
