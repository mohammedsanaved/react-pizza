import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchOrder = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Item"
        value={query}
        className="py-2 w-32 sm:w-64 transition-all duration-300 px-4 rounded-full shadow-md text-sm bg-yellow-100 sm:focus:w-72 focus:outline-none focus:ring focus:ring-yellow-500"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchOrder;
