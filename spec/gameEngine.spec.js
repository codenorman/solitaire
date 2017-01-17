var ge = require('../src/gameEngine');

describe('gen Deck', function(){

  it('should generate a deck of cards',function(){
    expect(ge.genDeck(["a","cdhs"])).toEqual(['ac','ad','ah','as']);
  });

  it('should generate a deck of A and 2',function(){
    expect(ge.genDeck(["a2","cdhs"])).toEqual(['ac','ad','ah','as','2c','2d','2h','2s']);
  });

});
