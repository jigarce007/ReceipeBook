import Ionicons from "@expo/vector-icons/Ionicons";
import CategoryScreen from "./screens/CategoryScreen";
import MealsScreen from "./screens/MealsScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealDetail from "./screens/MealDetailsScreen";
import { StatusBar } from "expo-status-bar";
import FavouriteScreen from "./screens/FavouriteScreen";
import FavouriteProvider from "./store/Context/FavouriteContext";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Category"
      screenOptions={{
        headerStyle: { backgroundColor: "#343434" },
        headerTintColor: "white",
        sceneStyle: { backgroundColor: "#545454" },
        drawerContentStyle: { backgroundColor: "#343434" },
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="heart" size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    // <FavouriteProvider>
    <Provider store={store}>
      <>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#343434" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#545454" },
            }}
          >
            <Stack.Screen
              name="Categories"
              component={DrawerNavigation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Meals"
              component={MealsScreen}
              options={{
                title: "Meals",
              }}
            />
            <Stack.Screen
              name="Meal Detail"
              component={MealDetail}
              options={{ title: "Meals OverView" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    </Provider>
    /* </FavouriteProvider> */
  );
}
