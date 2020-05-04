// test using ES6 Maps
const colors = new Map([
  ["fave", "blue"],
  ["drab", "grey"]
]);

// console.log(JSON.stringify(colors))

for(let e of colors.entries()){console.log(e)}
