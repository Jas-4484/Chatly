import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
    <div className=" containerWarp flex justify-between">
      <button className="btn btn-ghost text-xl">Chatly</button>
      <button className="btn btn-ghost text-xl">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
