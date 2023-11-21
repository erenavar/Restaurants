import { useEffect } from "react";
import Yelp from "../components/api/Yelp";

export default () => {
  const searchApi = async (searchTerm) => {
    await Yelp.get("/search", {
      params: {
        limit: 50,
        term: searchTerm,
        location: "İstanbul",
      },
    });
  };
  useEffect(() => {
    searchApi("Burger");
  }, []);

  return [searchApi];
};
