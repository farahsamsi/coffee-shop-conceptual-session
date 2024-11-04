import { toast } from "react-toastify";

// get all coffees from local storage
const getAllFavorites = () => {
  const all = localStorage.getItem("favorites");
  if (all) {
    const favorites = JSON.parse(all);
    return favorites;
  } else {
    console.log("[]");
    return [];
  }
};

// add a coffee to local storage
const addFavorite = (coffee) => {
  // get all previously saved data
  const favorites = getAllFavorites();
  const isExist = favorites.find((item) => item.id === coffee.id);
  if (isExist) {
    return toast.error("Coffee already exist");
  }

  favorites.push(coffee);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  toast.success("Successfully added.");
};

// remove coffee from local storage

export { addFavorite, getAllFavorites };
