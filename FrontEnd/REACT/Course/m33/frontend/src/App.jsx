import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [products, error, loading] = customReactQuery("/api/products");
 

  return (
    <>
      <h1>hello bois, this is my cat api backend</h1>

   

      {loading && <h1>Loading...🦁</h1>}
      {error && <h1>Something went wrong</h1>}
      <h2>Number of products are: {products.length}</h2>
    </>
  );
}

const customReactQuery = (urlPath) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/products");
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    })();
  }, []);
  return [products, error, loading];
};

export default App;
