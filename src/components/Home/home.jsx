import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Navbar from "../Navbar/navbar";
import ProductDetail from "../ProductDetail/detail";
import "./home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=194")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
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

      <div className="footer-container">
        <p className="message">Thank you for visiting my page.</p>
        <section className="contact-section">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <p>
              <strong>Call Us:</strong> +(57) 321-435-6591
            </p>
            <p>
              <strong>Email Us:</strong> galvezjuancamilo@gmail.com
            </p>
          </div>
        </section>
      </div>

    </>
  );
}
export default Home;