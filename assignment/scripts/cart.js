console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

// function to add items into basket.
function addItem( item ) {
  basket.push(item);
  return true;
} // end addItem

console.log(`Basket is ${basket}`);
console.log('Adding blue (expect true)', addItem('blue'));
console.log(`Basket is now ${basket}`);

console.log('Adding red', addItem('red'));
console.log('Adding green', addItem('green'));
console.log('Adding purple', addItem('purple'));
console.log(`Basket is now ${basket}`);

// function to list items out.
function listItems( ) {
  for (let i=0; i < basket.length; i++) {
    console.log(basket[i]);
  }
} //end listItems

// testing function
console.log( listItems() );

// function to empty basket
function empty() {
  basket = [];
  if (basket.length === 0) {
    return true
  }
}

console.log('Is basket empty?', empty());
