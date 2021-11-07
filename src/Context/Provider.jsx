import { CodeSharp } from "@material-ui/icons";
import axios from "axios";
import react, { useState } from "react";
import { fetchAll, fetchBuscape, fetchMl, fetchProducts } from "../Services/api";
import Context from "./Context";

const Provider = ({ children }) => {
  const [products, setProducts] = useState({});
  const [requested, setRequested] = useState(false)

  const storeList = {
    "mercado-livre": 1,
    "buscape": 2
  }

  const categoryList = {
    "celular": 1,
    "geladeira": 2,
    "tv": 3
  }

  const requestSearch = async ({ store, category, description }) => {
    const storeId = storeList[`${store}`]
    const categoryId = categoryList[`${category}`]
    const products = await fetchProducts({ storeId, categoryId, description })
    setProducts(products)
  }
  
  const contextValue = {
    requestSearch,
    fetchMl,
    products,
    setProducts,
    requested,
    setRequested
  }

  return(
    <Context.Provider value={ contextValue }>
      { children }
    </Context.Provider>
  )
}

export default Provider;