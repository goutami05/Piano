const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const soundPath = button.getAttribute("data-sound");
        const audio = new Audio(soundPath);
        audio.play();
        button.classList.add("clicked-shadow");
        buttons.forEach(btn => {
            if (btn !== button) {
                btn.classList.remove("clicked-shadow");
            }
        });
    });
});
