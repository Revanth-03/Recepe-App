import "./styles.css";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await fetch(
          `https://api.edamam.com/search?q=${input}&app_id=a8cbad48&app_key=087afb2c57e45b4c67e7a064de2a2580`
        );
        const result = await response.json();
        setRecipes(result.hits);
        console.log(result.hits);
      } catch (error) {
        console.log(error);
      }
    };
    if (input) {
      fetchUrl();
    }
  }, [input]);
  return (
    <div className="App">
      <input
        type="text"
        onChange={
          (handleChange = (e) => {
            setInput(e.target.value);
          })
        }
        value={input}
      />
      <Card recipes={recipes} />
    </div>
  );
}
