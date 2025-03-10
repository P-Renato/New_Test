import fs from "fs";
import prompt from "picoprompt";

const entryLine = prompt("Enter your name: ")

const loveMessage = "heart.txt";
const sonMessage = "spiderman.txt";
const anyMessage = "mushroom.txt";
const encoding = "utf-8";
let content = "";
let content1 = "";
let content2 = "";


try{
    content = fs.readFileSync(loveMessage, encoding)
    content1 = fs.readFileSync(sonMessage, encoding)
    content2 = fs.readFileSync(anyMessage, encoding)
    // console.log(content)
}catch(error){
    console.error("File reading error", error.message)
}

if (entryLine === "Monika"){
    console.log(content)
} else if(entryLine === "Antonio"){
    console.log(content1)
} else if (entryLine !== "Monika" && "Antonio"){
    console.log(content2)
}


