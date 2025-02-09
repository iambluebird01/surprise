document.addEventListener("DOMContentLoaded", function() {
    setTimeout(() => {
        document.querySelector(".box-lid").style.transform = "rotateX(150deg)";
        setTimeout(() => {
            document.getElementById("box").classList.add("hidden");
            document.getElementById("question").classList.remove("hidden");
            document.getElementById("question").style.opacity = "1";
            document.getElementById("question").style.transform = "translateY(0)";
        }, 1000);
    }, 2000);
});

const noButton = document.getElementById("no");
noButton.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

document.getElementById("yes").addEventListener("click", function() {
    document.getElementById("question").classList.add("hidden");

    // Show celebration
    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.backgroundColor = ["gold", "red", "pink", "blue", "purple"][Math.floor(Math.random() * 5)];
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 2 + 1 + "s";
        document.body.appendChild(confetti);
    }
});
