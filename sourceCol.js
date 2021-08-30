function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  const sk = Object.keys(collection);
  arr = arr.filter(obj => {
    return sk.reduce((t, c) => {
      return t && obj.hasOwnProperty(c) && obj[c] === source[c];
    }, true);
  });

  // Only change code above this line
  return arr;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
