export const reducer = (state, action) => {
  switch (action.type) {
    case "changeTheme":
      return { ...state, theme: action.payload };
    case "changeData":
      return { ...state, data: action.payload };
    case "addFav":
      return { ...state, favs: [...state.favs, action.payload] };
    case "removeFav":
      const filteredFavs = state.favs.filter(
        (fav) => fav.id !== action.payload
      );
      return { ...state, favs: filteredFavs };
    default:
      return state;
  }
};
