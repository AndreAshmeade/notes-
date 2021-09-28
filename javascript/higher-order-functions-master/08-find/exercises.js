let findNegative = [-10, -0.2, 0.3, -40, -50];

const found = findNegative.find((element) => {
  return element > 0;
});

console.log(found);

const trees = ["birch", "maple", "oak", "poplar"];

const result = trees.find((tree) => tree.startsWith("m"));

const shop_list = [
  { name: "bread", count: 3 },
  { name: "rice", count: 2 },
  { name: "soap", count: 1 },
];

const shopItem = shop_list.find((item) => item.count > 1);

console.log(shopItem);

const evergreen = [
  { name: "cedar", count: 2 },
  { name: "fir", count: 6 },
  { name: "pine", count: 3 },
];

// suppose we need to skip the first element
const skip_first = evergreen.find((tree, i) => {
  if (tree.count > 1 && i !== 0) return true;
});

console.log(skip_first);
