import { Link } from "react-router-dom";
import { routes } from "../Routes";
import { useGlobalContext } from "../Context/Context";

const Navbar = () => {
  const { theme, dispatch, setTheme } = useGlobalContext();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    dispatch({ type: "changeTheme", payload: newTheme });
  };

  return (
    <nav>
      <div className={`nav-links ${theme}`}>
        <Link to={routes.home}>HOME</Link>
        <Link to={routes.contact}>CONTACT</Link>
        <Link to={routes.favs}>FAVORITES</Link>
      </div>
      <button className={`theme-btn ${theme}`} onClick={toggleTheme}>
        <p>Change theme</p>
        {theme === "light" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a7 7 0 1 0 10 10" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-sun"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
