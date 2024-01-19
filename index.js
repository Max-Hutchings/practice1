import Person from "./person.js";
import fs from "fs";

let max = new Person("Max", 22);
let ivan = new Person("Ivan", 27);





let personData = JSON.stringify(max.getSaveDetails());
fs.appendFileSync("database.json","\n" + personData);

personData = JSON.stringify(ivan.getSaveDetails());
fs.appendFileSync("database.json","\n" + personData);

