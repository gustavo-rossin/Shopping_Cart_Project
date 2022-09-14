require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const { expect } = require('@jest/globals');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('1.1 - Se fetchProducts é uma função.', () => {
    expect(typeof fetchProducts).toBe('function');
  })

  it('1.2 - Testar se fetch foi chamado', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith(url)
  })

  it('1.3 - Testar se o retorno de fetchProducts com o parâmetro computador é igual.', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  })

  it('1.4 - Testar o Error quando a função fetchProducts não tiver argumento.', async () => {
    try {
      await fetchProducts()
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'))

    }
  })
});
