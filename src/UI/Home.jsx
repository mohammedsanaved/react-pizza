import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="text-center my-10 sm:my-16">
      <h1 className="text-xl lg:text-6xl tracking-wide font-bold text-stone-700 text-center mb-8 md:text-3xl uppercase">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type={"primary"}>
          Continue Ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
