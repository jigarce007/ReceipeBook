import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

const FavouriteProvider = ({ children }) => {
  const [favouriteids, setFavouriteids] = useState([]);

  const addFavourite = (id) => {
    setFavouriteids((currentFavIds) => [...currentFavIds, id]);
  };

  const removeFavourite = (id) => {
    setFavouriteids((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id)
    );
  };
  const value = {
    ids: favouriteids,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
};
export default FavouriteProvider;
