import { FlatList, StyleSheet, View } from "react-native";
import React from "react";

import { MEALS } from "../data/data";
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = (itemData) => {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imgUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };

    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
