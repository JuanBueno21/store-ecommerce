import { XCircleIcon } from '@heroicons/react/24/solid'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'


import { FavotitesContext } from "../context/context";
import { useContext } from 'react';
import "./detail.css";
import { BiStar } from "react-icons/bi";

const ProductDetail = () => {
  const context = useContext(FavotitesContext);
  const { productShow } = context; // Obtenemos los detalles del producto a mostrar

  return (
    <aside className={`product-detail ${!context.productDetailOpen ? 'hidden' : ''}`}>
      <div className="detail">
        <h1>Details Product</h1>
        <div className="close-detail">
          <XCircleIcon onClick={context.toggleProductDetail} className="close-icon" />
        </div>
      </div>

      <div className="product-info">
        <img src={productShow.images?.[0]} alt={productShow.title} className="detail-image" />
        <h3>{productShow.title}</h3>

        <div className='price-discount-container'>
          <p className="price-detail">${productShow.price}</p>
          <p className="price-discount-detail">
            -{productShow.discountPercentage} <span> % </span>
          </p>
        </div>

        <div>

          <div className='stock-icon-container'>
            <p className='stock'> Stock available: {productShow.stock}</p>
            <CheckBadgeIcon className='icon-available' />
          </div>

          <p>{productShow.description}</p>
          <p className='category'> Category: {productShow.category}</p>

          <div className='rating'>
            <p> Rating: {productShow.rating}</p>
            <BiStar className="icon-bg" />
            <BiStar className="icon-bg" />
            <BiStar className="icon-bg" />
          </div>

        </div>

      </div>
    </aside>
  )
}

export default ProductDetail;

// .toFixed(1)