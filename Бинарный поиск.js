function lbinsearch(l, r, check, checkparams) {
  while (l < r) {
    m = Math.trunc((l + r) / 2);
    if (check(matchMedia, checkparams)) {
      r = m; // меняем правую границу
    } else {
      l = m + 1; // меняем левую границу
    }
  }
  return l;
}

function rbinsearch(l, r, check, checkparams) {
  while (l < r) {
    m = Math.trunc((l + r + 1) / 2);
    if (check(matchMedia, checkparams)) {
      l = m; // меняем левую границу
    } else {
      r = m - 1; // меняем правую границу
    }
  }
  return l;
}

