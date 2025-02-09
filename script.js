document.addEventListener("DOMContentLoaded", function() {
    const giftBox = document.getElementById("gift-box");
    const lid = document.querySelector(".lid");
    const message = document.getElementById("message");
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");
    const heartsContainer = document.getElementById("hearts-container");

    // Click to open the gift box
    giftBox.addEventListener("click", function() {
        lid.style.transform = "rotateX(180deg)";

        // Floating Hearts
        for (let i = 0; i < 20; i++) {
            let heart = document.createElement("div");
            heart.classList.add("heart");
            heart.innerHTML = "❤️";
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration = Math.random() * 2 + 2 + "s";
            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }

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
        document.body.style.background = "gold";

        for (let i = 0; i < 10; i++) {
            let confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.innerHTML = "🎉🎊💖";
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.top = Math.random() * 100 + "vh";
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 2000);
        }
    });
});
