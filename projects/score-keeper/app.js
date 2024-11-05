// select target buttons
const team1Btn = document.querySelector("#team1-update");
const team2Btn = document.querySelector("#team2-update");

// select display handles
const team1score = document.querySelector("#team1-score");
const team2score = document.querySelector("#team2-score");

let team1currentScore=1;
let team2currentScore=1;

// 
team1Btn.addEventListener("click", () => {
    team1score.innerText = team1currentScore++ ;
})

team2Btn.addEventListener("click", () => {
    team2score.innerText = team2currentScore++ ;
})


// reset button implementation
const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", function () {
    team1currentScore = 1;
    team2currentScore = 1;
    team2score.innerText = 0;
    team1score.innerText = 0;
    team1.innerText = "Team 1";
    team2.innerText = "Team 2";
})


// Pick target locations for team names
const team1 = document.querySelector("#team1-name");
const team2 = document.querySelector("#team2-name");

//Retrieve select element
const team1Option = document.querySelector("#team1");
const team2Option = document.querySelector("#team2");


// Set  an event listener on the section tag
team1Option.addEventListener("change", () => { 
    team1.innerText = team1Option.value;
})
team2Option.addEventListener("change", () => { 
    team2.innerText = team2Option.value;
})