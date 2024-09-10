import { routes } from "../Routes";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";

const Card = ({ name, username, id }) => {
  const { theme } = useGlobalContext();

  /*   const addFav = (id) => {
    dispatch({ type: "addFav", payload: id });
  };

  const removeFav = (id) => {
    dispatch({ type: "removeFav", payload: id });
  };

  const handleChangeFav = (id) => {
    if (favs.includes(id)) {
      removeFav(id);
    } else {
      addFav(id);
    }
  }; */

  return (
    <div className={`card ${theme}`}>
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
      <button className={`favButton ${theme}`}>Add fav</button>
    </div>
  );
};

export default Card;
