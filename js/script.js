// js/script.js
const heroText = "Hamza Shafiq – IT Auditor";
let i = 0;
const typeHero = () => {
    if(i < heroText.length){
        document.getElementById("hero-text").innerHTML += heroText.charAt(i);
        i++;
        setTimeout(typeHero,100);
    }
}
window.onload = typeHero;
