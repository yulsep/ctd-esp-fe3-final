import { useState } from "react";
import { routes } from "../Routes";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useGlobalContext();

  const [isFavorite, setIsFavorite] = useState(
    state.favs.some((fav) => fav.id === id)
  );

  const handleChangeFav = () => {
    dispatch({
      type: isFavorite ? "removeFav" : "addFav",
      payload: isFavorite ? id : { id, name, username },
    });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={`card ${state.theme}`}>
      <Link to={routes.detail.replace(":id", id)}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img
          className="card-img"
          src="../../public/images/doctor.jpg"
          alt="dentist"
        />
        <p>
          {name} - {id}
        </p>
        <p>{username}</p>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link>
      <button className={`favButton ${state.theme}`} onClick={handleChangeFav}>
        {isFavorite ? "Remover de favoritos" : "Agregar a favoritos"}
      </button>
    </div>
  );
};

export default Card;
