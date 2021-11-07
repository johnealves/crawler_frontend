import React, { useContext } from "react";
import ListProducts from "../Component/ListProducts";
import SearchForm from "../Component/SearchForm";
import Context from "../Context/Context";

const Home = () => {
  const { requested } = useContext(Context)
  return(
    <div>
      <SearchForm />
      { (requested) ? <ListProducts /> : <p>Escolha uma loja e uma categoria para pesquisar</p> }
    </div>
  )
}

export default Home;
