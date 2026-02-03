document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq__item");
    const faqQuestions = document.querySelectorAll(".faq__question");

    faqQuestions.forEach((question, index) => {
        question.addEventListener("click", () => {
            const currentItem = faqItems[index];
            const isActive = currentItem.classList.contains("active");

            // Закрываем все
            faqItems.forEach((item) => item.classList.remove("active"));

            // Открываем текущий, если был закрыт
            if (!isActive) {
                currentItem.classList.add("active");
            }
        });
    });
});
