import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";

// styles
import "./Create.css";

export const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [time, setTime] = useState("");
  const [newIngredient, setNewIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingRef = useRef(null);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = {
      title,
      ingredients,
      method,
      time: time + " minutes",
    };

    try {
      await projectFirestore.collection("recipes").add(doc);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const addIngredient = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
      setNewIngredient("");
      ingRef.current.focus();
    }
  };

  return (
    <div className="create">
      <h2 className="page-title">Add a recipe</h2>
      <form>
        <label>
          <span>Recipe Title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingRef}
            />
            <button className="btn" onClick={addIngredient}>
              Add
            </button>
          </div>
        </label>
        <p>
          Current Ingredients:{" "}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>

        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Cooking Time (in minutes)</span>
          <input
            type="text"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            required
          />
        </label>
        <button type="submit" className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};
