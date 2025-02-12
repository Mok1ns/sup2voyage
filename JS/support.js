
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");


burger.addEventListener("click", () => {
    menu.classList.toggle("show");
    burger.classList.toggle("active");
});


const area = document.getElementById("area");

area.addEventListener("click", () => {
    alert("Mail envoyé")
})