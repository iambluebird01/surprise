document.addEventListener("DOMContentLoaded", function() {
    const giftBox = document.getElementById("gift-box");
    const lid = document.querySelector(".lid");
    const loading = document.getElementById("loading");
    const message = document.getElementById("message");
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const loveMusic = document.getElementById("loveMusic");
    const questionText = document.getElementById("question-text");

    let questionIndex = 0;
    const questions = [
        "Do you love me? ❤️",
        "Are you sure? 🤔",
        "Are you really, really sure? 😳"
    ];

    // Hide everything except the box
    message.classList.add("hidden");
    loading.classList.add("hidden");

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
        } else {
            message.classList.add("hidden");
            loading.classList.remove("hidden");
            loveMusic.play();

            setTimeout(() => {
                loading.classList.add("hidden");
                message.classList.remove("hidden");
                questionText.innerHTML = "Will you be my Valentine? ❤️";
            }, 5000);
        }
    });

    // Make "No" button run away
    noButton.addEventListener("mouseover", function() {
        let x = Math.random() * 300 - 150;
        let y = Math.random() * 200 - 100;
        noButton.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Celebration on final "Yes"
    yesButton.addEventListener("click", function() {
        if (questionIndex === questions.length) {
            document.body.style.animation = "backgroundPulse 3s infinite";
            questionText.innerHTML = "Yay! I Love You! ❤️"; 

            setInterval(() => {
                let confetti = document.createElement("div");
                confetti.classList.add("confetti");
                confetti.innerHTML = "🎉";
                confetti.style.left = Math.random() * 100 + "vw";
                document.body.appendChild(confetti);
                setTimeout(() => confetti.remove(), 2000);
            }, 500);
        }
    });
});
