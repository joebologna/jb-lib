import hello, { there } from "hello";
import fs from "fs";
console.log(fs.readdirSync("."));
console.log(hello(), there());
