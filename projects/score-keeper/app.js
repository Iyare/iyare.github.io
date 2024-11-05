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


// reset button
const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", function () {
    
})