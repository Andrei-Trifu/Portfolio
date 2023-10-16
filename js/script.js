let onButton = document.querySelector(".modal-on");
let modal = document.querySelector(".about-me-modal");
let offButton = document.querySelector(".modal-off");

onButton.addEventListener("click", () => {
  modal.style.display = "block";
});

offButton.addEventListener("click", () => {
  modal.style.display = "none";
});
