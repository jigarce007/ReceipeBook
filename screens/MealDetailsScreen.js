import { useState, useLayoutEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Ionicicons from "react-native-vector-icons/Ionicons";
import FavouriteButton from "../componenets/FavouriteButton";
import FavouriteProvider, {
  FavouriteContext,
} from "../store/Context/FavouriteContext";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favourites";

const MealDetailScreen = ({ route, navigation }) => {
  //   const FavContext = useContext(FavouriteContext); //for Context API

  const [isShow, setShow] = useState(true);
  const favouriteids = useSelector((state) => state.favMeals.ids); //for Redux
  const dispatch = useDispatch();
  const meal = route.params.meal;
  console.log(`MEAL ID : ${meal.id}`);
  //   const isFav = FavContext.ids.includes(meal.id); //using Context API
  const isFav = favouriteids.includes(meal.id); //using REdux
  const mealTitel = meal.title;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <FavouriteButton onPress={toggleFav} isFav={isFav} />;
      },
      title: mealTitel,
      size: "auto",
    });
  }, [navigation, toggleFav]);

  function toggleShow() {
    setShow((prevState) => !prevState);
  }

  function toggleFav() {
    if (isFav) {
      dispatch(removeFavourite({ id: meal.id })); //Redux Toolkit
      //   FavContext.removeFavourite(meal.id); //Context API
      console.log(`Meal ${meal.title} is removed from fav`);
    } else {
      dispatch(addFavourite({ id: meal.id })); //Redux ToolKit
      //   FavContext.addFavourite(meal.id); //Context API
      console.log(`Meal ${meal.title} is added to fav`);
    }
  }

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      </View>

      <TouchableOpacity onPress={toggleShow}>
        <View style={styles.headertitle}>
          <Text style={styles.headerText}>{meal.title}</Text>
          <Ionicicons
            style={styles.icon}
            name={isShow ? "chevron-up" : "chevron-down"}
            size={24}
            color="black"
          />
        </View>
      </TouchableOpacity>

      {isShow && (
        <>
          <View style={styles.detailcontainer}>
            <View style={styles.durationcontainer}>
              <Text style={styles.keyText}>Preparation Time</Text>
              <Text style={styles.valueText}>{meal.duration} Minutes</Text>
            </View>
          </View>
          <View style={styles.seperator} />
          <View style={styles.detailcontainer}>
            <View style={styles.durationcontainer}>
              <Text style={styles.keyText}>Complexity</Text>
              <Text style={styles.valueText}>{meal.complexity}</Text>
            </View>
          </View>
          <View style={styles.seperator} />
          <View style={styles.detailcontainer}>
            <View style={styles.durationcontainer}>
              <Text style={styles.keyText}>Affordability</Text>
              <Text style={styles.valueText}>{meal.affordability}</Text>
            </View>
          </View>
          <View style={styles.seperator} />
          <View style={styles.detailcontainer}>
            <View style={styles.ingContainer}>
              <Text style={styles.keyText}>Ingredients</Text>
              <Text style={styles.indegrediantsText}>{meal.ingredients}</Text>
            </View>
          </View>
          <View style={styles.seperator} />
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Steps</Text>
            <FlatList
              data={meal.steps}
              renderItem={(itemData) => (
                <Text style={styles.indegrediantsText}>🥘{itemData.item}</Text>
              )}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
  seperator: {
    height: 0.5,
    width: "auto",
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#cecece",
  },
  card: {
    backgroundColor: "#5f5f5f",
    overflow: "hidden",
    elevation: 2,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  headertitle: {
    flexDirection: "row",
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
    alignContent: "space-between",
    borderRadius: 10,
    backgroundColor: "#0f0f0f",
  },
  icon: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    alignSelf: "center",
  },
  headerText: {
    fontWeight: "normal",
    fontSize: 18,
    padding: 15,
    color: "#fff",
  },
  detailcontainer: {
    flexDirection: "column",
  },
  durationcontainer: {
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  keyText: {
    fontWeight: "bold",
  },
  valueText: {
    fontWeight: "normal",
  },
  ingContainer: {
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "column",
  },
  indegrediantsText: {
    marginTop: 5,
    fontWeight: "normal",
    fontSize: 12,
  },

  stepContainer: {
    backgroundColor: "#fff",
    padding: 10,
    flexDirection: "column",
  },
  stepTitle: {
    fontWeight: "bold",
    alignSelf: "center",
  },
});
