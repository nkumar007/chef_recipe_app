// styles
import "./Home.css";

// hook
import { useFetch } from "../../hooks/useFetch(3)";

// components
import RecipeList from "../../components/RecipeList";

export const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading"></p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};
