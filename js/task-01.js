const categoriesNumEl = document.querySelector("#categories");
console.log("Number of categories ", categories.children.length);

const subCategoryNumEl = document.querySelectorAll(".item");
subCategoryNumEl.forEach((category) => {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Element: ", category.lastElementChild.children.length);
});
