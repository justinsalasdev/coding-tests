const blocks = [
  {
    gym: false,
    school: true,
    store: false
  },
  {
    gym: true,
    school: false,
    store: false
  },
  {
    gym: true,
    school: true,
    store: false
  },
  {
    gym: false,
    school: true,
    store: false
  },
  {
    gym: false,
    school: true,
    store: true
  },
  {
    gym: false,
    school: true,
    store: true
  }
];

const reqs = ["gym", "school", "store"];

function getIdealBlockIdx(reqs, blocks) {
  const maxDist = blocks.length - 1;
  const scores = [];
  reqs.forEach(req => {
    const reqScores = [];
    for (let i = 0; i < blocks.length; i++) {
      //initialize navigators

      let lp = i;
      let rp = i;

      while (lp >= 0) {
        if (blocks[lp][req]) {
          break;
        } else {
          lp--;
        }
      }

      while (rp <= maxDist) {
        if (blocks[rp][req]) {
          break;
        } else {
          rp++;
        }
      }

      reqScores[i] = Math.min(
        Math.abs(lp < 0 ? maxDist : lp - i),
        Math.abs(rp > maxDist ? maxDist : rp - i)
      );
    }

    scores.push(reqScores);
  });

  //O(n)
  return blocks.map((b, i) => {
    var sum = 0;
    scores.forEach(req => {
      sum += req[i];
    });

    return sum;
  });
}

const x = getIdealBlockIdx(reqs, blocks);
console.log(x);
