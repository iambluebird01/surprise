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

    // Initially hide everything except the gift box
    message.classList.add("hidden");
    loading.classList.add("hidden");

    // Click to open the gift box
    giftBox.addEventListener("click", function() {
        lid.classList.add("open"); // Flip the lid

        setTimeout(() => {
            giftBox.style.display = "none"; // Hide gift box
            setTimeout(() => {
                message.classList.remove("hidden"); // Show first question
                questionText.innerHTML = questions[questionIndex];
            }, 1000); // Delay for a smooth transition
        }, 800);
    });

    // Handle clicking "Yes" through the questions
    yesButton.addEventListener("click", function() {
        questionIndex++;

        if (questionIndex < questions.length) {
            questionText.innerHTML = questions[questionIndex]; // Show next question
            
            // Reset "No" button beside "Yes"
            noButton.style.transform = "translate(0, 0)";
        } else {
            message.classList.add("hidden"); // Hide questions
            loading.classList.remove("hidden"); // Show loading screen
            loveMusic.play(); // Play music

            setTimeout(() => {
                loading.classList.add("hidden"); // Hide loading screen
                message.classList.remove("hidden"); // Show final question
                questionText.innerHTML = "Will you be my Valentine? ❤️";
            }, 30000); // 30 seconds delay
        }
    });

    // "No" button runs away when clicked (not hover)
    noButton.addEventListener("click", function() {
        let x = Math.random() * 300 - 150; 
        let y = Math.random() * 200 - 100; 
        noButton.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Final Yes response triggers celebration
    yesButton.addEventListener("click", function() {
        if (questionIndex === questions.length) { 
            document.body.style.animation = "backgroundPulse 3s infinite";
            questionText.innerHTML = "Yay! I Love You! ❤️"; 
            yesButton.style.display = "none";
            noButton.style.display = "none";

            let celebrationDuration = 30000; 
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
