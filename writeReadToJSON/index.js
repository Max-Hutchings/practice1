import Person from "../writeReadToJSON/person.js";
import fs from "fs";

let max = new Person("Max", 22);
let ivan = new Person("Ivan", 27);


// Writing functionality


// let personData = JSON.stringify(max.getSaveDetails());
// fs.appendFileSync("database.json",personData + "\n");

// personData = JSON.stringify(ivan.getSaveDetails());
// fs.appendFileSync("database.json", personData + "\n");



// Read and search

// READ 
const data = fs.readFileSync("database.json", "utf8");
const profilesArray = data.split("\n").map((profile) => JSON.parse(profile));

// SEARCH
function searchProfilesByName(name){
    const profile = profilesArray.find((profile) => profile.name === name);
    if (profile){
        return new Person(profile.name, profile.age, profile.id);
    } else{
        console.log("No profile with that name");
    }
}

 const newMax = searchProfilesByName("Max");
 console.log(newMax.getSaveDetails());