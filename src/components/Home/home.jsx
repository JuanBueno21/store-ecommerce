import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/navbar";
import ProductDetail from "../ProductDetail/detail";
import "./home.css";


function Home() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=194")
      .then(response => response.json())
      .then(data => { setProducts(data.products) }
      );
  }, []);

  return (
    <>
      <Navbar />

      <div className="model-card-container">
        {
          products?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }
      </div>

      <ProductDetail />
      <footer className="footer">
        Thank you for visited my page.
      </footer>

    </>
  );
}
export default Home;