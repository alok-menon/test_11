function showMessage() {
    alert("Wishing you a day as lovely as a rose, Ardhra! 💖🌹");
}

// Function to create falling roses
function createFallingRoses() {
    const roseContainer = document.querySelector(".falling-roses");
    for (let i = 0; i < 15; i++) {
        let rose = document.createElement("img");
        rose.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Rosa_rubiginosa_1.jpg/480px-Rosa_rubiginosa_1.jpg"; // Rose image
        rose.style.left = Math.random() * 100 + "vw";
        rose.style.animationDuration = Math.random() * 3 + 2 + "s";
        rose.classList.add("rose");
        roseContainer.appendChild(rose);
    }
}

// Function to preview uploaded image
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const preview = document.getElementById("image-preview");
            preview.innerHTML = `<img src="${reader.result}" alt="Uploaded Image">`;
        };
        reader.readAsDataURL(file);
    }
}

createFallingRoses();
