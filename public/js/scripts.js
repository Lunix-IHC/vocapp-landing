document.querySelectorAll(".faq-card").forEach(function(div) {
    div.addEventListener("click", function() {
        document.querySelectorAll(".faq-card").forEach(function(el) {
            el.classList.remove("active");
        });
        this.classList.toggle("active");
    });
});