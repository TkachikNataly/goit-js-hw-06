const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listNew = document.querySelector("#ingredients");
ingredients.forEach((element) => {
  const elementLiNew = document.createElement("li");
  elementLiNew.textContent = element;
  elementLiNew.classList.add("item");
  listNew.append(elementLiNew);
});
