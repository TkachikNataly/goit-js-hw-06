const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const listNew = document.querySelector("#ingredients");
// ingredients.forEach((element) => {
//   const elementLiNew = document.createElement("li");
//   elementLiNew.textContent = element;
//   elementLiNew.classList.add("item");
  
// });
// listNew.append(...ingredients);
const ingrListRef = document.querySelector("#ingredients");
const ingrList = ingredients.map(element => {
  const ingrItem = document.createElement("li");
  ingrItem.textContent = element;
  ingrItem.classList.add("item");
  return ingrItem;
}); ingrListRef.append(...ingrList);

