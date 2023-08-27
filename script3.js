document.addEventListener("DOMContentLoaded", function () {
  const subscribeButton = document.querySelector(".subscribe-button");
  const emailInput = document.querySelector(".email-input");
  const errorModal = document.querySelector("#error-modal");
  const successModal = document.querySelector("#success-modal");

  subscribeButton.addEventListener("click", function () {
      const emailValue = emailInput.value.trim();

      if (!isValidEmail(emailValue)) {
          alert('email invalid!');
      } else {
          alert('email valid!');
      }
  });

  // Function to close modals
  function closeModal(modal) {
      modal.style.display = "none";
  }

  // Close modals when clicking outside
  window.addEventListener("click", function (event) {
      if (event.target === errorModal || event.target === successModal) {
          closeModal(errorModal);
          closeModal(successModal);
      }
  });

  // Close modals when clicking on close buttons
  const closeErrorButton = document.querySelector("#close-error-modal");
  const closeSuccessButton = document.querySelector("#close-success-modal");

  closeErrorButton.addEventListener("click", function () {
      closeModal(errorModal);
  });

  closeSuccessButton.addEventListener("click", function () {
      closeModal(successModal);
  });

  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }
});

  document.addEventListener("DOMContentLoaded", function () {
    const containerSlider = document.querySelector(".container-slider");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");
    const containerWidth = containerSlider.offsetWidth;
    let currentIndex = 0;

    prevButton.addEventListener("click", () => {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateSlider();
    });

    nextButton.addEventListener("click", () => {
        currentIndex = Math.min(currentIndex + 1, containerSlider.childElementCount - 1);
        updateSlider();
    });

    function updateSlider() {
        const translateX = -currentIndex * containerWidth;
        containerSlider.style.transform = `translateX(${translateX}px)`;
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const containerSlider = document.querySelector(".container-slider");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const containerWidth = containerSlider.offsetWidth;
  let currentIndex = 0;

  prevButton.addEventListener("click", () => {
      currentIndex = Math.max(currentIndex - 1, 0);
      updateSlider();
  });

  nextButton.addEventListener("click", () => {
      currentIndex = Math.min(currentIndex + 1, containerSlider.childElementCount - 1);
      updateSlider();
  });

  function updateSlider() {
      const translateX = -currentIndex * containerWidth;
      containerSlider.style.transform = `translateX(${translateX}px)`;
  }
});