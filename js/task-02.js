const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listWithId = document.querySelector('#ingredients');
listWithId.textContent = "ingredients:";
for (const ingredient of ingredients) {
  const Item = document.createElement("li");
  Item.textContent = ingredient;
  Item.classList.add("item");
  listWithId.append(Item);
}