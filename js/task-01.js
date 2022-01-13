
const categories = document.querySelectorAll("ul#categories li.item");
// const numberCategories = categories.length;
console.log(`Number of categories: ${categories.length}`);
categories.forEach((element) => {
    console.log(`Category: ${element.querySelector("h2").textContent} `);
    console.log(`Elements: ${element.querySelectorAll("li").length}`);

});
