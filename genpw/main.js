import * as rot13 from "./rot13.js";

if (process.argv.length === 3) {
  console.log(rot13.encodeRot13(process.argv[2]));
} else {
  console.log(rot13.newPasswd());
}
