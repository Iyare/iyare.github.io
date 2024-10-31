const changeBtn = document.querySelector("#changeBg");

const colorValue = document.querySelector("#colorValue");
const body = document.body;

changeBtn.addEventListener("click", () => {
    // making a random red channel value
    const red = Math.floor((Math.random() * 255) + 1);
    
        // making a random green channel value
     const green = Math.floor((Math.random() * 255) + 1);
    
    
        // making a random blue channel value
     const blue = Math.floor((Math.random() * 255) + 1);
    
    // Combine the channels
    const rgbValue = `rgb(${red},${green},${blue})` 
    
    // Update the background color
    body.style.backgroundColor = rgbValue;
    
    colorValue.innerText = rgbValue;
})

