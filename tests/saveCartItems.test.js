const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {

  it('3.1 - Se o método localStorage.setItem é chamado na saveCartItems.', () => {
    expect(saveCartItems()).toBe('cartItems');
  })

  it('3.2 - Se o método localStorage.setItem é chamado na saveCartItems, utilizando 2 parâmetros (o primeiro a chave cartItems e o segundo o valor passado para saveCartItems).', () => {
    expect(saveCartItems('oi')).toBe('cartItems', 'oi');
  })

});
