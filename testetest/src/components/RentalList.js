import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RentalService from "../services/RentalService";
import Rental from "./Rental";

const RentalList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [rentals, setRentals] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await RentalService.getRentals();
        setRentals(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteRental = async (e, id) => {
    e.preventDefault();
    
    const rentalsave = await RentalService.getRentalById(id);
    rentalsave.data.return_date = new Date().setHours(5);
    RentalService.historyRental(rentalsave.data);
    RentalService.deleteRental(id).then((res) => {
      if (rentals) {
        setRentals((prevElement) => {
          return prevElement.filter((rental) => rental.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto bg-black">
      <div className="h-12">
        <button
          onClick={() => navigate("/RegisterRental")}
          className="uppercase shadow-sm shadow-black font-mono bg-yellow-600 border-b-4 border-yellow-900  text-white my-2 mx-2 px-4 py-2 font-semibold"
        >
          Rent/return
        </button>
      </div>
      <div className="flex shadow border-b my-3">
        <table className="min-w-full">
          <thead className="bg-gray-800 min-w-full">
            <tr>
              <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                Email ID
              </th>
              <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                Item Code
              </th>
              <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                Rental date
              </th>
              <th className="text-left font-medium text-white uppercase tracking-wider py-3 px-6">
                Estimated return date
              </th>
              <th className="text-right font-medium text-white uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-yellow-500 ">
              {rentals.map((rental) => (
                <Rental
                  rental={rental}
                  deleteRental={deleteRental}
                  key={rental.id}
                ></Rental>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default RentalList;
