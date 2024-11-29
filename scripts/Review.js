document.addEventListener("DOMContentLoaded", () => {
    const writeReviewBtn = document.getElementById("writeReviewBtn");
    const reviewModal = document.getElementById("reviewModal");
    const closeBtn = reviewModal.querySelector(".close");
  

    writeReviewBtn.addEventListener("click", () => {
      reviewModal.style.display = "block";
      console.log("Hello");
    });

    closeBtn.addEventListener("click", () => {
      reviewModal.style.display = "none";
    });
  

    window.addEventListener("click", (event) => {
      if (event.target === reviewModal) {
        reviewModal.style.display = "none";
      }
    });
  
    document.getElementById("reviewForm").addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Review submitted successfully!");
      reviewModal.style.display = "none";
    });
  });
  