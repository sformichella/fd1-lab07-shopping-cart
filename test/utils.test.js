import {
    renderGame,
    renderGame,
    findById,, renderRow
} from '../apps/utils.js'


const test = QUnit.test;


// renderGame Test
test('renderGame should return a list element with the appropriate contents when passed a game object', (expect) => {
    const game = {
        id: 'csgo',
        name: 'Counter-Strike: Global Offensive',
        developer: 'Valve Corporation',
        image: 'csgo.png',
        description: 'a competitive first-person shooter game',
        category: 'fps',
        price: 15.00,
        onSale: false,
    }

    const expected = '<li class="game"><p class="title">Counter-Strike: Global Offensive</p><p class="developer">Valve Corporation</p><img class="cover" src="../assets/csgo.png"><p class="price">$15.00</p><button value="csgo">Add to cart</button></li>'

    const actual = renderGame(game);

    expect.equal(actual.outerHTML, expected)
});


// renderRow Test
test('renderRow should return a table row element with the appropriate contents when passed a cart item object', (expect) => {
    const cartItem = {
        id: 'csgo',
        quantity: 5
    }

    const expected = "<tr><td>Counter-Strike: Global Offensive</td><td>$15.00</td><td>5</td>td>$75.00</td></tr>";

    const actual = renderRow(cartItem).outerHTML;

    expect.equal(actual, expected);
})


// findByID Test
test('findByID should take in an id and an array and return the matching item', function(assert) {
    const spot = {
        id: 'spot',
        type: 'doggy',
        weight: 5
    };
    
    const douglas = {
        id: 'douglas',
        type: 'doggy',
        weight: 12
    };
    
    const jumpy = {
        id: 'jumpy',
        type: 'froggy',
        weight: 1
    };
    
    const myArray = [
        spot,
        douglas,
        jumpy
    ];

    //Arrange
    // Set up your parameters and expectations

    const myId1 = 'spot';
    const myId2 = 'jumpy';
    const expected1 = spot;
    const expected2 = jumpy;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = findById(myArray, myId1);
    const actual2 = findById(myArray, myId2);
    
    //Assert
    // Make assertions about what is expected versus the actual result
    assert.equal(actual1, expected1);
    assert.equal(actual2, expected2);
});