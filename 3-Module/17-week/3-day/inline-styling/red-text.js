const redText = () => {
    const fruits = document.querySelectorAll("li");
    fruits.forEach(fruit => {
        if(fruit.innerText === 'Apple'){
            fruit.style.color = 'red'
        }
        if(fruit.innerText === 'Orange'){
            fruit.style.color = 'orange'
        }
        if(fruit.innerText === 'Banana'){
            fruit.style.color = 'yellow'
            // fruit.style.borderBottom = '1px solid black'
        }
    })
}

window.onload = redText;