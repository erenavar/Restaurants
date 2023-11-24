import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import UseResult from "../hooks/UseResult";
import ResultsList from "./ResultsList";

export default function SearchScreens() {
  const [searchApi, results, errorMessage] = UseResult();
  const [term, setTerm] = useState("");

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price == price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <>
          {results.length == 0 ? (
            <></>
          ) : (
            <>
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
            </>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
