import Button from "../../UI/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4  py-6 px-3">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 rounded-lg ${soldOut ? "opacity-60 grayscale" : ""}`}
      />
      <div className="flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-base italic text-slate-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm font-bold">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm text-slate-400">Sold out</p>
          )}
          <Button type="small" disabled={soldOut}>
            Add to Cart
          </Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
