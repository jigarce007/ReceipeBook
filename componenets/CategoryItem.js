import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const CategoryItem = ({ category }) => {
  const nav = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        nav.navigate("Meals", { categoryId: category.id });
      }}
    >
      <View style={[styles.listItem, { backgroundColor: category.color }]}>
        <Text style={styles.listText}>{category.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: 160,
    height: 160,
    backgroundColor: "grey",
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  listText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
  },
});
