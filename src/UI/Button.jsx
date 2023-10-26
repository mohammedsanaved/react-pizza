import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type, onClick }) => {
  const base =
    "bg-yellow-300 uppercase font-semibold text-stone-650 inline-block tracking-wide rounded-full transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300 hover:shadow-lg text-sm hover:scale-105 transition-all duration-300";
  const styles = {
    primary: base + " px-3 py-4 md:px-6 md:py-4",
    // primary: base + " px-3 py-4 md:px-6 md:py-4 "",
    small: base + " md:px-5 md:py-2.5 py-1 px-2 text-sm",
    round: base + " md:px-1.5 md:py-0.5 py-1 px-2.5 text-md",
    secondary:
      "uppercase font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-red-500 transition-colors duration-300 focus:outline-none focus:ring focus:ring-red-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-slate-300 px-3 py-4 md:px-6 md:py-4 text-sm transition-all duration-300 hover:scale-105",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
