import { useEffect, useState } from "react";
import Yelp from "../components/api/Yelp";

export default () => {
  const [results, setResults] = useState([]);
  const searchApi = async (searchTerm) => {
    const response = await Yelp.get("/search", {
      params: {
        limit: 50,
        term: searchTerm,
        location: "Utrecht",
      },
    });

    setResults(response.data.businesses);
  };

  useEffect(() => {
    searchApi("Cafe");
  }, []);

  return [searchApi, results];
};
