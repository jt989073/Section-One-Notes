/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        const breed = url.split('/')[4]
        


        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const newDog = document.createElement('li')
        const newFigure = document.createElement('figure')
        const newImg = document.createElement('img')
        const newCaption = document.createElement('figCaption')
        newCaption.innerText = breed
        newImg.src = url

        newDog.appendChild(newFigure)
        newFigure.appendChild(newImg)
        newFigure.appendChild(newCaption)

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        const list = document.querySelector('ul')
        // list.appendChild(newDog)
        list.insertBefore(newDog, list.firstChild)

    } catch (e) {
        console.log("Couldn't fetch dog :(", e)
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const firstDog = document.querySelector('li')

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    if(firstDog){
        firstDog.remove()
    } else {
        console.log('no dogs left to remove')
    }
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const allDogs = document.querySelectorAll('li')
    let lastDog
    if(allDogs.length > 0){
        lastDog = allDogs[allDogs.length - 1]
    }
    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    if(lastDog){
        lastDog.remove()
    } else {
        console.log('no dogs left to remove')
    }
});