function nearestSq(n) {
  let nearLow = nearestLow(n);
  let nearHigh = nearestHigh(n);

  if (n - nearLow < nearHigh - n) {
    return nearLow;
  } else {
    return nearHigh;
  }
}

function nearestLow(n) {
  if (Math.sqrt(n) % 1 === 0) {
    return n;
  }
  return nearestLow(--n);
}

function nearestHigh(n) {
  if (Math.sqrt(n) % 1 === 0) {
    return n;
  }
  return nearestHigh(++n);
}
