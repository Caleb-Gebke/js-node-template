const order = {
    price: 10,
    quantity: 2,
}
console.log(order.price * order.quantity);

const name = {
    firstName: 'John',
    lastName: 'Doe',
}
console.log(`${name.lastName} ${name.firstName}`);

const WAZZUP = 'Hello' + ' ' + 'World!';
console.log(WAZZUP);

const cart = {
    price: 100,
    tax: 0.07,
}
console.log((cart.price * cart.tax) + cart.price);

const nameInfo = {
    firstName: 'John',
    lastName: 'Doe',
}
console.log(`${nameInfo.firstName} ${nameInfo.lastName}`);

const character = {
    name: 'Booker Dewitt',
    weapon: 'Skyhook',
    vigors: ['Possession', 'Shock Jockey', 'Devil\'s Kiss'],
}
function displayCharacterInfo(character) {
    return `${character.name} uses the ${character.weapon} and has the vigors ${character.vigors.join(', ')}`;
}
console.log(displayCharacterInfo(character));