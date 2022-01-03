const API = 'https://fakestoreapi.com/products';

const getProducts = async (id) => {
  const apiUrl = id ? `${API}/${id}` : API;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export default getProducts;
