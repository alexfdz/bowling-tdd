const bowling = require('./bowling');

afterEach(() => {
  bowling.startNewGame();
});

test('gets the expected score for only one shot', () => {

  bowling.roll(1);

  expect(bowling.score()).toBe(1);
});


test('gets the expected score for a match of 10 frames with two opportunities without spares or strikes', () => {

  for(var i = 0; i < 20; i++){ //full match of 20 rolls
      bowling.roll(5);
  }

  expect(bowling.score()).toBe(5 * 20);
});

test('gets the expected score for a match with 2 frames and 1 spare', () => {

    // 1st frame
    bowling.roll(8);
    bowling.roll(2);

    //2nd frame
    bowling.roll(5);
    bowling.roll(0);

    expect(bowling.score()).toBe(20);

});

//8 2 | 5  0 |= 10 + 5 + 5 = 20


//bonus = the number of pins knocked down by the next roll.



// The game consists of 10 frames as shown above.
// In each frame the player has two opportunities to knock down 10 pins.
// The score for the frame is the total number of pins knocked down,
// plus bonuses for strikes and spares.
// A spare is when the player knocks down all 10 pins in two tries.
// The bonus for that frame is the number of pins knocked down by the next roll.
// So in frame 3 above, the score is 10 (the total number knocked down) plus a bonus of 7 (the number of pins knocked down on the next roll.)
//A strike is when the player knocks down all 10 pins on his first try. The bonus for that frame is the value of the next two balls rolled.

test('gets the expected score for only one shot', () => {

  bowling.roll(1);

  expect(bowling.score()).toBe(1);
});