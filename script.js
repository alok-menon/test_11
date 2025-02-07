function showSurprise() {
    const surpriseImage = document.getElementById("surprise-image");
    if (surpriseImage.classList.contains("hidden")) {
        surpriseImage.classList.remove("hidden");
    } else {
        surpriseImage.classList.add("hidden");
    }
}

// Function to preview uploaded surprise image
function previewSurprise(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const uploadedImage = document.getElementById("uploaded-surprise");
            uploadedImage.src = reader.result;
        };
        reader.readAsDataURL(file);
    }
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

createFallingRoses();
