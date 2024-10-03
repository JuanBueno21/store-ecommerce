import "./favorite.css";
import Card from "../Card/Card";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FavotitesContext } from "../context/context";
import { BsBox2HeartFill } from "react-icons/bs";

function Favorite() {
  const context = useContext(FavotitesContext);

  let isEmpty = context.favoritesProducts.length === 0;

  if (isEmpty) {
    isEmpty =
      <div className="message-container">
        <div>
          <BsBox2HeartFill className="icon-container" />
        </div>
        <p className="message-container" > Do not have favorite products.</p>
      </div>
  } else {
    isEmpty = (
      context.favoritesProducts.map(favorito => (
        <Card key={favorito.id} data={favorito} showDescription={true} isFavorite={true} />
      ))
    );
  }

  return (
    <>
      <div className="main-container">
        <div>
          <div className="logo">

          </div>
        </div>
        <nav className="navbar-container">
          <ul className="navbar">
            <li className="navbar-home">
              <NavLink to="/" > Home</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="favorite-title">
        Favorite Products
      </div>

      <div className="card-container-favorite">
        {isEmpty}
      </div>

      {/* {isEmpty
        ?
        <p>Sin productos en tus favoritos.</p>
        : <div className="card-container-favorite">
          {
            context.favoritesProducts.map(favorito => (
              <Card key={favorito.id} data={favorito} showDescription={true} isFavorite={true} />
            ))
          }
        </div>
      } */}

    </>
  )
}
export default Favorite;