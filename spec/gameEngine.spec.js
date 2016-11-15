var ge = require('../src/gameEngine');

describe('gen Deck', function(){

  it('should generate a deck of cards',function(){
    expect(genDeck(['a','d'])).toEqual('ad');

  })
})
