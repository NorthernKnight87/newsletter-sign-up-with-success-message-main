const form = document.getElementById("form");
const input = document.getElementById("email__input");
const errorMessage = document.getElementById("email_error");
const mobileSuccessBackground = document.getElementById(
  "mobile__success__body",
);
const dismissButton = document.getElementById("dismiss__button");
const dismissMessageButton = document.getElementById("dismiss__message");
const cardContainer = document.getElementById("card__container");

/* Helper function to clear error state and allow user to retry subscription */
const clearError = () => {
  input.setCustomValidity("");
  input.style.backgroundColor = "";
  input.style.color = "";
  errorMessage.style.display = "none";
};

/* Handle form submission */

const handleSubmit = (e) => {
  e.preventDefault();

  if (!input.validity.valid) {
    input.setCustomValidity("Valid email required");
    input.style.color = "var(--error-message-color)";
    input.style.backgroundColor = "var(--input-error-background-color)";
    errorMessage.style.display = "inline";
    input.focus(); /* Focus the input field to guide the user to correct the error */
    return;
  }
  clearError();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  /* Hide the form and show the success message + mobile styling */
  cardContainer.style.display = "none";
  const successMessage = document.getElementById("success__message__hidden");
  successMessage.style.display = "flex";
  mobileSuccessBackground.classList.add("mobile__success__background");
  dismissButton.classList.add("mobile__dismiss__button");
};

const handleInput = (e) => {
  clearError();
};

/*Event listeners for form submission, input changes and dismissing the success message on second click */

form.addEventListener("submit", handleSubmit);
input.addEventListener("input", handleInput);
dismissMessageButton.addEventListener("click", () => {
  const successMessage = document.getElementById("success__message__hidden");
  successMessage.style.display = "none";
  mobileSuccessBackground.classList.remove("mobile__success__background");
  dismissButton.classList.remove("mobile__dismiss__button");
  cardContainer.style.display = "flex";
});
