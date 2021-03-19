console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
//Question 1:

let basket = [];
const maxItems = 5; //STRETCH GOAL

//Question 2:

// function to add items into basket.
function addItem( item ) {
  if (isFull( item ) === false) { //STRETCH GOAL//If there are 5 or less items in the basket then it will push the item in and return true.
  basket.push(item);
  return true;
} else // If there are more than 5 items in the basket then I should see false returned.
  return false;
} // end addItem

// function addItem( item ) { //Original REQUIRED function
//   basket.push(item);
//   return true;
// } // end addItem



console.log(`Basket is ${basket}`);
console.log('Adding blue (expect true)', addItem('blue'));
console.log(`Basket is now ${basket}`);

console.log('Adding red', addItem('red'));
console.log('Adding green', addItem('green'));
console.log('Adding purple', addItem('purple'));
console.log('Adding yellow', addItem('yellow'));
console.log('Adding grey', addItem('grey'));
console.log('Adding orange', addItem('orange'));
console.log(`Basket is now ${basket}`);

//Question 3:

//function to list items out.
function listItems( basket ) {
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
listItems( basket );

//Question 4:

// function to empty basket
function empty() { //* When I pass an argumet through (basket) it logs the array as normal without emptying? But if I leave the arguments blank and then call the function afterward it shows an empty array. Why is that?
  basket = []; // Changing the value of basket to an empty array.
  if (basket.length === 0) { // Checking to see that if the array is actually empty, then true will be returned.
    return true;
  } else {
    return false;
  }
}

empty( basket );
console.log('Is my basket empty?', empty() ); // Testing empty()
console.log(basket);


// * I again initially tried the above code but then after class decided to try a different method.

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


//[[STRETCH GOALS]]





function isFull() {
  if ( basket.length < maxItems ) {
    return false;
  } else if ( basket.length >= maxItems ) {
    return true;
  }
}

console.log( 'Is my basket full?', isFull() );
