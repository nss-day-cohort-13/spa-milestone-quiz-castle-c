var CarLot = (function(cars) {

 populatePage = function (inventory) {
  // Loop over the inventory and populate the page.
  var cars = inventory.cars;

  for (var i = 0; i < cars.length; i++) {
    var carInfo = cars[i];
    var carDetails = "<ul id ='ulID" + i + "'>" + "<li>" + "make: " + carInfo.make + " " + "<li>" + "model: " +
     carInfo.model + " " + "<li>" + "year: " +  carInfo.year + " " +
      "<li>" +  "color: " +  carInfo.color + " " + "<li>" +  "price: " +
     carInfo.price + " " + "<li>" + "purchased: " +   carInfo.purchased +
      " " + "<li id='changeMe" + i + "'>" + "description: " + carInfo.description + "</ul>";


   var cardz = document.getElementById("cards").innerHTML +=
    '<div class="card-block col-md-4" id="cardDiv' + i + '">' +
    '<h4 class="card-title">' + "Cars" + '</h4>' +
    '<p class="card-text">' + carDetails + '</p>' +
    '<a href="#" class="btn btn-primary">' + "Button" + '</a>' + '</div>';


 }
  CarLot.activateEvents(carDetails) //gives activateEvents access to carDetails
}


CarLot.loadInventory(populatePage);

})(CarLot || {});



