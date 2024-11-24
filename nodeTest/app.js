import colors from "colors";
import langs from "langs";
import argv from "node:process";
import {franc} from "franc";

const args = process.argv.slice(2);

const userInput = args[0].toString();

const langCode = franc(userInput);
const language = langs.where("3", langCode);

if (!langCode || langCode === "und" || language === undefined) {
  console.log("Sorry, we could not detect the language");
} else {
  console.log(`Our best guess is: ${language.name}`.red);

}


