import "./card.css";
import React from "react";
import { useContext } from "react";
import "../ProductDetail/detail.css";
import { FavotitesContext } from "../context/context";
import { HeartIcon } from '@heroicons/react/24/outline'


const Card = ({ data, showDescription, isFavorite }) => {
  const context = useContext(FavotitesContext);
  const { title, description, images, price, category, discountPercentage } = data;

  //verifica si el producto esta en la lista
  const isInFavorite = context.favoritesProducts.filter(favorito => favorito.id === data.id).length > 0

  // Product detail : show product
  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setPoductShow(productDetail);
  }

  // añadir/eliminar productos a la lista de favoritos
  const addProductsFavorites = (event, item) => {
    event.stopPropagation();

    // comprueva si el producto esta en la lista de favoritos
    const isFavorite = context.favoritesProducts.filter(favorito => favorito.id === item.id).length > 0

    if (isFavorite) {
      context.setCount(context.count - 1);
      context.setFavoritesProducts(context.favoritesProducts.filter(favorito => favorito.id !== item.id));
    } else {
      context.setCount(context.count + 1);
      context.setFavoritesProducts([...context.favoritesProducts, item]);
    }
  }


  return (
    <div
      className={`product-card ${isFavorite ? 'product-card-favorites' : ''}`}
      onClick={() => showProduct(data)} >

      <div className="category-icon-container">
        <h2>{category}</h2>
        <HeartIcon className={`favorite-icon ${isInFavorite ? 'favorite-icon-filled' : ''}`}
          onClick={(event) => { addProductsFavorites(event, data) }} />
      </div>

      <img className="product-image" src={images[0]} alt={title} />
      <h3>{title}</h3>
      {/* Mostrar la descripción si showDescription es true */}
      {showDescription && <p>{description}</p>}

      <div className='price-discount-container-card'>
        <p className="price-product">${price}</p>
        <p className="price-discount"> -{discountPercentage} <span> % </span> </p>
      </div>

    </div>
  );
};

export default Card;
