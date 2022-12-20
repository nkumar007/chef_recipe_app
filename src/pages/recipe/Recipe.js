// styles
import "./Recipe.css";

import { useParams } from "react-router-dom";

// hook
import { useFetch } from "../../hooks/useFetch(3)";
import { useTheme } from "../../hooks/useTheme";

export const Recipe = () => {
  const { mode } = useTheme();
  const params = useParams();
  const {
    data: recipe,
    isPending,
    error,
  } = useFetch(`http://localhost:3000/recipes/${params.id}`);

  return (
    <div className={`recipe ${mode}`}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} time.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
        </>
      )}
    </div>
  );
};
