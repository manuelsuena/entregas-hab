// Nos indica el porcentaje de ram libre

const os = require("os");
const chalk = require("chalk");

const totalRam = os.freemem();
const memoryRam = os.totalmem();

const porcMemory = (memoryRam * 100) / totalRam;
const freeRam = porcMemory.toFixed(2) + "%";

if (porcMemory > 75) {
    console.log(chalk.green(freeRam));
  } else if (porcMemory > 50) {
    console.log(chalk.white(freeRam));
  } else {
    console.log(chalk.red(freeRam));
  }
  