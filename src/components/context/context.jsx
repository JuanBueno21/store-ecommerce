import { createContext, useState } from "react";

export const FavotitesContext = createContext();
export const FavotitesContextProvider = ({ children }) => {
  
  // products counter in favorites
  const [count, setCount] = useState(0);

  // Product detail: open/close
  const [productDetailOpen, setProductDetailOpen] = useState(false);
  const openProductDetail = () => setProductDetailOpen(true);
  const closeProductDetail = () => setProductDetailOpen(false);

  // Nueva función para alternar abrir/cerrar
  const toggleProductDetail = () => setProductDetailOpen(!productDetailOpen);

  // Product detail : show product
  const [productShow, setPoductShow] = useState({})

  // Add ptoducts to Favorite page list
  const [favoritesProducts, setFavoritesProducts] = useState([]);

  return (
    <FavotitesContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,

      toggleProductDetail,

      productDetailOpen,
      productShow,
      setPoductShow,
      favoritesProducts,
      setFavoritesProducts,
    }}>
      {children}
    </FavotitesContext.Provider>
  )
}