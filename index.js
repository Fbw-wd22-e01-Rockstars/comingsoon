import './src/styles/main.scss'; // Don't delete :)
import moment from 'moment';
// All of your javascript should go here :)

/* 

console.log(moment().format());



let eventTime = new Date("2022-12.07");
let currentTime = new Date().getTime();
var diffTime = eventTime - currentTime;
var duration = moment.duration(diffTime*1000, 'milliseconds');
var interval = 1000;

const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const days = document.querySelector(".days");



setInterval(function(){
    duration = moment.duration(duration - interval, 'milliseconds');
    seconds.innerText = duration.seconds() + " seconds";
    minutes.innerText = duration.minutes() + " minutes";
    hours.innerText = duration.hours() + " hours";
    days.innerText = duration.days() + " days";



}, interval);

 
 */



let differenceTime = function(){
    let birthday = moment("2024-11-19");
    let currentTime = moment();
    let diffTime = moment.duration(birthday.diff(currentTime));
    console.dir(diffTime); // gives you the diff in miliseconds
    //console.log(diffTime.asDays());
    let days = Math.floor(diffTime.asDays());
    let hours = diffTime.hours();
    let minutes = diffTime.minutes();
    let seconds = diffTime.seconds();
    
    return [`${days} days`, `${hours} hours`, `${minutes} minutes`, `${seconds} seconds`];

} 



setInterval (() => {
 let result = differenceTime();


let lis = document.querySelectorAll("li");
    lis[0].innerHTML = result[0]; 
    lis[2].innerText = result[2];
    lis[1].innerText = result[1];
    lis[3].innerText = result[3];
},1000); 