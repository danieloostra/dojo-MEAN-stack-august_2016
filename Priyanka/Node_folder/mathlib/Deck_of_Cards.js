function Stack(){
  this.cards=[ 'A-H', 'K-H', 'Q-H', 'J-H', '10-H', '9-H', '8-H', '7-H', '6-H', '5-H',
  '6-H', '3-H', '2-H',  'A-C', 'K-C', 'Q-C', 'J-C', '10-C', '9-C', '8-C',
   '7-C', '6-C', '5-C', '4-C', '3-C', '2-C', 'A-S', 'K-S', 'Q-S', 'J-S',
   '10-S', '9-S', '8-S', '7-S', '6-S', '5-S', '4-S', '3-S', '2-S', 'A-D',
   'K-D', 'Q-D', 'J-D', '10-D', '9-D', '8-D', '7-D', '6-D', '5-D', '4-D',
   '3-D', '2-D']

   var deck = []
   for(var i=0 ;i<this.cards.length;i++){
      deck.push(this.cards[i])
   }
   this.original = deck

Stack.prototype.shuffle = function (){
   var temp = 0;
   for(var i = 0; i < this.cards.length; i ++){
    var nums = Math.floor(Math.random() * this.cards.length - 1);
    temp = this.cards[i];
    this.cards[i] = this.cards[nums];
    this.cards[nums] = temp;
    // console.log(this.cards);
}
}

  Stack.prototype.reset = function () {
     this.cards = this.original
  }

  Stack.prototype.deal = function () {
    this.shuffle();
    var newCard=this.cards.shift();
    return newCard;

  }
}

function players(name){
  this.name=name;
  this.hand=[];
  this.take_card=function(card){
    this.hand.push(card)
    console.log(this.hand)

  }
  //   this.hand+=
  // }
}

var Priyanka=new players("Priyanka");



var NewDeck= new Stack();




console.log(NewDeck.cards.length)

Priyanka.take_card(NewDeck.deal())
Priyanka.take_card(NewDeck.deal())

console.log(NewDeck.cards.length)

NewDeck.reset()


console.log(NewDeck.cards.length)









// function Stack () {
//   this.cards=newArray();
//   this.makeDeck=stackMakeDeck;
//   this.shuffle=stackShuffle;
//   this.deal=stackDeal;
//   this.remove=stackRemove;
// }
// Stack.prototype.stackMakeDeck = function () {
//   var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9","10", "J", "Q", "K");
//   var suits = new Array("C", "D", "H", "S");
//   var j, k;
//   var m;
//   m = ranks.length * suits.length;
//   console.log(m);
//   // Set array of cards.
//   this.cards =m;
//   // Fill the array with 'n' packs of cards.
//     for (j = 0; j < suits.length; j++)
//       for (k = 0; k < ranks.length; k++)
//         this.cards[m + j * ranks.length + k] =
//           new Card(ranks[k], suits[j]);
//   }
//
// Stack.prototype.stackShuffle=function() {
//   var j, k;
//   var temp;
//   // Shuffle the stack 'n' times.
//     for (j = 0; j < this.cards.length; j++) {
//       k = Math.floor(Math.random() * this.cards.length);
//       temp = this.cards[j];
//       this.cards[j] = this.cards[k];
//       this.cards[k] = temp;
//     }
// }
//
// Stack.prototype.stackDeal=function() {
//   if (this.cards.length > 0)
//     return this.cards.shift();
//   else
//     return null;
// }
//
// Stack.prototype.stackRemove=function(card) {
//   this.cards.pop(card);
// }
//
//
// var NewDeck= new Stack();
// NewDeck.
// console.log(NewDeck.stackShuffle());
//
// function Player(name) {
//   this.name=name;
