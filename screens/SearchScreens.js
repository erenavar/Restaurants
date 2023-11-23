import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import UseResult from "../hooks/UseResult";
import ResultsList from "./ResultsList";

export default function SearchScreens() {
  const [searchApi,results] = UseResult();

  // results.filter((result) => {
  //   result.filter((t) => t.price == price);
  // });
  // };

  const filterResultsByPrice = (price) => {
    return results?.filter((result) => {
      return result.price == price;
    });
  };

  return (
    <View>
      <SearchBar />
      <ResultsList
        title="Low Price Restaurants"
        results={filterResultsByPrice("€")}
      />
      <ResultsList
        title="Affordable Restaurants"
        results={filterResultsByPrice("€€")}
      />
      <ResultsList
        title="High Price Restaurants"
        results={filterResultsByPrice("€€€")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
