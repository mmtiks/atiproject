import React from "react";

const UserCode = ({
  prevStep,
  nextStep,
  handleChange,
  values,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            autoFocus="autofocus"
            type="text"
            placeholder="Jüri-Liis"
            value={values.first_name}
            onChange={handleChange("first_name")}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Kassisaba"
            value={values.last_name}
            onChange={handleChange("last_name")}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            placeholder="jyriliis@kassisabalt.ee"
            value={values.email_id}
            onChange={handleChange("email_id")}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-8">
          <button
            disabled={
              !values.first_name || !values.last_name || !values.email_id
            }
            className="bg-yellow-600 text-white font-mono border-l-2 shadow-sm shadow-black border-yellow-900 my-2 py-2 px-2"
            onClick={Continue}
          >
            Continue
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

export default UserCode;
