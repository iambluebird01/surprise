document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const boy = document.getElementById("boy");
    const girl = document.getElementById("girl");
    const question = document.getElementById("question");

    // Make "No" button run away from cursor
    noButton.addEventListener("mouseover", function() {
        let x = Math.random() * 200 - 100;
        let y = Math.random() * 100 - 50;
        noButton.style.transform = `translate(${x}px, ${y}px)`;
    });

    // If "Yes" is clicked, add color and celebration animation
    yesButton.addEventListener("click", function() {
        boy.style.color = "blue";
        girl.style.color = "pink";
        question.textContent = "Yay! Happy Valentine's Day! 💖";

        // Celebration animation
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        document.body.appendChild(confetti);
        confetti.innerHTML = "🎉🎊🥳";
        confetti.style.fontSize = "50px";
        confetti.style.position = "absolute";
        confetti.style.top = "50%";
        confetti.style.left = "50%";
        confetti.style.transform = "translate(-50%, -50%)";
        setTimeout(() => confetti.remove(), 3000);
    });
});
