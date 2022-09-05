import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RentalService from "../services/RentalService";

const Rental = ({ rental, deleteRental }) => {
  const navigate = useNavigate();

  const [item, setItem] = useState(["-1", "none"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RentalService.getItemById(rental.item_code);
        setItem(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const editRental = (e, id) => {
    e.preventDefault();
    navigate(`/editRental/${id}`);
  };

  return (
    <tr key={rental.id}>
      <td className="text-left px-10 py-4 whitespace-nowrap">
        <div className="text-white">{rental.first_name}</div>
      </td>
      <td className="text-left px-10 py-4 whitespace-nowrap">
        <div className="text-white">{rental.last_name}</div>
      </td>
      <td className="text-left px-10 py-4 whitespace-nowrap">
        <div className="text-white">{rental.email_id}</div>
      </td>
      <td className="text-left px-10 py-4 whitespace-nowrap">
        <div className="text-white">{item.name}</div>
      </td>
      <td className="text-left px-10 py-4 whitespace-nowrap">
        <div className="text-white">{rental.date.substring(0, 10)}</div>
      </td>
      <td className="text-left px-10 py-4 whitespace-nowrap">
        <div className="text-white">
          {rental.estimated_return.substring(0, 10)}
        </div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => editRental(e, rental.id)}
          className="text-black hover:text-gray-800 px-4 hover:cursor-pointer"
        >
          Edit
        </a>
        <a
          onClick={(e, id) => deleteRental(e, rental.id)}
          className="text-black hover:text-gray-800 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Rental;
