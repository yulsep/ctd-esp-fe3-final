import Card from "../Components/Card";
import { useGlobalContext } from "../Context/Context";

const Home = () => {
  const { state } = useGlobalContext();

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map((dentist) => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
