var ge = require('../src/gameEngine');

describe('gen Deck', function(){

  it('should generate a deck of cards',function(){
    expect(ge.genDeck(["a","cdhs"])).toEqual(['ac','ad','ah','as']);
  })
});
