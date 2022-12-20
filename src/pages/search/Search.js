import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch(3)";
import RecipeList from "../../components/RecipeList";

// styles
import "./Search.css";

export const Search = () => {
  const queryString = useLocation().search;
  const queryParam = new URLSearchParams(queryString);
  const query = queryParam.get("q");
  const url = "http://localhost:3000/recipes?q=" + query;

  const { error, isLoading, data } = useFetch(url);
  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isLoading && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};
