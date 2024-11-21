const joke = document.querySelector("#joke");
const button = document.querySelector("button");

const headers = {
    headers: { Accept: "application/json" }
};

axios.get("https://icanhazdadjoke.com/", headers)
    .then(res => {
        joke.innerText = res.data.joke;
    }).catch(err => {
        joke.innerText = `Sorry couldn't retrieve any jokes at the moment :(`
        console.log(err);
})

button.addEventListener("click", () => {
    try {
        fetch("https://icanhazdadjoke.com/", headers)
        .then(res => {
            return res.json();
        }).then(data => {
            joke.innerText = data.joke;
    })
    } catch {
        joke.innerText = `Sorry couldn't retrieve any jokes at the moment :(`
        console.log(err);
    }

})

