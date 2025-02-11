document.addEventListener("DOMContentLoaded", function() {
    const giftBox = document.getElementById("gift-box");
    const lid = document.getElementById("lid");
    const loading = document.getElementById("loading");
    const message = document.getElementById("message");
    const finalQuestion = document.getElementById("final-question");
    const celebration = document.getElementById("celebration");
    const questionText = document.getElementById("question-text");
    const loveMusic = document.getElementById("loveMusic");

    const yesButton = document.getElementById("yes");
    const noButton = document.getElementById("no");
    const finalYesButton = document.getElementById("final-yes");
    const finalNoButton = document.getElementById("final-no");

    let questionIndex = 0;
    const questions = [
        "Do you love me? ❤️",
        "Are you sure? 🤔",
        "Are you really, really sure? 😳"
    ];

    // Initial state
    message.classList.add("hidden");
    loading.classList.add("hidden");
    finalQuestion.classList.add("hidden");
    celebration.classList.add("hidden");

    // Click to open the gift box
    giftBox.addEventListener("click", function() {
        lid.classList.add("open");

        setTimeout(() => {
            giftBox.style.display = "none";
            message.classList.remove("hidden");
            questionText.innerHTML = questions[questionIndex];
        }, 800);
    });

    // Handle clicking "Yes" through the questions
    yesButton.addEventListener("click", function() {
        questionIndex++;

        if (questionIndex < questions.length) {
            questionText.innerHTML = questions[questionIndex];
            noButton.style.transform = "translate(0, 0)";
        } else {
            message.classList.add("hidden");
            loading.classList.remove("hidden");

            // Set the loading screen to last **20 seconds (20000ms)**
            setTimeout(() => {
                loading.classList.add("hidden");
                finalQuestion.classList.remove("hidden");
            }, 20000);
        }
    });

    // Handle final Yes button click
    finalYesButton.addEventListener("click", function() {
        finalQuestion.classList.add("hidden");
        celebration.classList.remove("hidden");
        loveMusic.play();
    });

    // "No" button moves when clicked
    function moveNoButton(noBtn) {
        let x = Math.random() * 300 - 150;
        let y = Math.random() * 200 - 100;
        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    }

    noButton.addEventListener("click", () => moveNoButton(noButton));
    finalNoButton.addEventListener("click", () => moveNoButton(finalNoButton));
});
