import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";

import { MEALS } from "../data/data";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon={"star"} color={"white"} />;
      },
    });
  }, [navigation]);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View>
          <Text style={styles.subtitle}>Ingredients</Text>
          <View style={styles.descDisp}>
            {selectedMeal.ingredients.map((ingredient) => (
              <Text
                style={[styles.details, { textAlign: "center" }]}
                key={ingredient}
              >
                {ingredient}
              </Text>
            ))}
          </View>
          <Text style={styles.subtitle}>Steps</Text>
          <View style={styles.descDisp}>
            {selectedMeal.steps.map((step) => (
              <Text style={styles.details} key={step}>
                {step}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 2,
    padding: 10,
    color: "#333",
  },
  descDisp: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
  },
  details: {
    backgroundColor: "#dce3de",
    padding: 10,
    margin: 4,
    borderRadius: 6,
    elevation: 3,
    width: "90%",
  },
});
