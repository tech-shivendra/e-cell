
const ideaForm = document.getElementById("ideaForm");
const submitBtn = document.getElementById("ideaSubmitBtn");

ideaForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Button loading state
    submitBtn.innerHTML = "Submitting...";
    submitBtn.disabled = true;

    setTimeout(() => {
        ideaForm.reset();

        submitBtn.innerHTML = "Submit Idea";
        submitBtn.disabled = false;

        const successModal = new bootstrap.Modal(
            document.getElementById("ideaSuccessModal")
        );
        successModal.show();
    }, 1200); // fake delay for smooth UX
});

const confidentialText = document.getElementById("confidentialText");

ideaForm.addEventListener("focusin", () => {
    confidentialText.style.color = "#28a745";
    confidentialText.innerHTML = "✔ Your idea is protected & confidential";
});


