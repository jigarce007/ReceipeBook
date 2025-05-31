import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
const MealItem = ({ meal }) => {
  const nav = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          nav.navigate("Meal Detail", {
            meal,
          });
        }}
      >
        <View style={styles.card}>
          <Image source={{ uri: meal.imageUrl }} style={styles.image} />
          <View>
            <View style={styles.textcontainer}>
              <Text style={styles.text}>{meal.title}</Text>
              <Text style={styles.textduration}>{meal.duration} min</Text>
            </View>
            <Text style={styles.txtComplexity}>{meal.complexity}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0f0f0f",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 180,
  },
  textcontainer: {
    flex: 1,
    backgroundColor: "0f0f0f",
    flexDirection: "row",
    alignItems: "auto",
    justifyContent: "space-between",
    alignContent: "auto",
  },
  text: {
    color: "#fff",
    fontSize: 15,
    padding: 5,
  },
  textduration: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    padding: 5,
    style: "bold",
    marginLeft: 5,
  },
  txtComplexity: {
    color: "#fff",
    fontSize: 12,
    padding: 5,
    marginLeft: 5,
    fontWeight: "bold",
  },
});
