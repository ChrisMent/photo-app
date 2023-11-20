//! Onload Funktionen

function init() {
    includeHTML();
    loadImages();


}

//! Header und Footer in index.html laden

async function includeHTML() {
    let includeElements = document.querySelectorAll("[w3-include-html]");
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = "Page not found";
        }
    }
}



//! Manuelle Bilderauswahl und Darstellung

let allImages = [

    'photos/alexander-grey.jpg',
    'photos/carson-arias.jpg',
    'photos/chris-lawton.jpg',
    'photos/david-kovalenko.jpg',
    'photos/diego.jpg',
    'photos/finn-hackshaw.jpg',
    'photos/hans-peter-gauster.jpg',
    'photos/ian-dooley.jpg',
    'photos/jonas.jpg',
    'photos/mike-dorner.jpg',
    'photos/park-troopers.jpg'

]

function loadImages() {
    for (let i = 0; i < allImages.length; i++) {
        document.getElementById('all-images').innerHTML +=
            `
    <div onclick="openImg(${i})" class="image-box">
        <img class="image-box" src="${allImages[i]}" alt="Gallery - Image (${i})">
    </div>
        
        `

    }

}

function openImg(i) {

    // Greift auf das Attribut 'src' des i-ten Bildes im '.image-box' Container zu
    const imgSrc = document.querySelectorAll('.image-box img')[i].src;
    // Greift auf das Attribut 'alt' des i-ten Bildes im '.image-box' Container zu
    const imgAlt = document.querySelectorAll('.image-box img')[i].alt;

    // Greift auf das Modal-Element und das darin enthaltene Bild-Element zu
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    // Greift auf das Caption-Element zu, um den Bildtext anzuzeigen
    const caption = document.getElementById('caption');

    // Setzt die Bildquelle des modalen Bildes und zeigt das Modal an
    modalImage.src = imgSrc;
    // Setzt den Inhalt des Bildtextes entsprechend dem 'alt'-Attribut des Bildes
    caption.innerHTML = imgAlt;
    // Setzt den Anzeigestil des Modals auf 'block', sodass es sichtbar wird
    modal.style.display = 'block';

    // Schließt das Modal, wenn auf den Schließen-Button geklickt wird
    document.querySelector('.close').onclick = function () {
        // Setzt den Anzeigestil des Modals auf 'none', sodass es unsichtbar wird
        modal.style.display = 'none';
    };

    // Schließt das Modal, wenn außerhalb des modalen Inhalts geklickt wird
    window.onclick = function (event) {
        // Überprüft, ob das angeklickte Element das Modal ist
        if (event.target === modal) {
            // Setzt den Anzeigestil des Modals auf 'none', sodass es unsichtbar wird
            modal.style.display = 'none';
        }
    }
};
