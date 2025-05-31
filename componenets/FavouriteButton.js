import { TouchableOpacity, View, StyleSheet } from "react-native";
import Ionicicons from "react-native-vector-icons/Ionicons";
import { useState } from "react";
function FavouriteButton({ onPress, isFav }) {
  console.log(` is FAvourite : ${isFav}`);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.favstyle}>
        <Ionicicons
          name={isFav ? "heart" : "heart-outline"}
          size={20}
          color="white"
        />
      </View>
    </TouchableOpacity>
  );
}

export default FavouriteButton;

const styles = StyleSheet.create({
  favstyle: {
    justifyContent: "center",
    alignItems: "center",
  },
});
