import { richDudes } from "./richMen.js";
const richDudeBox = document.getElementById("richMenBox");
const richcards = document.getElementById("richrich");
richDudes.map((rich) => {
    const richCard = `<div class="card mt-3" style="width: 18rem;">
            <img class="card-img-top" src="${rich.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${rich.firstName}</h5>
                <p class="card-text">
                Year of Birth: ${rich.birthYear}<br>
                Worth: ${rich.worth}<br>
                Source: ${rich.source}<br>
                Country: ${rich.country}
                </p>
            </div>
        </div>`;
    const richDiv = document.createElement("div");
    richcards.appendChild(richDiv);
    richDiv.id = `${rich.firstName}`;
    richDiv.className = `col`;
    richDiv.innerHTML += `${richCard}`;
    richDiv.addEventListener("click", () => {
        richDudes.filter((r) => r !== rich);
        document.getElementById(richDiv.id)?.remove();
    });
    return richDiv;
});
/*     richDudeBox.remove();
    //find the index of the current box in the rectnalges[] array
    let index = richDudes.findIndex((box) => box.firstName === box.firstName);
    localStorage.setItem("richDudes", JSON.stringify(richDudes));
    console.log(index); */
/* richDudes.map((rich) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.style.width = '18rem';
    const div2 = document.createElement("div");
    div2.classList.add("card-body")
    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img-top");
    cardImg.src = `${rich.img}`
    const header = document.createElement("h5")
    header.classList.add("card-title")
    header.innerText += `${rich.firstName}`
    const para = document.createElement("p")
    para.classList.add("card-text")
    para.innerText += `Year of Birth: ${rich.birthYear}<br>
                Worth: ${rich.worth}<br>
                Source: ${rich.source}<br>
                Country: ${rich.country}`;
    richDudeBox.appendChild(div)
    div.appendChild(div2)
    div2.appendChild(cardImg)
    div2.appendChild(header)
    div2.appendChild(para)
    div.id = `${rich.firstName}`
    div.addEventListener("click", () => {
        richDudes.filter((r) => r !== rich);
        document.getElementById(div.id)?.remove()
    })
}) */ 
