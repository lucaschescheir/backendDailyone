const moment = require('moment');

const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));
console.log("it is " + chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")));
console.log("It is the " + chalk.magenta(moment().format('DDD'))+" day of the year");
let seconds = parseInt((moment().get('hour')));
console.log("It is " + chalk.inverse(seconds * 3600)+ " seconds into the day")


if(moment().isDST() === true){
  console.log("It " + chalk.yellow("is")+ " daylight savings time.");
}
if(moment().isLeapYear() === true){
console.log("It is leap year")
}else{
  console.log("It "+ chalk.red("is not")+ " leap year")
};
