import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Yelp from "../components/api/Yelp";
import { Image } from "react-native";

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await Yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <Text>{result.phone}</Text>
      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return (
            <Image style={{ width: 50, height: 50 }} source={{ uri: item }} />
          );
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;
