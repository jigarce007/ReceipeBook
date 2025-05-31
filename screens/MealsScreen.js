import { View, StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import { CATEGORIES } from "../data/dummy-data";
import { MEALS } from "../data/dummy-data";
import MealItem from "../componenets/MealItem";

const MealsScreen = ({ route, navigation }) => {
  const catID = route.params.categoryId;
  const categoryTitle = CATEGORIES.find((cat) => cat.id === catID).title;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle,
    });
  });

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={MEALS.filter((meal) => meal.categoryIds.includes(catID))}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <MealItem meal={item} />;
        }}
      />
    </View>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    backgroundColor: "#5f5f5f",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 4,
    margin: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  textcontainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "space-between",
    justifyContent: "space-between",
    alignContent: "center",
  },
  icon: {
    alignContent: "center",
    alignSelf: "center",
    margin: 10,
  },
  text: {
    color: "#fff",
    fontSize: 15,
    padding: 8,
  },
});
