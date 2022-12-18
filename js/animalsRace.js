import { Utils } from "./utils.js";
import { animalArray } from "./runners.js";
const animalShowCase = document.getElementById("animal-show-case");
const btnStart = document.getElementById("btn-start");
let id;
// function resetGame(){}
// function choosePlayer(){}
btnStart.addEventListener("click", () => {
    //remove chosen from all animals

    animalArray.forEach((a) => {
        a.isChosen = false;
        a.translateX = 0;
    });
    //remove the border from all img tags
    //select all img tags in the document
    document
        .querySelectorAll("#animal-show-case img")
        .forEach((img) => img.classList.remove("chosen-animal"));
    const random = Utils.random(0, 4);
    const chosenAnimal = animalArray[random];
    chosenAnimal.isChosen = true;
    const img = document.getElementById(chosenAnimal.id);
    img.classList.add("chosen-animal");
    setTimeout(() => {
        const audio = new Audio(`./media/${chosenAnimal.voice}.wav`);
        audio.play();
        id = setInterval(() => {
            chosenAnimal.translateX += chosenAnimal.step;
            img.style.transform = `translateX(${chosenAnimal.translateX}px)`;
            ;
            if (img.getBoundingClientRect().x >
                animalShowCase.getBoundingClientRect().width) {
                clearInterval(id);
                //resetGame()
            }
        }, 24);
    }, 350);

});
animalArray
    .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
    .map((animal) => {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        const img = document.createElement("img");
        tr.appendChild(td);
        td.appendChild(img);
        img.src = `images/animalsPics/${animal.img}`;
        /* img.classList.add("box", "image-fluid"); */
        img.id = animal.id;
        /* document.createElement("br"); */
        //image.addEventListener('click', ()=>{})
        return tr;
    })
    .forEach((tr) => {
        animalShowCase.appendChild(tr);
    });
