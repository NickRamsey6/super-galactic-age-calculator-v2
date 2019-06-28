export function earthAge (birthdate, now) {
  return Math.round((now-birthdate)/31557600000);
}

export function ageDays (earthAge) {
  return earthAge*365;
}

export function mercuryAge (ageDays) {
  return Math.round(ageDays/88);
}

export function venusAge (ageDays) {
  return Math.round(ageDays/226);
}

export function marsAge (ageDays) {
  return Math.round(ageDays/686);
}

export function jupiterAge (ageDays) {
  return Math.round(ageDays/4329);
}

export function yearsLeftEarth(earthAge) {
  return 79-earthAge;
}

export function yearsLeftMercury(mercuryAge) {
  return 328-mercuryAge;
}

export function yearsLeftVenus(venusAge) {
  return 128-venusAge;
}

export function yearsLeftMars(marsAge) {
  return 42-marsAge;
}

export function yearsLeftJupiter(jupiterAge) {
  return 7-jupiterAge;
}
