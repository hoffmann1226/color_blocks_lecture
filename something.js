$(document).ready(init);

let amtRedClicked = 0;
let amtYellowClicked = 0;
let amtGreenClicked = 0;
let amtBlueClicked = 0;

function init() {
  console.log("jq loaded!");

  $(".js-btn-red").on("click", clickRed);
  $(".js-btn-yellow").on("click", clickYellow);
  $(".js-btn-green").on("click", clickGreen);
  $(".js-btn-blue").on("click", clickBlue);

  $(".container").append(`
    <div class="box red"></div>
    <div class="box yellow"></div>
    <div class="box green"></div>
    <div class="box blue"></div>
  `);
}

function clickRed() {
  amtRedClicked++;
  $(".js-red-clicked").text(`Red clicked: ${amtRedClicked}`);
  console.log("Clicked Red", amtRedClicked);
}

function clickYellow() {
  amtYellowClicked++;
  $(".js-yellow-clicked").text(`Yellow clicked: ${amtYellowClicked}`);
  console.log("Clicked Yellow", amtYellowClicked);
}

function clickGreen() {
  amtGreenClicked++;
  $(".js-green-clicked").text(`Green clicked: ${amtGreenClicked}`);
  console.log("Clicked Green", amtGreenClicked);
}

function clickBlue() {
  amtBlueClicked++;
  $(".js-blue-clicked").text(`Blue clicked: ${amtBlueClicked}`);
  console.log("Clicked Blue", amtBlueClicked);
}
