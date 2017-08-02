const bowling = require('./bowling');

afterEach(() => {
  bowling.startNewGame();
});

test('gets the expected score for only one shot', () => {

  bowling.roll(1);

  expect(bowling.score()).toBe(1);
});


test('gets the expected score for a full match without spares or strikes', () => {

  for(var i = 0; i < 20; i++){ //full match of 20 rolls
      bowling.roll(5);
  }

  expect(bowling.score()).toBe(5 * 20);
});