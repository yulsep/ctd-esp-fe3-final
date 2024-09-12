import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import { reducer } from "../reducers/reducer";

const GlobalContext = createContext(null);

const storageFavs = localStorage.getItem("favs");

const initialState = {
  theme: "light",
  data: [],
  favs: storageFavs ? JSON.parse(storageFavs) : [],
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios(URL).then((response) => {
      dispatch({ type: "changeData", payload: response.data });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

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
