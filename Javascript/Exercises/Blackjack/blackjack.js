$('#deal-button').prop('disabled', true);
$('#hit-button').prop('disabled', true);
$('#stand-button').prop('disabled', true);
var dealerhand;
var playerhand;
var deck = null;

function generate_deck () {
  var d = [
  //clubs
  {name: 'ace', points: 1, suit: 'clubs'},
  {name: '2', points: 2, suit: 'clubs'},
  {name: '3', points: 3, suit: 'clubs'},
  {name: '4', points: 4, suit: 'clubs'},
  {name: '5', points: 5, suit: 'clubs'},
  {name: '6', points: 6, suit: 'clubs'},
  {name: '7', points: 7, suit: 'clubs'},
  {name: '8', points: 8, suit: 'clubs'},
  {name: '9', points: 9, suit: 'clubs'},
  {name: '10', points: 10, suit: 'clubs'},
  {name: 'jack', points: 10, suit: 'clubs'},
  {name: 'queen', points: 10, suit: 'clubs'},
  {name: 'king', points: 10, suit: 'clubs'},

  //diamonds
  {name: 'ace', points: 1, suit: 'diamonds'},
  {name: '2', points: 2, suit: 'diamonds'},
  {name: '3', points: 3, suit: 'diamonds'},
  {name: '4', points: 4, suit: 'diamonds'},
  {name: '5', points: 5, suit: 'diamonds'},
  {name: '6', points: 6, suit: 'diamonds'},
  {name: '7', points: 7, suit: 'diamonds'},
  {name: '8', points: 8, suit: 'diamonds'},
  {name: '9', points: 9, suit: 'diamonds'},
  {name: '10', points: 10, suit: 'diamonds'},
  {name: 'jack', points: 10, suit: 'diamonds'},
  {name: 'queen', points: 10, suit: 'diamonds'},
  {name: 'king', points: 10, suit: 'diamonds'},

  //hearts
  {name: 'ace', points: 1, suit: 'hearts'},
  {name: '2', points: 2, suit: 'hearts'},
  {name: '3', points: 3, suit: 'hearts'},
  {name: '4', points: 4, suit: 'hearts'},
  {name: '5', points: 5, suit: 'hearts'},
  {name: '6', points: 6, suit: 'hearts'},
  {name: '7', points: 7, suit: 'hearts'},
  {name: '8', points: 8, suit: 'hearts'},
  {name: '9', points: 9, suit: 'hearts'},
  {name: '10', points: 10, suit: 'hearts'},
  {name: 'jack', points: 10, suit: 'hearts'},
  {name: 'queen', points: 10, suit: 'hearts'},
  {name: 'king', points: 10, suit: 'hearts'},

  //spades
  {name: 'ace', points: 1, suit: 'spades'},
  {name: '2', points: 2, suit: 'spades'},
  {name: '3', points: 3, suit: 'spades'},
  {name: '4', points: 4, suit: 'spades'},
  {name: '5', points: 5, suit: 'spades'},
  {name: '6', points: 6, suit: 'spades'},
  {name: '7', points: 7, suit: 'spades'},
  {name: '8', points: 8, suit: 'spades'},
  {name: '9', points: 9, suit: 'spades'},
  {name: '10', points: 10, suit: 'spades'},
  {name: 'jack', points: 10, suit: 'spades'},
  {name: 'queen', points: 10, suit: 'spades'},
  {name: 'king', points: 10, suit: 'spades'},
  ];

  return d;
};

function shuffleDeck(deck) {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    };
    return deck;
};

function calculatePoints(hand) {
  var handPoints = 0;
  for (var i=0; i < hand.length; i++) {
    handPoints = handPoints + hand[i]['points'];
  };
  return handPoints;
};
function buttonDisable() {
  $('#hit-button').prop('disabled', true);
  $('#stand-button').prop('disabled', true);
  $('#start-button').prop('disabled', false);
};
function bustCheck(hand, who) {
  if (calculatePoints(hand) > 21) {
    if (who == 'Dealer') {
      $('#messages').html('<h2>Dealer went bust.</h2></br><h2>You won!</h2>');
      buttonDisable();
    }
    else if (who == 'Player') {
      $('#messages').html('<h2>You went bust.</h2></br><h2>Dealer won!</h2>');
      buttonDisable();
    };
  };
};

function winnerCheck() {
  if (calculatePoints(dealerhand) > calculatePoints(playerhand) && calculatePoints(dealerhand) <= 21) {
    $('#messages').html('<h2>Dealer won!</h2>');
    buttonDisable();
  }
  else if (calculatePoints(dealerhand) < calculatePoints(playerhand) && calculatePoints(playerhand) <= 21) {
    $('#messages').html('<h2>You won!</h2>');
    buttonDisable();
  }
  else if (calculatePoints(dealerhand) == calculatePoints(playerhand)) {
    $('#messages').html('<h2>Push</h2>');
    buttonDisable();
  };
};

$('#start-button').click(function () {
  deck = generate_deck();
  shuffleDeck(deck);
  dealerhand = [];
  playerhand = [];
  $('#dealer-hand').empty();
  $('#player-hand').empty();
  $('#messages').empty();
  $('#dealer-points').empty();
  $('#player-points').empty();
  $('#deal-button').prop('disabled', false);
  $(this).prop('disabled', true);
});

$('#deal-button').click(function () {
    for (var i = 0; i < 2; i++) {
      $('#dealer-hand').append("<img src='images/"+deck[i]['name']+"_of_"+deck[i]['suit']+".png'>");
      dealerhand.push(deck[i]);
      deck.splice(i,1);
      $('#dealer-points').text(calculatePoints(dealerhand));
      bustCheck(dealerhand, 'Dealer');
    };
    for (var i = 0; i < 2; i++) {
      $('#player-hand').append("<img src='images/"+deck[i]['name']+"_of_"+deck[i]['suit']+".png'>");
      playerhand.push(deck[i]);
      deck.splice(i,1);
      $('#player-points').text(calculatePoints(playerhand));
      bustCheck(playerhand, 'Player');
    };
    $('#deal-button').prop('disabled', true);
    $('#hit-button').prop('disabled', false);
    $('#stand-button').prop('disabled', false);
});

$('#hit-button').click(function () {
  for (var i = 0; i < 1; i++) {
    $('#player-hand').append("<img src='images/"+deck[i]['name']+"_of_"+deck[i]['suit']+".png'>");
    playerhand.push(deck[i]);
    deck.splice(i,1);
    $('#player-points').text(calculatePoints(playerhand));
    bustCheck(playerhand, 'Player');

  };
});

$('#stand-button').click(function () {
  $('#hit-button').prop('disabled', true);
  $('#stand-button').prop('disabled', true);
  while (calculatePoints(dealerhand) < 18) {
    for (var i = 0; i < 1; i++) {
      $('#dealer-hand').append("<img src='images/"+deck[i]['name']+"_of_"+deck[i]['suit']+".png'>");
      dealerhand.push(deck[i]);
      deck.splice(i,1);
      $('#dealer-points').text(calculatePoints(dealerhand));
      bustCheck(dealerhand, 'Dealer');
      winnerCheck();
    };
  };
});
