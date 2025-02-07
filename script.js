// Function to preview uploaded image and message in modal
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            document.getElementById("uploaded-image").src = reader.result;
        };
        reader.readAsDataURL(file);
    }
}

// Show message in modal when clicked
document.querySelector(".btn-glow").addEventListener("click", function() {
    const customMessage = document.getElementById("message-input").value;
    document.getElementById("custom-message").textContent = customMessage ? customMessage : "Happy Rose Day, Ardhra! 💖🌹";
});

// Function to create falling roses
function createFallingRoses() {
    const roseContainer = document.querySelector(".falling-roses");
    for (let i = 0; i < 15; i++) {
        let rose = document.createElement("img");
        rose.src = "rose.jpg";
        rose.style.left = Math.random() * 100 + "vw";
        rose.style.animationDuration = Math.random() * 3 + 2 + "s";
        rose.classList.add("rose");
        roseContainer.appendChild(rose);
    }
}

createFallingRoses();
