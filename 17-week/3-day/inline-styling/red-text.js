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
        }
    })
}

window.onload = redText;