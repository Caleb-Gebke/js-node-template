const order = {
    price: 10,
    quantity: 2,
}
function calculateTotal(order) {
    return order.price * order.quantity;
}
console.log(calculateTotal(order));


const name = {
    firstName: 'John',
    lastName: 'Doe',
}
function formatUsername(name) {
    return `${name.lastName}, ${name.firstName}`;
}
console.log(formatUsername(name));


const WAZZUP = 'Hello' + ' ' + 'World!';
function greet() {
    return WAZZUP;
}
console.log(greet());


const cart = {
    price: 100,
    tax: 0.07,
}

function Total(cart) {
    return cart.price + cart.price * cart.tax;
}
console.log(Total(cart));



const nameInfo = {
    firstName: 'John',
    lastName: 'Doe',
}
function displayFullName(nameInfo) {
    return `${nameInfo.firstName} ${nameInfo.lastName}`;
}
console.log(displayFullName(nameInfo));


const character = {
    name: 'Booker Dewitt',
    weapon: 'Skyhook',
    vigors: ['Possession', 'Shock Jockey', 'Devil\'s Kiss'],
}
function displayCharacterInfo(character) {
    return `${character.name} uses the ${character.weapon} and has the vigors ${character.vigors.join(', ')}`;
}
console.log(displayCharacterInfo(character));