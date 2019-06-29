import {birthdate, today, Planet, Earth, Mercury, Venus, Mars, Jupiter} from './../src/age-calc.js';
describe ('galctic age', function() {

  it('should calculate an age in (Earth) years based off a given birthdate', function() {
    expect(Earth.age).toEqual(25);
  });
  it('should calculate remaining life expectancy in Earth years', function() {
    expect(Earth.yearsLeft).toEqual(54);
  });
  it('should calculate an age in (Mercury) years based off a given birthdate', function() {
    expect(Mercury.age).toEqual(105);
  });
  it('should calculate remaining life expectancy in Mercury years', function() {
    expect(Mercury.yearsLeft).toEqual(223);
  });
  it('should calculate an age in (Venus) years based off a given birthdate', function() {
    expect(Venus.age).toEqual(41);
  });
  it('should calculate remaining life expectancy in Venus years', function() {
    expect(Venus.yearsLeft).toEqual(87);
  });
  it('should calculate an age in (Mars) years based off a given birthdate', function() {
    expect(Mars.age).toEqual(14);
  });
  it('should calculate remaining life expectancy in Mars years', function() {
    expect(Mars.yearsLeft).toEqual(28);
  });
  it('should calculate an age in (Jupiter) years based off a given birthdate', function() {
    expect(Jupiter.age).toEqual(2);
  });
  it('should calculate remaining life expectancy in Jupiter years', function() {
    expect(Jupiter.yearsLeft).toEqual(5);
  });
  it('should test if a person has outlived their life expectancy on Earth', function() {
    expect(Earth.oldTimer).toEqual(false);
  });
  it('should test if a person has outlived their life expectancy on Mercury', function() {
    expect(Mercury.oldTimer).toEqual(false);
  });
  it('should test if a person has outlived their life expectancy on Venus', function() {
    expect(Venus.oldTimer).toEqual(false);
  });
  it('should test if a person has outlived their life expectancy on Mars', function() {
    expect(Mars.oldTimer).toEqual(false);
  });
  it('should test if a person has outlived their life expectancy on Jupiter', function() {
    expect(Jupiter.oldTimer).toEqual(false);
  });
});
