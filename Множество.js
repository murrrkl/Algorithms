let setsize = 10;
let myset = [];

for (let i = 0; i < setsize; i++) {
  myset.push([]);
}

function add(x) {
  myset[x % setsize].push(x);
}

function find(x) {
  for (let now of myset[x % setsize]) {
    if (now == x) {
      return true;
    }
  }
  return false;
}

function del(x) {
  let xlist = myset[x % setsize];
  for (let i = 0; i < xlist.length; i++) {
    if (xlist[i] == x) {
      xlist[i] = xlist[xlist.length - 1];
      xlist.pop();
      return;
    }
  }
}

add(21);
add(31);
add(17);
alert(del(21));
alert(myset);