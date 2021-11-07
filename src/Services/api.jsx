import axios from "axios"

const api = axios.create({
  baseURL: "https://mastercrawler.herokuapp.com/"
})

export const fetchMl = (searchTerm) => {
  return axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${searchTerm}`)
    .then(resp => resp)
    .catch(err => console.log(err))
}

export const fetchBuscape = () => {
  console.log("buscape")
}

export const fetchAll = () => {
  console.log("busca em todos")
}

export const fetchProducts = async ({ storeId, categoryId, description }) => {
  console.log({ storeId, categoryId, description })
  return await api.post("/products", { storeId, categoryId, description })
    .then(resp => resp.data)
    .catch(err => console.log(err));
  // axios.get("https://mastercrawler.herokuapp.com/products", { storeId, categoryId, description })
  //   .then(resp => console.log(resp))
  //   .catch(err => console.log(err));
}