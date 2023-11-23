import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ResultDetail({ result }) {
  return (
    <View>
      <Text>{result.alias}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
