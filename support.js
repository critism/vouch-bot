const search = document.getElementById("search");
const faqs = document.querySelectorAll(".faq-item");

search.addEventListener("input", () => {
    const value = search.value.toLowerCase();

    faqs.forEach(faq => {
        const text = faq.textContent.toLowerCase();

        if (text.includes(value)) {
            faq.classList.remove("hidden");
        } else {
            faq.classList.add("hidden");
        }
    });
});
