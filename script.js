document.addEventListener("DOMContentLoaded", function() {
    const giftBox = document.getElementById("gift-box");
    const lid = document.querySelector(".lid");
    const message = document.getElementById("message");
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const loveMusic = document.getElementById("loveMusic");
    const questionText = document.getElementById("question-text");

    let questionIndex = 0;
    const questions = [
        "Do you love me? ❤️",
        "Are you sure? 🤔",
        "Are you really, really sure? 😳",
        "Will you be my Valentine? ❤️"
    ];

    // Hide everything except the box
    message.classList.add("hidden");

    // Open box
    giftBox.addEventListener("click", function() {
        lid.classList.add("open");

        setTimeout(() => {
            giftBox.style.display = "none";
            message.classList.remove("hidden");
            questionText.innerHTML = questions[questionIndex];
        }, 800);
    });

    // Handle "Yes" button
    yesButton.addEventListener("click", function() {
        questionIndex++;

        if (questionIndex < questions.length) {
            questionText.innerHTML = questions[questionIndex];
            resetNoButton(); // Reset No button after each question
        } else {
            startCelebration();
        }
    });

    // Move "No" button when clicked
    noButton.addEventListener("click", function() {
        let x = Math.random() * 300 - 150;
        let y = Math.random() * 200 - 100;
        noButton.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Reset "No" button to original position
    function resetNoButton() {
        noButton.style.transform = "translate(0, 0)";
    }

    // Celebration function
    function startCelebration() {
        message.innerHTML = "<p>Yay! I Love You! ❤️</p>";
        document.body.style.animation = "backgroundPulse 3s infinite";
        loveMusic.play();

        setInterval(() => {
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.innerHTML = "🎉";
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.top = "-20px";
            confetti.style.animation = "fall 2s linear forwards";
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 2000);
        }, 200);
    }
});
