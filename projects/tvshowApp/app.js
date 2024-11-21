const userInput = document.querySelector("#searchInput");
const submitBtn = document.querySelector("#submitBtn");
const resultsDisplay = document.querySelector("#resultsContainer")
const form = document.querySelector("form");
const url = "https://api.tvmaze.com/search/shows?q=";



form.addEventListener("submit", (e) => {
    e.preventDefault();
})

submitBtn.addEventListener("click", async function (e) {
    resultsDisplay.innerHTML = null;
    const query = userInput.value;
    const req = await axios.get(`${url}${query}`);
    
    for (const item in req.data) {
        const newImg = document.createElement("img");
        const response = req.data[item].show.image;

        if (response) {
            newImg.src = response.medium;
            resultsDisplay.append(newImg);
        }
    }

    }) 
 


 


