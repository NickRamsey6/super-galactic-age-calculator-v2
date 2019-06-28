export function earthAge (birthdate, now) {
  return Math.round((now-birthdate)/31557600000);
}

export function ageDays (earthAge) {
  return earthAge*365;
}
