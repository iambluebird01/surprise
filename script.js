document.getElementById("yes").addEventListener("click", function() {
    let boy = document.querySelector(".stick-boy");
    boy.classList.add("celebrate");
});

const noButton = document.getElementById("no");
noButton.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});
