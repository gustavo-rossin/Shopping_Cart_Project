// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado..
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.item_id').innerText;

const cartItemClickListener = () => {

};

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */
const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

// * Questão 02:
const productList = async () => {
  const classItems = document.querySelector('.items');
  const computer = await fetchProducts('computador');
  const eachProd = await computer.results.forEach((el) => {
    const createItemElement = createProductItemElement(el);
    classItems.appendChild(createItemElement);
  });
  return eachProd;
};

const cartItems = document.querySelector('.cart__items');

// * Questão 04: feito com ajuda do Hugo Ramos e Matheus Paiva - turma 25A
const cartList = async (event) => {
  const id = event.target.parentNode.firstChild.innerText;
  const itemID = await fetchItem(id);
  const idProd = await createCartItemElement(itemID);
  await cartItems.appendChild(idProd);
  saveCartItems(cartItems.innerHTML);
  return idProd;
};

const acaoBtn = () => {
  let botoes = document.getElementsByClassName('item__add');
  botoes = [...botoes];
  botoes.forEach((botao) => botao.addEventListener('click', cartList));
};

// * Questão 5:
const removeCartItem = async (event) => {
  const rmvItems = await event.target.remove();
  saveCartItems();
  return rmvItems;
};

const rmvBtn = async () => {
  let cartElementItems = await document.getElementsByClassName('cart__items');
  cartElementItems = [...cartElementItems];
  cartElementItems.forEach((item) => item.addEventListener('click', removeCartItem));
};

// * Questão 8: mentoria da casa de cambio

const getLocalStorageItems = async () => {
  cartItems.innerHTML = await getSavedCartItems();
};

// * Questão 10:

const btnClearCart = async () => {
  const carrinhoVazio = await document.querySelector('.empty-cart');
  carrinhoVazio.addEventListener('click', () => {
    cartItems.innerHTML = '';
  });
};

window.onload = () => { };

window.onload = async () => {
  await productList();
  await acaoBtn();
  await rmvBtn();
  await getLocalStorageItems();
  await btnClearCart();
};