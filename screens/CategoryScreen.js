import { View, Text, FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { CategoryItem } from "../componenets/CategoryItem";
const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatlistContent}
        columnWrapperStyle={styles.row}
        numColumns={2}
        data={CATEGORIES}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <CategoryItem category={itemData.item} />}
      />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  flatlistContent: {
    alignItems: "center",
  },
  row: {
    justifyContent: "space-between",
  },
});
