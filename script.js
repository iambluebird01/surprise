document.addEventListener("DOMContentLoaded", function() {
    const giftBox = document.getElementById("gift-box");
    const lid = document.querySelector(".lid");
    const message = document.getElementById("message");
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const loveMusic = document.getElementById("loveMusic");
    const questionText = document.getElementById("question-text");

    // Click to open the gift box
    giftBox.addEventListener("click", function() {
        lid.style.transform = "rotateX(180deg)";

        setTimeout(() => {
            message.classList.remove("hidden");
            giftBox.style.display = "none";
        }, 800);
    });

    // "No" button runs away
    noButton.addEventListener("mouseover", function() {
        let x = Math.random() * 300 - 150;
        let y = Math.random() * 200 - 100;
        noButton.style.transform = `translate(${x}px, ${y}px)`;
    });

    // "Yes" button triggers celebration
    yesButton.addEventListener("click", function() {
        document.body.style.animation = "backgroundPulse 3s infinite";
        loveMusic.play(); // Play romantic song

        // Change message text
        questionText.innerHTML = "Yay! I Love You! ❤️";
        
        // Hide buttons
        yesButton.style.display = "none";
        noButton.style.display = "none";

        let celebrationDuration = 30000; // 30 seconds celebration
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
                setTimeout(celebration, 500); // Keep adding confetti
            } else {
                document.body.style.animation = "none"; // Stop background pulse
                loveMusic.pause();
            }
        }
        
        celebration();
    });
});
