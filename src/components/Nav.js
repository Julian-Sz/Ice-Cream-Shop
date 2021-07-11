import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  const liClasses =
    "p-3 bg-yellow-500 rounded border-4 border-green-500 hover:bg-purple-300";
  return (
    <div className="flex flex-row w-9/12 bg-purple-400 justify-center rounded-b-lg">
      <ul className="flex flex-row justify-between w-9/12 py-5 text-2xl">
        <Link to="/">
          <li className={liClasses}>Home</li>
        </Link>
        <li className={liClasses}>About</li>
      </ul>
    </div>
  );
}
