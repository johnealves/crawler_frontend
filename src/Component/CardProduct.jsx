import { Button } from "@material-ui/core";
import { Box } from "@material-ui/system";
import React from "react";
import { Link } from "react-router-dom";
import "../css/cardProduct.css";

const CardProduct = ({ product }) => {
  
  return (
    <div className="card-product-container">
      <div className="image-container">
        <img src={ product.image } alt="" />
      </div>
      <div>
        <p>{ product.description }</p>
        <div>
          <h4>{ (Number(product.price))
            .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</h4>
          <a href={ product.link } target="blank">
            Ver na pagina
          </a>
        </div>
      </div>
    </div>
  )
}

export default CardProduct;
