const fetchProducts = async (product) => {
  // seu código aqui
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    return data.results;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};
fetchProducts('computador');
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
