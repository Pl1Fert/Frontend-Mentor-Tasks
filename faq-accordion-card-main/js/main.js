let acc = document.querySelectorAll('.accordion__item__header');

for(let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("accordion__item__show");

        let body = this.nextElementSibling;
        if(body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    })
}