//Character creation assistant for my houseruled version of a supers role-playing game (M&M 3E)
//Commenting extensively and using clear variable names because I don't like reading under-commented code with unnecessarily abbreviated variable names


//======================ADJUST AN ATTRIBUTE=============
function attribute(statId, amount) {  
    /*statId should be the HTML element id for one of the Input Number elements at the top of the page
      amount should be the amount to increment the trait by*/
 
 
  var statValue = parseInt(document.getElementById(statId).innerHTML, 10); //gets value of the stat from the relevant HTML element, converts to integer
  statValue += parseInt(amount, 10); //adjusts the stat by the appropriate amount, ensures integers are being used
  document.getElementById(statId).innerHTML = statValue; //updates the stat rating on the table

  
  updateCost(); //calls the updateCost function to adjust the point costs

}

//======================UPDATE COST==============
function updateCost() { //tracks costs of ranks
  
  var attributeCost = 3; //constant; character point cost per attribute rank
  
  var attributeRanks = 0; //attributeRanks is the total number of attribute ranks; starts at zero
  attributeRanks += parseInt(document.getElementById("might").innerHTML, 10) //adds Might's ranks to attributeRanks
  attributeRanks += parseInt(document.getElementById("finesse").innerHTML, 10) //see above
  attributeRanks += parseInt(document.getElementById("mind").innerHTML, 10) //see above
  attributeRanks += parseInt(document.getElementById("soul").innerHTML, 10) //see above
  
  document.getElementById("attribute-cost").innerHTML = attributeCost * attributeRanks; // calculates attribute cost, updates display 
}