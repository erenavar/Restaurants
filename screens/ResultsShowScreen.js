import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Yelp from "../components/api/Yelp";
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>
      <View style={styles.icon}>
        {result.is_closed ? (
          <MaterialCommunityIcons
            name="close-box-outline"
            size={30}
            color="black"
          />
        ) : (
          <MaterialCommunityIcons name="door-open" size={30} color="black" />
        )}
      </View>

      <FlatList
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;

const styles = StyleSheet.create({
  image: {
    height: 180,
    margin: 10,
    borderRadius: 20,
  },
  phone: {
    alignSelf: "center",
    fontSize: 20,
  },
  title: {
    alignSelf: "center",
    fontSize: 25,
    marginVertical: 10,
  },
  icon: {
    alignSelf: "center",
  },
});
