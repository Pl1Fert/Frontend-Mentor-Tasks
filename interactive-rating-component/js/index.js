const submitBtn = document.querySelector(".submit-btn");
const scoreElem = document.querySelector(".score");
const ratingBtns = document.querySelectorAll(".rating-btn");
let selectedScore = 4; // default value

submitBtn.addEventListener("click", () => {
    const ratingCard = document.querySelector(".rating-card");
    const gratitudeCard = document.querySelector(".gratitude-card");

    if (
        Array.from(ratingBtns).some((ratingBtn) =>
            ratingBtn.classList.contains("rating-btn_active")
        )
    ) {
        scoreElem.innerHTML = `You selected ${selectedScore} out of 5`;
        ratingCard.classList.toggle("card_hidden");
        gratitudeCard.classList.toggle("card_hidden");
    } else {
        alert("You did not select a rating");
    }
});

ratingBtns.forEach((ratingBtn) => {
    ratingBtn.addEventListener("click", () => {
        const isContains = ratingBtn.classList.contains("rating-btn_active");
        ratingBtns.forEach((btn) => {
            btn.classList.remove("rating-btn_active");
        });

        if (isContains === false) {
            ratingBtn.classList.add("rating-btn_active");
            selectedScore = ratingBtn.innerHTML;
        }
    });
});
