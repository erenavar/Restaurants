import { useEffect, useState } from "react";
import Yelp from "../components/api/Yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const searchApi = async (searchTerm) => {
    try {
      const response = await Yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "Utrecht",
        },
      });
      setResults(response.data.businesses);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Connection troubles.");
    }
  };

  useEffect(() => {
    searchApi("Cafe");
  }, []);

  return [searchApi, results, errorMessage];
};
