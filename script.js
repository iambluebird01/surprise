document.addEventListener("DOMContentLoaded", function() {
    const giftBox = document.getElementById("gift-box");
    const lid = document.querySelector(".lid");
    const message = document.getElementById("message");
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");

    // Clicking the gift box opens it
    giftBox.addEventListener("click", function() {
        lid.style.transform = "rotateX(180deg)";
        setTimeout(() => {
            message.classList.remove("hidden");
            giftBox.style.display = "none";
        }, 800);
    });

    // "No" button runs away from cursor
    noButton.addEventListener("mouseover", function() {
        let x = Math.random() * 300 - 150;
        let y = Math.random() * 200 - 100;
        noButton.style.transform = `translate(${x}px, ${y}px)`;
    });

    // "Yes" button triggers celebration
    yesButton.addEventListener("click", function() {
        document.body.style.background = "gold";

        let confetti = document.createElement("div");
        confetti.innerHTML = "🎉🎊❤️💖💘";
        confetti.style.fontSize = "50px";
        confetti.style.position = "absolute";
        confetti.style.top = "50%";
        confetti.style.left = "50%";
        confetti.style.transform = "translate(-50%, -50%)";
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    });
});
