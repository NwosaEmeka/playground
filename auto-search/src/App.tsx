import { useCallback, useEffect, useState } from "react";
import "./App.css";

interface Recipe {
  id: number;
  name: string;
  image: string;
  ingredients: string[];
}

function App() {
  const [word, setWord] = useState<string>("");
  const [data, setData] = useState<Recipe[]>([]);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [cache, setCache] = useState<{ [key: string]: Recipe[] }>({});

  const fetchData = useCallback(
    (query: string) => {
      if (cache[query]) {
        setData(cache[query]);
        return;
      }
      fetch(`https://dummyjson.com/recipes/search?q=${query}`)
        .then((response) => response.json())
        .then((data) => {
          setData(data.recipes);
          setCache((prev) => ({ ...prev, [query]: data.recipes }));
        })
        .catch((error) => console.error("Error fetching data:", error));
    },
    [cache]
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (word) {
        fetchData(word);
      } else {
        setData([]);
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [word, fetchData]);

  return (
    <div className="input-wrapper">
      <input
        type="text"
        name="word"
        className="input"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        onFocus={() => setShowSearch(true)}
        onBlur={() => setShowSearch(false)}
      />
      <div className="search-wrapper">
        {showSearch && data.map((item) => <span>{item.name}</span>)}
      </div>
    </div>
  );
}

export default App;
