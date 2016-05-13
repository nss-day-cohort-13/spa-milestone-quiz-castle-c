var CarLot = (function(json) {
  var inventory = [];


    json.getInventory = function () { //returns  populated inventory array so it can be accessed in other iifes
      return inventory;
    },

      // passes populate page into loadInventory function
    json.loadInventory = function (populatePage) {
      var inventoryLoader = new XMLHttpRequest();

      // on load adds event listener and parses JSON. than passes into to the inventory variable, which is an array.

      inventoryLoader.addEventListener("load", function(){
        inventory = JSON.parse(this.responseText); //passes parsed JSON into inventory variable, which is an array.
        populatePage(inventory); // passes populatePage function value of inventory

      })

       inventoryLoader.open("GET", "inventory.json"); //grabs JSON file
        inventoryLoader.send();
       }

   return json //returns data

})(CarLot || {});
