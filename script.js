document.addEventListener("DOMContentLoaded", function() {
    const giftBox = document.getElementById("gift-box");
    const lid = document.querySelector(".lid");
    const questionContainer = document.getElementById("question-container");
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const loadingScreen = document.getElementById("loading-screen");
    const celebrationScreen = document.getElementById("celebration");
    const loveMusic = document.getElementById("loveMusic");
    const questionText = document.getElementById("question-text");

    let questionIndex = 0;
    const questions = [
        "Do you like me? ❤️",
        "Are you sure? 🤔",
        "Are you really sure? 😳",
        "Will you be my Valentine? ❤️"
    ];

    // Hide everything except the box
    questionContainer.classList.add("hidden");
    loadingScreen.classList.add("hidden");
    celebrationScreen.classList.add("hidden");

    // Open box
    giftBox.addEventListener("click", function() {
        lid.classList.add("open");

        setTimeout(() => {
            giftBox.style.display = "none";
            questionContainer.classList.remove("hidden");
            questionText.innerHTML = questions[questionIndex];
        }, 800);
    });

    // Handle "Yes" button
    yesButton.addEventListener("click", function() {
        questionIndex++;

        if (questionIndex < questions.length - 1) {
            questionText.innerHTML = questions[questionIndex];
            resetNoButton(); // Reset No button after each question
        } else if (questionIndex === questions.length - 1) {
            // Show loading screen before final question
            questionContainer.classList.add("hidden");
            loadingScreen.classList.remove("hidden");

            setTimeout(() => {
                loadingScreen.classList.add("hidden");
                questionContainer.classList.remove("hidden");
                questionText.innerHTML = questions[questionIndex];
            }, 1500);
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
        questionContainer.classList.add("hidden");
        celebrationScreen.classList.remove("hidden");
        loveMusic.play();

        setInterval(() => {
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.innerHTML = "❤️";
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.top = "-20px";
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 2000);
        }, 200);
    }
});
