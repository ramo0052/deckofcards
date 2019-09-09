const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
const suits = ['clubs', 'diamonds', 'hearts', 'spades']


//* create a cards array
const cards = [];

// Loop through the suits
for (let suit of suits) {   

//Loop through the ranks
for (let rank of ranks) {
    cards.push(`<div class="card">
  <div class="card__inner">
    <div class="card__front">
      <div class="number ${suit}">${rank}</div>

      <div class="suit"><img src="images/${suit}.png"></div>
      <div class="number ${suit}">${rank}</div>
    </div>
    <div class="card__back"></div>
  </div>
</div>`);

} 
}

//Change the suit and rank inside the template literal
//push card to cards
//cards.push(`<div class="card${suit}">`);
//cards.push(`<div class="number${rank}">`);
//card.push('cards');


//Retrieve deck from HTML
 
// Insert cards to deck
deck.innerHTML = cards.join(" ");

// Add an Event Listener to the deck
//    Look for an element with class of 'card' using the closest() method
//    If the element exists
//      Toggle the class 'flipped'
deck.addEventListener("click", function (e) {
  $card = e.target.closest('.card');
  if($card) {
    $card.classList.toggle('flipped')}
});


/*
<div class="card">
  <div class="card__inner">
    <div class="card__front">
      <div class="number hearts">2</div>
      <div class="suit"><img src="images/hearts.png"></div>
      <div class="number hearts">2</div>
    </div>
    <div class="card__back"></div>
  </div>
</div>
*/
