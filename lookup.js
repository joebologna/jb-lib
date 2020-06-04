// Given an index into an array perform a function
async function doit(options, i) {
  return options[i];
}

const options = [
  () => console.log("Mail"),
  () => console.log("Download"),
  () => console.log("Delete"),
  () => console.log("Cancel"),
];

for (let i in options) {
  doit(options, i).then((rc) => rc());
}
