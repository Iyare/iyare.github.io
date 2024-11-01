const fakeRequest = (url) => {
    return new Promise ((resolve, reject) => {
        const rand = Math.floor(Math.random() * 100);
        setTimeout(() => {
            if (rand > 50) {
                resolve("Yay! you received some data");
            } else {
                reject("Oh no. There was a connection timeout!");
            }
        }, 3000)
    })
}

fakeRequest("www.preblesbooks.com")
    .then((data) => {
        console.log(`Here is your ${data} received`)
        
    })
    .catch((err) => {
        console.log(`Here's another error ${err}`)
    });