const filterButtons = document.querySelectorAll(
  ".filter-buttons-container button"
);
const productCards = document.querySelectorAll(".cards-container .card");

const filterCard = (e) => {
  const categoryName = e.target.dataset.name;
  productCards.forEach((card) => {
    const cardCategory = card.dataset.category;
    if (categoryName === "all" || cardCategory === categoryName) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};

filterButtons.forEach((button) => button.addEventListener("click", filterCard));
