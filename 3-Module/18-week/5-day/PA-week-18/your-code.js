window.addEventListener("DOMContentLoaded", () => {
  // Your code here
  document.getElementById("make-circle-blue").addEventListener("click", () => {
    const circle = document.getElementById("blue-border-circle");
    circle.setAttribute("class", "blue-fill");
  });

  document.getElementById("will-not-check").addEventListener("click", (e) => {
    e.preventDefault();
  });

  document
    .getElementById("change-bananas-status")
    .addEventListener("click", (e) => {
      const bananaDiv = document.getElementById("bananas-div");
      bananaDiv.innerText = "No Bananas Today!";

      const bananaImage = document.getElementById("bananas-image-div");
      if (bananaImage.children.length) return;
      const badBanana = document.createElement("img");
      badBanana.src = "./images/no-bananas.png";
      bananaImage.appendChild(badBanana);
    });

  const input = document.getElementById("fav-cookie");
  document.getElementById("store-cookie").addEventListener("click", () => {
    document.cookie = `favCookie=${input.value}`;
  });

  if (document.cookie) {
    const [key, value] = document.cookie.split("=");
    input.value = value;
  }

  document.getElementById("save-pie").addEventListener("click", (e) => {
    const input = document.getElementById("pie-type");
    if (input.value.length <= 0) return;
    const list = document.querySelector(".pie-list");
    if (list.children.length >= 5) return;
    const newPie = document.createElement("li");
    newPie.innerText = input.value;
    list.appendChild(newPie);
    input.value = "";
  });

  const iceCreamInput = document.getElementById("fav-ice-cream");
  document.getElementById("save-ice-cream").addEventListener("click", () => {
    localStorage.setItem("iceCream", iceCreamInput.value);
  });

  const favIceCream = localStorage.getItem("iceCream");
  if (favIceCream) {
    console.log(favIceCream);
    iceCreamInput.value = favIceCream;
  }

  const appleButton = document.getElementById("add-apple");
  const orangeButton = document.getElementById("add-orange");
  const emptyBasket = document.getElementById("reset-basket");
  const basket = document.getElementById("fruit-storage");
  const total = document.getElementById("total-fruit");
  let count = 0;

  appleButton.addEventListener("click", (e) => {
    if (count < 25) {
      count++;
      const newApple = document.createElement("span");
      newApple.innerText = "🍎";
      basket.appendChild(newApple);
      total.innerText = count;
    }
  });
  orangeButton.addEventListener("click", () => {
    if (count < 25) {
      count++;
      const newOrange = document.createElement("span");
      newOrange.innerText = "🍊";
      basket.appendChild(newOrange);
      total.innerText = count;
    }
  });
  emptyBasket.addEventListener("click", () => {
    count = 0
    basket.innerText = "";
    total.innerText = count;
  });

  document
    .getElementById("bubble-maker")
    .addEventListener("click", (e) => e.stopPropagation());

    document.getElementById("dictionary-fetch").addEventListener("click", async e => {
   z
      let newRes = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/dictionary')
      newRes = await newRes.json()
      const word = newRes[0].word
      const definition = newRes[0].meanings[0].definitions[0].definition
      console.log(definition)
      const results = document.getElementById('results-area')
      const newUl = document.createElement('ul')
      const wordLi = document.createElement('li')
      const defLi = document.createElement('li')
      wordLi.innerText = `Word: ${word}`
      defLi.innerText = `Definition: ${definition}`
      newUl.appendChild(wordLi)
      newUl.appendChild(defLi)
      results.appendChild(newUl)
    })
});
