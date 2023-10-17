let onButton = document.querySelector(".modal-on");
let modal = document.querySelector(".about-me-modal");
let contactModal = document.querySelector(".contact-me-modal");
let offButton = document.querySelector(".modal-off");
let contactmebuttonOn = document.querySelector(".contact-me-button");
let contactmebuttonOff = document.querySelector(".contact-modal-off");

onButton.addEventListener("click", () => {
  modal.style.display = "block";
});

offButton.addEventListener("click", () => {
  modal.style.display = "none";
});

contactmebuttonOn.addEventListener("click", () => {
  contactModal.style.display = "block";
});

contactmebuttonOff.addEventListener("click", () => {
  contactModal.style.display = "none";
});
