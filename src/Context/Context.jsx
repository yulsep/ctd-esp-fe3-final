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
        favs: state.favs.filter((fav) => fav !== action.payload),
      };
    default:
      return state;
  }
};

const GlobalProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialState.theme);
  const [dentists, setDentists] = useState(initialState.data);
  const [favs, setFavs] = useState(initialState.favs);
  const [state, dispatch] = useReducer(switchState, initialState);

  const URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(URL).then((response) => {
      setDentists(response.data);
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        setTheme,
        state,
        dispatch,
        dentists,
        favs,
        setFavs,
        setDentists,
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
