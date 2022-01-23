const listWithId = document.querySelector('#categories');
console.log(`Number of categories: ${listWithId.children.length}`);

const elements = document.getElementsByClassName('item');
    for (const element of elements) {
        console.log(`Category: ${element.firstElementChild.textContent}`);
        console.log(`Elements: ${element.lastElementChild.children.length}`);
    }