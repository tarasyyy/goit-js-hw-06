const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
list.textContent = 'ingredients:'
for (let i = 0; i < ingredients.length; i += 1) {
  const Item = document.createElement("li");
  Item.textContent = ingredients[i];
  Item.classList.add("item");
  list.append(Item)
}
