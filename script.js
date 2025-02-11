document.addEventListener("DOMContentLoaded", function() {
    const giftBox = document.getElementById("gift-box");
    const lid = document.getElementById("lid");
    const loading = document.getElementById("loading");
    const message = document.getElementById("message");
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const loveMusic = document.getElementById("loveMusic");
    const celebration = document.getElementById("celebration");
    const questionText = document.getElementById("question-text");

    let questionIndex = 0;
    const questions = [
        "Do you love me? ❤️",
        "Are you sure? 🤔",
        "Are you really, really sure? 😳"
    ];

    // Show only the box at the start
    message.classList.add("hidden");
    loading.classList.add("hidden");
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

            setTimeout(() => {
                loading.classList.add("hidden");
                celebration.classList.remove("hidden");
                loveMusic.play();
            }, 3000);
        }
    });

    // "No" button moves when clicked
    noButton.addEventListener("click", function() {
        let x = Math.random() * 300 - 150;
        let y = Math.random() * 200 - 100;
        noButton.style.transform = `translate(${x}px, ${y}px)`;
    });
});
