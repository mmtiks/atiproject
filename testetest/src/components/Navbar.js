import React from "react";
import { useNavigate } from "react-router-dom";



const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-yellow-600 border-b-4 border-yellow-900 ">
      <div className="h-16 px-8 flex items-center">
        <button onClick={() => navigate("/RentalList")} className="uppercase text-white font-bold font-mono text-xl shadow-sm shadow-black px-2 py-1">Delta inventory</button>
      </div>
    </div>
  );
};

export default Navbar;
