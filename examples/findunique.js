console.log(Array.from(new Set(["a", "b", "c"].concat(["a"]))));

const uniq = [
  { a: "one", b: "one" },
  { a: "two", b: "one" },
  { a: "three", b: "one" },
].reduce((objs, obj) => {
  if (!objs.includes(obj.b)) {
    objs.push(obj.b);
  }
  return objs;
}, []);
console.log(uniq);

let uniq2 = [];
[
  { a: "one", b: "one" },
  { a: "two", b: "one" },
  { a: "three", b: "one" },
].map((obj) => {
  if (!uniq2.includes(obj.b)) {
    uniq2.push(obj.b);
  }
});
console.log(uniq2);

let uniq3 = [];
[
  { a: "one", b: "one" },
  { a: "two", b: "one" },
  { a: "three", b: "one" },
].forEach((obj) => {
  if (!uniq3.includes(obj.b)) {
    uniq3.push(obj.b);
  }
});
console.log(uniq3);
