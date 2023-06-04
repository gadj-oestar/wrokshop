AOS.init({
  offset: 200, // offset (in px) from the original trigger point
  delay: 170, // values from 0 to 3000, with step 50ms
  duration: 1000,
});

let span = document.getElementById("spane");
let texte = "Developer Front-end";

let longueur = texte.length;
let indice = 0;

console.log(longueur);
function ecrire() {
  indice++;
  document.getElementById("spane").innerText = texte.substr(0, indice);
  if (indice < longueur) {
    setTimeout(function () {
      ecrire();
    }, 110);
  }
}
ecrire();

console.log("hello world");
