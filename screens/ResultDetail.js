import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function ResultDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={result.image_url ? { uri: result.image_url } : null}
      />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating}
        <FontAwesome name="star" size={13} color="black" />
        <Text> - {result.review_count} Comments</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 8,
    marginBottom: 5,
  },
  container: {
    marginLeft: 15,
  },
  name: {
    fontWeight: "bold",
  },
});
