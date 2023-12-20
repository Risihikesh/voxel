import React, { useEffect, useState } from "react";
import StartupCard from "../components/startupCard";
import HeaderBar from "../components/HeaderBar";
import axios from "axios";

const Home = ({ searchQuery }) => {
  const [startupsData, setStartupsData] = useState([]);
  const [industryType, setIndustryType] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const host = import.meta.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${host}api/startups`);
        // Ensure response.data is an array before setting the state
        if (Array.isArray(response.data)) {
          setStartupsData(response.data);
        } else {
          console.error("Data received from the API is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      console.log(searchQuery);
      try {
        const response = await axios.get(
          `${host}api/startups/search?keyword=${searchQuery}`
        );
        // Ensure response.data is an array before setting the state
        if (Array.isArray(response.data)) {
          setSearchResults(response.data);
        } else {
          console.error("Data received from the API is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors here
      }
    };

    if (searchQuery) {
      fetchData();
    } else {
      setSearchResults([]); // Clear results if searchQuery is empty
    }
  }, [searchQuery]);

  // Ensure startupsData is always an array before filtering
  const filteredStartups = Array.isArray(startupsData)
    ? startupsData.filter((startup) => startup.IndustryVertical === industryType)
    : [];

  return (
    <>
      <HeaderBar setIndustryType={setIndustryType} />
      <div className="flex flex-wrap justify-center gap-16">
        {(searchResults.length > 0
          ? searchResults
          : filteredStartups.length > 0
          ? filteredStartups
          : startupsData
        ).map((startup, index) => (
          <StartupCard
            key={startup.id} // Assuming startup has a unique ID field
            companyName={startup.StartupName}
            city={startup.CityLocation}
            startingYear={startup.Date}
            fundingAmount={startup.AmountInUSD}
            IndustryVertical={startup.IndustryVertical}
            SubVertical={startup.SubVertical}
            InvestorsName={startup.InvestorsName}
            InvestmentType={startup.InvestmentType}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
