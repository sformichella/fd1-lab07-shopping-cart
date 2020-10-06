// renderGame Function. Creates a list element from a game object.
export function renderGame(game) {
    let li = document.createElement('li');
    li.classList.add('game');

    if (game.onSale) {
        li.classList.add('on-sale');
    }


    let title = document.createElement('p');
    title.classList.add('title');
    title.textContent = game.name;

    let developer = document.createElement('p');
    developer.classList.add('developer');
    developer.textContent = game.developer;

    let cover = document.createElement('img');
    cover.classList.add('cover');
    cover.src = `../assets/${game.image}`;

    let price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `$${game.price.toFixed(2)}`;

    let addButton = document.createElement('button');
    addButton.textContent = 'Add to cart';
    addButton.value = game.id;


    li.appendChild(title);
    li.appendChild(developer);
    li.appendChild(cover);
    li.appendChild(price);
    li.appendChild(addButton);

    return li;
}


// renderRow function. Creates a tr element with title, quantity, price, and subtotal
export function renderRow(cartItem) {

}


// Find element by ID
export function findById(someArray, someId) {

    for (let i = 0; i< someArray.length; i++) {

        const arrayElem = someArray[i];
        
        if (arrayElem.id === someId) {
            return arrayElem;
        }
    }

    return null;
};