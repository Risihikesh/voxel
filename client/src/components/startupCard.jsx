import React, { useState } from "react";

const StartupCard = ({
  companyName,
  city,
  startingYear,
  fundingAmount,
  IndustryVertical,
  SubVertical,
  InvestorsName,
  InvestmentType,
}) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div
        className="bg-white rounded shadow p-4 mb-4 w-[300px]"
        onClick={togglePopup}
      >
        <h2 className="text-xl font-semibold mb-2">{companyName}</h2>
        <p className="text-gray-600 mb-1">City: {city}</p>
        <p className="text-gray-600 mb-1">Starting Year: {startingYear}</p>
        {fundingAmount && (
          <p className="text-green-600 text-lg font-bold">
            Funding Amount: {fundingAmount}
          </p>
        )}
      </div>
      {showPopup && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={togglePopup}
          ></div>
          <div
            tabIndex="-1"
            aria-hidden="true"
            className="overflow-y-auto overflow-x-hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white rounded-lg shadow p-4 md:p-5"
          >
            {/* Modal content */}
            <div className="relative w-[500px]">
              {/* Modal header */}
              <div className="flex items-center justify-between border-b mb-4">
                <h3 className="text-xl font-semibold">{companyName}</h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8"
                  onClick={togglePopup}
                >
                  ✕<span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="flex justify-between pb-3">
                <p className="text-base leading-relaxed text-gray-500">
                  City : {city}
                </p>
                <p className="text-base leading-relaxed text-gray-500">
                  Startyear : {startingYear}
                </p>
              </div>
              <div className="space-y-4">
                {fundingAmount && (
                  <p className="text-base leading-relaxed text-gray-500">
                    Amount of fund raise : ${fundingAmount}
                  </p>
                )}
                <p className="text-base leading-relaxed text-gray-500">
                  Industry Type : {IndustryVertical}
                </p>
                <p className="text-base leading-relaxed text-gray-500">
                  Industry Description : {SubVertical}
                </p>
                <p className="text-base leading-relaxed text-gray-500">
                  Investor Name : {InvestorsName}
                </p>
                <p className="text-base leading-relaxed text-gray-500">
                  Investment Type : {InvestmentType}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default StartupCard;
