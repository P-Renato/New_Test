import fs from "fs";
import prompt from "picoprompt";

const filename = "index.html";
const encoding = "utf-8";

function loadInput(filename){
    let content = ""
    try{
        content = fs.readFileSync(filename, encoding);
        console.log(content);
    }catch(error){
        console.error("Ops.. I made caca..", error.message);
    }
    return content;
}
