
const wrapper = document.querySelector(".searching"),
selectBtn = wrapper.querySelector(".containerSearch"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");
let cities = ["Aco", "Afula", "Arad", "Ariel", "Ashdod", "Ashkelon", "Bat Yam",
                 "Beersheba", "Beit Shean", "Beit Shemesh", "Beitar Illit", "Bnei Brak", "Dimona", "Eilat",
                 "Elad", "Givatayim", "Givat Shmuel", "Hadera", "Haifa", "Herzliya", "Hod HaSharon", "Holon",
                 "Jerusalem", "Karmiel", "Kfar Saba", "Kiryat Ata", "Kiryat Bialik", "Kiryat Gat", "Kiryat Malakhi", "Kiryat Motzkin",
                 "Kiryat Ono", "Kiryat Shmona", "Kiryat Yam", "Lod", "Maale Adumim", "Migdal HaEmek", "Modiin", "Nahariya",
                 "Nazareth", "Nazareth Illit", "Nesher", "Ness Ziona", "Netanya", "Netivot", "Ofakim","Or Akiva",
                  "Or Yehuda", "Petah Tikva", "Raanana", "Rahat", "Ramat Gan", "Ramat HaSharon","Ramla", "Rehovot",
                  "Rishon LeZion", "Rosh HaAyin", "Safed", "Sakhnin","Sderot", "ShefarAm", "Tamra", "Tayibe", "Tel Aviv", "Tiberias", "Tira",
                  "Tirat Carmel", "Umm al Fahm", "Yavne", "Yehud Monosson", "Yokneam"];
function addCity(selectedCity) {
    options.innerHTML = "";
    cities.forEach(city => {
        let isSelected = city == selectedCity ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${city}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCity();
function updateName(selectedLi) {
    searchInp.value = "";
    addCity(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}
searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchWord = searchInp.value.toLowerCase();
    arr = cities.filter(data => {
        return data.toLowerCase().startsWith(searchWord);
    }).map(data => {
    let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
    return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
    }).join("");
    options.innerHTML = arr ? arr : `<p style="margin-top: 10px;">Oops! city not found</p>`;
});
selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));