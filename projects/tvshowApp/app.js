const userInput = document.querySelector("#searchInput");
const submitBtn = document.querySelector("#submitBtn");
const resultsDisplay = document.querySelector("#resultsContainer")
const form = document.querySelector("form");
const url = "https://api.tvmaze.com/search/shows";



form.addEventListener("submit", (e) => {
    e.preventDefault();
})

submitBtn.addEventListener("click", async function (e) {
    resultsDisplay.innerHTML = null;
    const config = {
        params: {
            q: userInput.value
    }}
    // const query = userInput.value;
    const req = await axios.get(url, config);
    
    for (const item in req.data) {
        const newImg = document.createElement("img");
        const response = req.data[item].show.image;

        if (response) {
            newImg.src = response.medium;
            resultsDisplay.append(newImg);
        }
    }

    }) 
 


 


