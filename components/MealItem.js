import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({
  id,
  title,
  imgUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  };

  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{ color: "#ccc" }} onPress={pressHandler}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: imgUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailItem}>{duration}m | </Text>
          <Text style={styles.detailItem}>{complexity.toUpperCase()} | </Text>
          <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#eee",
    elevation: 4,
  },

  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 18,
    margin: 8,
    color: "#000",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 14,
  },
  imageContainer: {
    alignItems: "center",
  },
});
