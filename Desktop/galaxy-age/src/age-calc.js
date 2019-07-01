// export function earthAge (birthdate, now) {
//   return Math.round((now-birthdate)/315576000);
// }
//
// export function ageDays (earthAge) {
//   return earthAge*365;
// }
//
// export function mercuryAge (ageDays) {
//   return Math.round(ageDays/88);
// }
//
// export function venusAge (ageDays) {
//   return Math.round(ageDays/226);
// }
//
// export function marsAge (ageDays) {
//   return Math.round(ageDays/686);
// }
//
// export function jupiterAge (ageDays) {
//   return Math.round(ageDays/4329);
// }
//
// export function yearsLeftEarth(earthAge) {
//   return 79-earthAge;
// }
//
// export function yearsLeftMercury(mercuryAge) {
//   return 328-mercuryAge;
// }
//
// export function yearsLeftVenus(venusAge) {
//   return 128-venusAge;
// }
//
// export function yearsLeftMars(marsAge) {
//   return 42-marsAge;
// }
//
// export function yearsLeftJupiter(jupiterAge) {
//   return 7-jupiterAge;
// }


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
