// const categories = document.querySelectorAll("#categories li.item");
// const numberOfCategories = categories.length;
// console.log(`Number of categories: ${numberOfCategories}`);

// // change NodeList in Array
// const categoryArr = [...categories];
// const headingTextArray = categoryArr.map((item) => {
//   const text = item.querySelector("h2").textContent;
//   const elements = item.querySelector("ul").children.length;
//   console.log(`Category: ${text}`);
//   console.log(`Numbers elements: ${elements}`);
// });

// console.dir(Document);

const categories = document.querySelectorAll("ul#categories li.item");
const numberCategories = categories.length;
console.log(`Number of categories: ${numberCategories}`);
// console.log(categories);
// const title = categories.querySelectorAll("h2");
// console.log(title.textContent);

categoriesEllement => {
    const title = li.querySelectorAll("h2");
    console.log(title).textContent;
}