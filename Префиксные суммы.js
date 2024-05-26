function makeprefixsum(nums) {
  let prefixsum = Array(nums.length + 1).fill(0);

  for (let i = 1; i < nums.length + 1; i++) {
    prefixsum[i] = prefixsum[i - 1] + nums[i - 1];
  }

  return prefixsum;
}

function rsq(prefixsum, l, r) {
  return prefixsum[r] - prefixsum[l];
}

let pr = makeprefixsum([5, 3, 8, 1, 4, 6]);
alert(pr);
alert(rsq(pr, 2, 5));

