import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="text-center my-10 sm:my-16">
      <h1 className="text-xl lg:text-6xl tracking-wide font-bold text-stone-700 text-center mb-8 md:text-3xl uppercase">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      <CreateUser />
    </div>
  );
}

export default Home;
