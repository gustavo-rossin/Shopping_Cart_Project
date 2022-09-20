const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('7 - Teste a função getSavedCartItems', () => {
  it('7.1 - Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado;', () => {
    getSavedCartItems('cartItems')
    expect(localStorage.getItem).toHaveBeenCalled();
  })

  it('7.2 - Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o cartItems como parâmetro.', () => {
    getSavedCartItems('cartItems')
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  })
});
