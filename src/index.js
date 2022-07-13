import './styles/main.scss'; // Don't delete :)
import moment from 'moment';
// All of your javascript should go here :)



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


