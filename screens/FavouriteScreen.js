import { View, Text, FlatList, StyleSheet } from "react-native";
import { useContext } from "react";
import {FavouriteContext} from "../store/Context/FavouriteContext";
import { MEALS } from "../data/dummy-data";
import MealItem from "../componenets/MealItem";
import { useDispatch,useSelector} from "react-redux";

const FavouriteScreen = () => {
    const dispatcher = useDispatch();
    
//   const favContext = useContext(FavouriteContext); //Context API
//   const MealIds = favContext.favouriteids; //Context API
    //   const favMeals = MEALS.filter((meal) => favContext.ids.includes(meal.id));
    
    const MealIds = useSelector((state) => state.favMeals.ids);
    const favMeals = MEALS.filter((meal) => MealIds.includes(meal.id));

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={favMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <MealItem meal={item} />;
        }}
      />
    </View>
  );
};
export default FavouriteScreen;

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
