import React, { useContext, useEffect, useState } from "react";
import Context from "../Context/Context";
import { Box } from "@material-ui/system";
import CardProduct from "./CardProduct";
import "../App.css"
import Loading from "./Loading";

const ListProducts = () => {
  const { products } = useContext(Context);
  const [list, setList] = useState([]);

  useEffect(() => {
    setList(products)
  }, [products])

  if (ListProducts.length === 0) <Loading />

  return (
    <div className="list-container">
      { (list.length) 
        ? list.map((product, i) => <CardProduct product={ product } key={ i } />)
        : <Loading />
      }
    </div>
  )
}

export default ListProducts;