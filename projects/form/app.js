// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const list = document.querySelector("#list");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const product = document.querySelector("#product");
    const qty = document.querySelector("#qty");
    const li = document.createElement("li");
    li.innerHTML  = `${qty.value} ${product.value}`;
    list.append(li);
    product.value = " ";
    qty.value = " ";
})