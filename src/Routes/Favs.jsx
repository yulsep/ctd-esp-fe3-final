import Card from "../Components/Card";
import { useGlobalContext } from "../Context/Context";

const Favs = () => {
  const { state } = useGlobalContext();

  return (
    <>
      <div className="favs-container">
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          {state.favs.map((dentist) => (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favs;
