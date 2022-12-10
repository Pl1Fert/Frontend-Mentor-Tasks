let acc = document.querySelectorAll('.accordion__item');

for(let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("accordion__item_show");
    })
}