document.addEventListener("DOMContentLoaded", function () {
  const productInput = document.querySelector(".input-product");
  const reviewInput = document.querySelector(".review");
  const addButton = document.querySelector(".add-review");
  const error = document.querySelector(".error");

  addButton.addEventListener("click", function () {
    const product = productInput.value;
    const review = reviewInput.value;
    console.log(product);
    console.log(review);

    if (product !== "" && review !== "") {
      let reviews = JSON.parse(localStorage.getItem(product));
      if (reviews === null) {
        reviews = [];
      }
      reviews.push(review);
      localStorage.setItem(product, JSON.stringify(reviews));
    } else {
      error.textContent = "Заполните, пожалуйста, все поля";
    }
  });
});

const listProducts = document.querySelector(".reviews");

for (let i = 0; i < localStorage.length; i++) {
  let product = localStorage.key(i);
  let reviewSet = JSON.parse(localStorage.getItem(product));

  const divProduct = document.createElement("div");
  listProducts.insertAdjacentElement("beforeend", divProduct);
  divProduct.insertAdjacentHTML(
    "beforeend",
    `<h2>${product} <button onclick="openReview(this)">Показать отзывы</button> </h2>`
  );

  const divReviews = document.createElement("div");
  divReviews.hidden = true;
  divProduct.insertAdjacentElement("beforeend", divReviews);

  reviewSet.forEach((element) => {
    const newReview = document.createElement("div");
    divReviews.insertAdjacentElement("beforeend", newReview);

    const reviewText = document.createElement("span");
    reviewText.textContent = element;
    newReview.insertAdjacentElement("beforeend", reviewText);

    newReview.insertAdjacentElement(
      "beforeend",
      deleteReviewBtn(reviewText, reviewSet, product)
    );
  });
}

function deleteReviewBtn(textReview, setReview, product) {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Удалить";

  deleteBtn.addEventListener("click", () => {
    if (setReview.length > 1) {
      let indexItem = setReview.findIndex(
        (element) => element === textReview.textContent
      );
      setReview.splice(indexItem, 1);
      localStorage.setItem(product, JSON.stringify(setReview));
    } else {
      localStorage.removeItem(product);
      deleteBtn.parentElement.parentElement.parentElement.remove();
    }
    textReview.parentElement.remove();
    deleteBtn.remove();
  });
  return deleteBtn;
}

function openReview(elem) {
  let hiddenElement = elem.parentElement.parentElement.lastChild;
  if (hiddenElement.hidden) {
    hiddenElement.hidden = false;
    elem.textContent = "Скрыть";
  } else {
    hiddenElement.hidden = true;
    elem.textContent = "Показать отзывы";
  }
}
