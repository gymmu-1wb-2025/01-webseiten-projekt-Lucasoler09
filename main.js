let counter = 0

funktion createNewElement(){
    let newElement = document.createElement("p")

counter = counter + 1

    newElement.textContent = "Element " + counter

    let mainElement = document.querySelector("main");
    mainElement.appendChild(newElement);
}