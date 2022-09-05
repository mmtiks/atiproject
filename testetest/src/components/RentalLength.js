import React from "react";
import RentalService from "../services/RentalService";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';


const RentalLength = ({ prevStep, values, handleCalendar,saved }) => {

  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  const saveRental = (e) => {
    e.preventDefault();
    RentalService.saveRental(values)
      .then((response) => {
        console.log(response);
        alert("Rental registered")
        saved();
      })
      .catch((error) => {
        console.log(error);
      });
  };


  
  return (
    <div className="flex w-fit mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="block items-center justify-center h-30 my-4 w-fit">
          <Calendar  onChange={(value) => handleCalendar(value)} />
        </div>
        <div className="items-center justify-center h-14 w-full my-8">
          <button
            className="mx-4 bg-yellow-600 text-white font-mono border-l-2 shadow-sm shadow-black border-yellow-900  py-2 px-2"
            onClick={saveRental}
          >
            Save
          </button>
          <button
            className="mx-4 bg-yellow-600 text-white font-mono border-l-2 shadow-sm shadow-black border-yellow-900 my-2 py-2 px-2"
            onClick={Previous}
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
};

export default RentalLength;
