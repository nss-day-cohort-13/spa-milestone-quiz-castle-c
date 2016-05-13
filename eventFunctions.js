
var CarLot = (function(cars) {



  cars.activateEvents = function(carDetails) {
    var changeMi;
    var cards = document.getElementsByClassName("card-block"); //returns each individual card div in an array
    // console.log(cards);
    var textEdit = document.getElementById("editText"); //gets id of textbox

    for (var i = 0; i < cards.length; i++) { //loops through array of card divs

      var cardsLooped = cards[i];

      // console.log("",cardsLooped);

        //onClick event on looped cards
      cardsLooped.addEventListener("click", function(event) {
        // console.log("logEvents",event );
        // adds css styling to cards
        event.currentTarget.classList.toggle("animateClass")
        //grabs description id and makes it so that keydown is available onClick
        changeMi = event.currentTarget.children[2].lastChild
        //focus mouse in text field on click
        textEdit.focus();
        //clears text field on click
        textEdit.value = '';


      })
    }
        //keydown event sets textbox equal to whats being typed
      textEdit.addEventListener("keydown", function(event) {
        changeMi.innerHTML = this.value;

      })
  }


  return cars

})(CarLot || {});










