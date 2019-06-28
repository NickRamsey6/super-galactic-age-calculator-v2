import {earthAge, ageDays, mercuryAge, venusAge, marsAge, jupiterAge, yearsLeftEarth, yearsLeftMercury, yearsLeftVenus, yearsLeftMars, yearsLeftJupiter} from './../src/age-calc.js';
describe ('galctic age', function() {

  it('should calculate an age in (Earth) years based off a given birthdate', function() {
    expect(earthAge(new Date("1994/2/14"), new Date())).toEqual(25);
    // console.log(earthAge(new Date("1994/2/14"), new Date()));
  });

  it('should convert age in (Earth) years to days', function(){
    expect(ageDays(25)).toEqual(9125);
  });

  it('should calculate age in Mercury years', function(){
    expect(mercuryAge(9125)).toEqual(104);
  });

  it('should calculate age in Venus years', function(){
    expect(venusAge(9215)).toEqual(41);
  });

  it('should calculate age in Mars years', function(){
    expect(marsAge(9215)).toEqual(13);
  });

  it('should calculate age in Jupiter years', function(){
    expect(jupiterAge(9215)).toEqual(2);
  });

  it('should calculate how many years left on earth', function(){
    expect(yearsLeftEarth(25)).toEqual(54);
  });

  it('should calculate how many years left on Mercury', function(){
    expect(yearsLeftMercury(104)).toEqual(224);
  });

  it('should calculate how many years left on Venus', function(){
    expect(yearsLeftVenus(41)).toEqual(87);
  });

  it('should calculate how many years left on Mars', function(){
    expect(yearsLeftMars(13)).toEqual(29);
  });

  it('should calculate how many years left on Jupiter', function(){
    expect(yearsLeftJupiter(2)).toEqual(5);
  })
//   it('should calculate age in Venus years', function(){
//     expect(venusAge(9125)).toEqual(40);
});
