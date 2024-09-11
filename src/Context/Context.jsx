import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import axios from "axios";

const GlobalContext = createContext(null);

const initialState = {
  theme: "light",
  data: [],
  favs: [],
};

const switchState = (state, action) => {
  switch (action.type) {
    case "changeTheme":
      return { ...state, theme: action.payload };
    case "changeData":
      return { ...state, data: action.payload };
    case "addFav":
      return { ...state, favs: [...state.favs, action.payload] };
    case "removeFav":
      return {
        ...state,
        favs: state.favs.filter((fav) => fav.id !== action.payload.id),
      };
    default:
      return state;
  }
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(switchState, initialState);

  const URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(URL).then((response) => {
      dispatch({ type: "changeData", payload: response.data });
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default GlobalProvider;
