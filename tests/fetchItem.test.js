require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('2.1 - Se fetchItem é uma função.', () => {
    expect(typeof fetchItem).toBe('function');
  })

  it('2.2 - Testar se fetch foi chamado', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527'
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith(url)
  })

  it('2.3 - Testar se o retorno de fetchItem com o argumento "\MLB1615760527"\ é igual.', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  })

  it('2.4 - Testar o Error quando a função fetchItem não tiver argumento.', async () => {
    try {
      await fetchItem()
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'))
    }
  })
});
