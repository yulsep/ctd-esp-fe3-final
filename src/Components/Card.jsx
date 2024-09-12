import { useState } from "react";
import { routes } from "../Routes";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useGlobalContext();

  const isFavorite = state.favs.find((fav) => fav.id === id);

  const addFav = () => {
    dispatch({ type: "addFav", payload: { id, name, username } });
  };

  const removeFav = () => {
    dispatch({ type: "removeFav", payload: id });
  };

  const handleChangeFav = () => {
    if (isFavorite) {
      removeFav();
      return;
    }
    addFav();
  };

  return (
    <div className={`card ${state.theme}`}>
      <Link to={routes.detail.replace(":id", id)}>
        <img
          className="card-img"
          src="../../public/images/doctor.jpg"
          alt="dentist"
        />
        <p>
          {name} - {id}
        </p>
        <p>{username}</p>
      </Link>
      <button className={`favButton ${state.theme}`} onClick={handleChangeFav}>
        {isFavorite ? "Remover de favoritos" : "Agregar a favoritos"}
      </button>
    </div>
  );
};

export default Card;
