const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');
const { expect } = require('@jest/globals');

localStorageSimulator('setItem');

describe('6 - Teste a função saveCartItems', () => {

  it('6.1 - Se o método localStorage.setItem é chamado na saveCartItems.', () => {
    saveCartItems('cartItems')
    expect(localStorage.setItem).toHaveBeenCalled();
  })

  it('6.2 - Se o método localStorage.setItem é chamado na saveCartItems, utilizando 2 parâmetros (o primeiro a chave cartItems e o segundo o valor passado para saveCartItems).', () => {
    saveCartItems('olá')
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'olá');
  })

});
