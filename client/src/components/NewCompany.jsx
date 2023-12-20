import React, { useState } from "react";
import axios from "axios";

const NewCompany = ({ isOpenNew, setIsOpenNew }) => {
  const toggleModal = () => {
    setIsOpenNew(!isOpenNew);
  };

  const [formData, setFormData] = useState({
    StartupName: "",
    CityLocation: "",
    Date: "",
    AmountInUSD: "",
    IndustryVertical: "",
    SubVertical: "",
    InvestorsName: "",
    InvestmentType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const host = import.meta.env.REACT_APP_API_URL;

  const handleSubmit = async (e) => {
    console.log(formData);
    e.preventDefault();
    try {
      const response = await axios.post(`${host}api/startups`, formData);
      console.log("Response:", response.data); // Log the response data
      toggleModal(); // Close the modal after successful submission
      // Perform any additional actions on successful submission if needed
    } catch (error) {
      console.error("Error:", error); // Log any errors
      // Handle errors or display a message to the user
    }
  };
  return (
    <>
      <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-gray-900 bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-md">
          {/* Modal content */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Create New Company
              </h3>
              <button
                onClick={toggleModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <form className="p-4 md:p-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="StartupName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="StartupName"
                    id="StartupName"
                    value={formData.StartupName}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter company name"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="StartupName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="CityLocation"
                    id="CityLocation"
                    value={formData.CityLocation}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter city"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="StartupName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Starting Year
                  </label>
                  <input
                    type="text"
                    name="Date"
                    id="Date"
                    value={formData.Date}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter starting year"
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="StartupName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Funding Amount
                  </label>
                  <input
                    type="text"
                    name="AmountInUSD"
                    id="AmountInUSD"
                    value={formData.AmountInUSD}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter the funding amount"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="StartupName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Industry Type
                  </label>
                  <input
                    type="text"
                    name="IndustryVertical"
                    id="IndustryVertical"
                    value={formData.IndustryVertical}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter the industry type"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="StartupName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Industry Sub details
                  </label>
                  <input
                    type="text"
                    name="SubVertical"
                    id="SubVertical"
                    value={formData.SubVertical}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter the industry sub details"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="StartupName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Investors Name
                  </label>
                  <input
                    type="text"
                    name="InvestorsName"
                    id="InvestorsName"
                    value={formData.InvestorsName}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter the investors name"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="StartupName"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Investment Type
                  </label>
                  <input
                    type="text"
                    name="InvestmentType"
                    id="InvestmentType"
                    value={formData.InvestmentType}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Enter the investment type"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add Company
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCompany;
