// break stops while continues skips

// continue -> skip value in the loop
function skipper(skip) {
  for (let i = 0; i <= 6; i++) {
    if (i === skip) {
      continue;
    }
    console.log("number :", i);
  }
}

skipper(2);

// beak -> breakout of the loop
function breakOut(b) {
  for (let i = 0; i <= 6; i++) {
    if (i === b) {
      break;
    }
    console.log("number :" + i);
  }
}

breakOut(2);
