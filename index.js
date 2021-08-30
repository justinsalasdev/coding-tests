function calPoints(ops) {
  const scores = [];

  ops.forEach(op => {
    if (Number(op)) {
      scores.push(Number(op));
    } else {
      const len = scores.length;
      switch (op) {
        case "+": {
          const sumPrev2 = scores[len - 1] + scores[len - 2];
          scores.push(sumPrev2);
          break;
        }
        case "D": {
          scores.push(scores[len - 1] * 2);
          break;
        }
        case "C": {
          scores.pop();
          break;
        }
      }
    }
  });

  return scores.reduce((p, c) => p + c);
}

const x = calPoints(["5", "2", "C", "D", "+"]);
console.log(x);
