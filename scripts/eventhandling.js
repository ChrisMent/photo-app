//! Aktive Kategorie markieren


// Die Variable "icons" speichert das Element mit der ID "menu-icons". 
let icons = document.getElementById("menu-icons");

// In der Variable "icon" speichern wir alle Elemente, die die Klasse "menu-icon-text" haben.
let icon = icons.getElementsByClassName("menu-icon-text");

// Mit einer For-Schleife iterieren wir über die Elemente in der Variable "icon".
for (let i = 0; i < icon.length; i++) {

    // Wir fügen jedem Element in der Variable "icon" einen Event-Listener hinzu, der eine Funktion aufruft, sobald das Element angeklickt wird.
    icon[i].addEventListener("click", function () {

        // In der Funktion, die aufgerufen wird, wenn das Element angeklickt wird, speichern wir alle Elemente, die die Klasse "active" haben, in der Variablen "current".

        let current = document.getElementsByClassName("active");

        // Wenn die Variable "current" mehr als ein Element enthält, ersetzen wir die Klasse "active" durch eine leere Zeichenfolge (entfernen wird die Klasse: .active)
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Wenn das Element angeklickt wird, wird die Klasse "active" des angeklickten Elements hinzugefügt.
        this.className += " active";
    });
}


//! Upload Bereich mit Drag and Drop

const inputDiv = document.querySelector(".input-div")
const input = document.querySelector("input")
const output = document.querySelector("output")
let imagesArray = []


input.addEventListener("change", () => {
    const files = input.files
    for (let i = 0; i < files.length; i++) {
        imagesArray.push(files[i])
    }
    displayImages()

})

inputDiv.addEventListener("drop", (e) => {
    e.preventDefault()
    const files = e.dataTransfer.files
    for (let i = 0; i < files.length; i++) {
        if (!files[i].type.match("image")) continue;

        if (imagesArray.every(image => image.name !== files[i].name))
            imagesArray.push(files[i])
    }
    displayImages()

})

function displayImages() {
    let images = ""
    imagesArray.forEach((image, index) => {
        images += `<div class="image">
                <img src="${URL.createObjectURL(image)}" alt="image">
                <span onclick="deleteImage(${index})">&times;</span>
              </div>`
    })
    output.innerHTML = images
}



function deleteImage(index) {
    imagesArray.splice(index, 1)
    displayImages()
}


