import Link from "next/link";
import React from "react";

const ButtonLink = ({ destination, label, type }) => {
  return (
    <Link
      href={destination}
      className={`btn ${type === "white" ? "btn-white" : "btn-red"}`}
    >
      {label}
    </Link>
  );
};

export default ButtonLink;
