import React, { useEffect, useState } from "react";
import NewCompany from "./NewCompany";
import axios from "axios";

const HeaderBar = ({ setIndustryType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNew, setIsOpenNew] = useState(false);

  const toggleModalNew = () => {
    setIsOpenNew(!isOpenNew);
  };
  const host = import.meta.env.REACT_APP_API_URL;

  const [industryData, setIndustryData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${host}api/getIndustry`);
        setIndustryData(response.data);
      } catch (error) {
        console.error("Error:", error);
        // Handle errors or display a message to the user
      }
    };

    fetchData();
  }, []); // Fetch data on component mount

  // Function to handle dropdown click
  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" text-white p-4 flex justify-between items-center">
      <div className="relative inline-block space-x-4">
        {/* Left section - Dropdown button */}

        <button
          id="dropdownHoverButton"
          onClick={handleDropdownClick}
          className="bg-white hover:bg-black hover:text-white text-black shadow-md px-3 py-2 rounded-md  focus:outline-none focus:bg-black focus:text-white text-center"
        >
          Dropdown
        </button>
        {isOpen && (
          <div
            id="dropdownHover"
            className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            style={{ maxHeight: "200px", overflowY: "auto" }} // Set max height and scrolling
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownHoverButton"
            >
              <li onClick={() => setIndustryType("")}>
                <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                  None
                </span>
              </li>
              {industryData.map((item, index) => (
                <li key={index} onClick={() => setIndustryType(item)}>
                  <span className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {/* Right section - Create New Startup Company button */}
      <div>
        <button
          onClick={toggleModalNew}
          className="bg-white hover:bg-black hover:text-white px-4 py-2 rounded-md focus:outline-none text-black shadow-md"
        >
          Create New Startup Company
        </button>
        {isOpenNew && (
          <NewCompany isOpenNew={isOpenNew} setIsOpenNew={setIsOpenNew} />
        )}
      </div>
    </div>
  );
};

export default HeaderBar;
