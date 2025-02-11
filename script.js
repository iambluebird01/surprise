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
        "Do you love me, Stacy Guerrero? ❤️",
        "Are you sure? 🤔",
        "Are you really, really sure? 😳"
    ];

    // Initially, only the gift box should be visible
    message.classList.add("hidden");
    loading.classList.add("hidden");

    // Click to open the gift box
    giftBox.addEventListener("click", function() {
        lid.classList.add("open"); // Flip the lid

        setTimeout(() => {
            giftBox.style.display = "none"; // Hide the gift box completely
            message.classList.remove("hidden"); // Show the first question
            questionText.innerHTML = questions[questionIndex];
        }, 1000);
    });

    // Handle clicking "Yes" through the questions
    yesButton.addEventListener("click", function() {
        questionIndex++;

        if (questionIndex < questions.length) {
            questionText.innerHTML = questions[questionIndex]; // Show next question
            noButton.style.transform = "translate(0, 0)"; // Reset "No" button position
        } else {
            // Hide the question box and show the loading screen
            message.classList.add("hidden");
            loading.classList.remove("hidden");
            loveMusic.play(); // Play background music

            setTimeout(() => {
                loading.classList.add("hidden"); // Hide loading screen
                message.classList.remove("hidden"); // Show final question
                questionText.innerHTML = "Will you be my Valentine? ❤️";
                
                // Move final question lower to avoid overlap
                message.style.top = "55%"; // Adjust position lower
            }, 5000); // 5 seconds delay for loading effect
        }
    });

    // "No" button runs away when clicked
    noButton.addEventListener("click", function() {
        let x = Math.random() * 300 - 150; // Random position
        let y = Math.random() * 200 - 100;
        noButton.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Final "Yes" response triggers celebration
    yesButton.addEventListener("click", function() {
        if (questionIndex === questions.length) {
            document.body.style.animation = "backgroundPulse 3s infinite";
            questionText.innerHTML = "Yay! I Love You! ❤️";
            yesButton.style.display = "none";
            noButton.style.display = "none";

            let celebrationDuration = 10000; // Celebration lasts 10 seconds
            let startTime = Date.now();

            function celebration() {
                if (Date.now() - startTime < celebrationDuration) {
                    for (let i = 0; i < 5; i++) {
                        let confetti = document.createElement("div");
                        confetti.classList.add("confetti");
                        confetti.innerHTML = "🎉🎊💖";
                        confetti.style.left = Math.random() * 100 + "vw";
                        confetti.style.top = Math.random() * 100 + "vh";
                        document.body.appendChild(confetti);
                        setTimeout(() => confetti.remove(), 2000);
                    }
                    setTimeout(celebration, 500);
                } else {
                    document.body.style.animation = "none";
                    loveMusic.pause();
                }
            }
            celebration();
        }
    });
});
