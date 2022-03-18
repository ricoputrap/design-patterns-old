import * as readline from "node:readline";
import Settings, { TYPE_LANGUAGE, TYPE_MODE } from "./creational/singleton";

const settings = Settings.getInstance();
console.log(settings);


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question("Type something: ", answer => {
  
  switch (answer.toLowerCase()) {
    case "mode":
      console.log("MODE:", settings.getMode());
      break;
    case "change mode":
      rl.question("New mode:", (newMode: TYPE_MODE) => {
        settings.setMode(newMode);
        console.log("NEW MODE:", settings.getMode());
      });
      break;
    case "lang":
      console.log("LANGUAGE:", settings.getMode());
      break;
    case "change lang":
      rl.question("New lang:", (newLanguage: TYPE_LANGUAGE) => {
        settings.setLanguage(newLanguage);
        console.log("NEW LANG:", settings.getLanguage());
      });
      break;
    default:
      rl.close();
      break;
  }
})
