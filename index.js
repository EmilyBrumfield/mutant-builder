//Character creation assistant for my houseruled version of a supers role-playing game (M&M 3E)

function attribute(statId) {  //statId should be the HTML element id for one of the Input Number elements at the top of the page
  var attributeCost = 3; //constant; character point cost per attribute rank
 
  var statValue = document.getElementById(statId).value; //gets value of the stat from the relevant HTML element
  var statCost = statValue * attributeCost; //calculates the total cost of the stat in character points

  updateCost(statId + "-cost", statCost); //calls the updateCost function to adjust the matching cost rating

}

function updateCost(costId, statCost) { //costId should be the HTML element id for one of the P elements at the bottom of the page
  document.getElementById(costId).innerHTML = statCost; //updates the cost display 
}