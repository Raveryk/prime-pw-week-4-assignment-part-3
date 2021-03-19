console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
//Question 1:

let basket = [];

//Question 2:

// function to add items into basket.
function addItem( item ) {
  basket.push(item); // each value of item should be entered into the basket array.
  return true; // to check that the item was pushed into basket it will return true.
} // end addItem

console.log(`Basket is ${basket}`);
console.log('Adding blue (expect true)', addItem('blue'));
console.log(`Basket is now ${basket}`);

console.log('Adding red', addItem('red'));
console.log('Adding green', addItem('green'));
console.log('Adding purple', addItem('purple'));
console.log(`Basket is now ${basket}`);

//Question 3:

//function to list items out.
function listItems() {
  for (let i=0; i < basket.length; i++) { // this loop will iterate through the basket array.
    console.log(basket[i]); // I should see each index value of basket in the console.
  }
} //end listItems

// * I initially wrote the loop above but after class on Thursday wrote out the function below:

// function listItems() {
//   for ( let items of basket ) {
//     console.log( items );
//   }
// }

// testing function
console.log( listItems() );

//Question 4:

// function to empty basket
function empty() {
  basket = []; // Changing the value of basket to an empty array.
  if (basket.length === 0) { // Checking to see that if the array is actually empty, then true will be returned.
    return true
  }
}

console.log('Is my basket empty?', empty()); // Testing empty()

// * I again initially tried the above code but then after class decided to try and different method.

// function empty() {
//   let index = 0;
//   const max = basket.length;
//
//   while ( index < max ) {
//     basket.pop( index++ );
//   }
//   return true;
// }
//
// console.log('Is basket empty?', empty());


//[[STRETCH]]

//5.

const maxItems = 5;

function isFull() {
  if ( basket.length < maxItems ) {
    return false;
  } else if ( basket.length >= maxItems ) {
    return true;
  }
}

console.log( 'Is my basket full?', isFull() );
