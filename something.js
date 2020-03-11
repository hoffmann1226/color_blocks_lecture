$(document).ready(init);

let numOfClicks = 0;

let personLoggedIn = "Scott";

function init() {
  $("body").prepend(`
  <div>
    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFaPlNHBUaSXg/profile-displayphoto-shrink_200_200/0?e=1589414400&v=beta&t=Rpsvbjrdb-VCvbBkLdJJYMAJc8aw7Fm-gzWnnyuOIs8" />
  </div>
  `);
  $("body")
    .children()
    .first().append(`
    <p>Phil's favorite food is mac n' cheese</p>
  `);

  $(".js-btn-meowButton").on("click", showIfPhilIsAwesome);
}

function showIfPhilIsAwesome() {
  if (checkIfAwesome()) {
    console.log("Turns out, Phil is awesome");
  } else {
    console.log("Try again Scott!");
  }
}

function checkIfAwesome() {
  if (personLoggedIn === "Scott") {
    return false;
  } else if (personLoggedIn === "Phil") {
    return true;
  }
}
