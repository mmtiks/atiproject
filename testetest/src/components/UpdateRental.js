import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RentalService from "../services/RentalService";

const UpdateRental = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rental, setRental] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
    item_code: "",
    date: new Date(),
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setRental({ ...rental, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RentalService.getRentalById(rental.id);
        setRental(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateRental = (e) => {
    e.preventDefault();
    console.log(rental);
    RentalService.updateRental(rental, id)
      .then((response) => {
        navigate("/rentalList");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Rental</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={rental.firstName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={rental.lastName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="emailId"
            value={rental.emailId}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={updateRental}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/rentalList")}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateRental;
