export const birthdate = new Date ("1994/2/14");
export const today = new Date ("2019/6/28");
export class Planet {
  constructor (days, expectancy) {
    this.days = days;
    this.expectancy = expectancy;
  }


  get life() {
    return this.calcDays();
  }
  calcDays() {
    return Math.round((today-birthdate) / 86400000);
  }

  get age() {
    return this.calcHours();
  }
  calcHours() {
    return Math.round(this.life / this.days);
  }

  get yearsLeft() {
    return this.morbid();
  }
  morbid() {
    return this.expectancy - this.age;
    // if (this.age > this.expectancy) {
    //   return alert("Get off the computer, Grandpa!");
    // }
  }
  get oldTimer() {
    return this.grandpaCheck();
  }
  grandpaCheck() {
    if (this.age > this.expectancy) {
      return true;
    } else {
      return false;
    }
  }
}

export let Earth = new Planet (365, 79);
export let Mercury = new Planet (88, 328);
export let Venus = new Planet (226, 128);
export let Mars = new Planet (686, 42);
export let Jupiter = new Planet (4329, 7);
