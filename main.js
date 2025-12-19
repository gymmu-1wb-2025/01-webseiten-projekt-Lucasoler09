// Nav-Color auswahl

//const navColorPicker, bedeutet das der code dahinter einfach als navColorPicker gespeichert wird und später verwendet werden kann
// document.getElementById("nav-color"), bedeutet dass das element mit der ID "nav-color" gesucht wird  wird, also de farb selector
const navColorPicker = document.getElementById("nav-color");

// Fügt einen Eventlistener zum Farbselector hinzu
// Eventlistene reagiert sofort, wenn der Benutzer die farbe ändert
// input bedeutet das der Eventlistener auf Eingaben reagiert, also wenn der Benutzer eine Farbe auswählt
//e ist das event also wenn eine neue farbe ausgesucht wird
//  => { bedeutet das der code ausgeführt wird wenn das event auftritt
navColorPicker.addEventListener("input", (e) => {
  // document.querySelector("aside") sorgt dafür das das aside ausgewählt wird
  //style.backgroundColor wählt im css die hintergrund farbe aus damit sie geändert werden kann
  // = e.target.value, dieser teil macht die ausgewählte Farbe zur hintergrundfarbe des asides
  document.querySelector("aside").style.backgroundColor = e.target.value;
});

// Header-Color auswahl
const headerColorPicker = document.getElementById("header-color");
headerColorPicker.addEventListener("input", (e) => {
  document.querySelector("header").style.backgroundColor = e.target.value;
});

// Footer-Color auswahl
const footerColorPicker = document.getElementById("footer-color");
footerColorPicker.addEventListener("input", (e) => {
  document.querySelector("footer").style.backgroundColor = e.target.value;
});

// Ende Main-Color auswahl
const mainColorPicker = document.getElementById("main-color");
mainColorPicker.addEventListener("input", (e) => {
  document.querySelector("main").style.backgroundColor = e.target.value;
});
