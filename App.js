import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
// NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// SCREENS
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "Meals Categories",
              headerStyle: { backgroundColor: "#507B75" },
              contentStyle: { backgroundColor: "#A0D1BE" },
              headerTintColor: "#eee",
            }}
          />
          <Stack.Screen
            name="MealsOverView"
            component={MealsOverviewScreen}
            options={({ route, navigation }) => {
              const catName = route.params.title;
              return {
                title: catName,
                headerStyle: { backgroundColor: "#507B75" },
                contentStyle: { backgroundColor: "#A0D1BE" },
                headerTintColor: "#eee",
              };
            }}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              headerStyle: { backgroundColor: "#507B75" },
              contentStyle: { backgroundColor: "#A0D1BE" },
              headerTintColor: "#eee",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
