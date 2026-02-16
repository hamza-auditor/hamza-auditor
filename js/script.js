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

// Fade-in cards on scroll
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("fade-in");
    }
  });
},{ threshold: 0.3 });

cards.forEach(card => observer.observe(card));

