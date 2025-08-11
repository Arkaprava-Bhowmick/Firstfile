const pages = document.querySelectorAll(".form-page");
const progress = document.querySelector(".progress");
let currentPage = 0;

function updateForm() {
  // Hide all pages
  pages.forEach((page) => page.classList.remove("active"));

  // Show the current page
  pages[currentPage].classList.add("active");

  // Update the progress bar
  progress.style.width = ((currentPage + 1) / pages.length) * 100 + "%";
}

// Handle next buttons
document.querySelectorAll(".next").forEach((button) => {
  button.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
      currentPage++;
      updateForm();
    }
  });
});

// Handle previous buttons
document.querySelectorAll(".previous").forEach((button) => {
  button.addEventListener("click", () => {
    if (currentPage > 0) {
      currentPage--;
      updateForm();
    }
  });
});

// Initialize form
updateForm();
