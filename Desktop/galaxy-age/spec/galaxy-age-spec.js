import {earthAge, ageDays} from './../src/age-calc.js';
describe ('galctic age', function() {

  it('should calculate an age in (Earth) years based off a given birthdate', function() {
    expect(earthAge(new Date("1994/2/14"), new Date())).toEqual(25);
    console.log(earthAge(new Date("1994/2/14"), new Date()));
  });

  it('should convert age in (Earth) years to days', function(){
    expect(ageDays(25)).toEqual(9125);
  })
});
