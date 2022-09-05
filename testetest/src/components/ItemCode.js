import React from "react";
import RentalService from "../services/RentalService";

const ItemCode = ({ nextStep, handleChange, values }) => {
  const Continue = (e) => {
    e.preventDefault();
    const inputfield = document.getElementById("input");
    const fetchData = async () => {
      try {
        const alreadyLoaned = await RentalService.getRentalByItemCode(
          values.item_code
        );
        alreadyLoaned.data.return_date = new Date().setHours(5);
        RentalService.historyRental(alreadyLoaned.data);
        RentalService.deleteRental(alreadyLoaned.data.id);
        inputfield.value = "";
        alert("Rental deleted");
      } catch (error) {
        console.log(error);
        try {
          const exists = await RentalService.getItemById(values.item_code);
          nextStep();
        } catch (error) {
          inputfield.value = "";
          alert("Item with such code doesn't exist");
        }
      }
    };
    fetchData();
  };

  const handleKeypress = (e) => {
    e.preventDefault();
    Continue(e);
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="items-center justify-center h-14 w-full my-4">
          <form onSubmit={handleKeypress}>
            <label className="block text-gray-600 text-sm font-normal">
              Scan Item Code
            </label>
            <input
              id="input"
              autoFocus="autofocus"
              type="text"
              placeholder="****************"
              value={values.item_code}
              onChange={handleChange("item_code")}
              className="block h-10 w-96 border mt-2 px-2 py-2"
            ></input>
            <button
              disabled={!values.item_code}
              className="bg-yellow-600 text-white font-mono border-l-2 shadow-sm shadow-black border-yellow-900 my-2 py-2 px-2"
              type="submit"
            >
              Continue
            </button>
          </form>
        </div>
        <div className="items-center justify-center h-14 w-full my-8"></div>
      </div>
    </div>
  );
};

export default ItemCode;
