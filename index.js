//Character creation assistant for my houseruled version of a supers role-playing game (M&M 3E)
//Commenting extensively and using clear variable names because I don't like reading under-commented code with unnecessarily abbreviated variable names
//Currently a glorified spreadsheet, but will eventually have more advanced functionality


/*Most of these functions are nearly identical, but I'm keeping them separate because there's a good chance they'll become different
as I add new features*/

//======================ADJUST AN ATTRIBUTE=============
function attribute(statId, amount) {  
    /*statId should be the HTML element id for one of the table cells
      amount should be the amount to increment the trait by*/
 
 
  var statValue = parseInt(document.getElementById(statId).innerHTML, 10); //gets value of the stat from the relevant HTML element, converts to integer
  statValue += parseInt(amount, 10); //adjusts the stat by the appropriate amount, ensures integers are being used
  document.getElementById(statId).innerHTML = statValue; //updates the stat rating on the table

  
  updateCost(); //calls the updateCost function to adjust the point costs

}

//======================ADJUST A SKILL=============
function skill(statId, amount) {  
    /*statId should be the HTML element id for one of the table cells
      amount should be the amount to increment the trait by*/
 
 
  var statValue = parseInt(document.getElementById(statId).innerHTML, 10); //gets value of the stat from the relevant HTML element, converts to integer
  statValue += parseInt(amount, 10); //adjusts the stat by the appropriate amount, ensures integers are being used
  document.getElementById(statId).innerHTML = statValue; //updates the stat rating on the table

  
  updateCost(); //calls the updateCost function to adjust the point costs

}

//======================ADJUST A COMBAT TRAIT=============
function combat(statId, amount) {  
    /*statId should be the HTML element id for one of the table cells
      amount should be the amount to increment the trait by*/
 
 
  var statValue = parseInt(document.getElementById(statId).innerHTML, 10); //gets value of the stat from the relevant HTML element, converts to integer
  statValue += parseInt(amount, 10); //adjusts the stat by the appropriate amount, ensures integers are being used
  document.getElementById(statId).innerHTML = statValue; //updates the stat rating on the table

  
  updateCost(); //calls the updateCost function to adjust the point costs

}

//======================ADJUST A POWER=============
function power(statId, amount) {  
    /*statId should be the HTML element id for one of the table cells
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
  attributeRanks += parseInt(document.getElementById("might").innerHTML, 10); //adds Might's ranks to attributeRanks
  attributeRanks += parseInt(document.getElementById("finesse").innerHTML, 10); //see above
  attributeRanks += parseInt(document.getElementById("mind").innerHTML, 10); //see above
  attributeRanks += parseInt(document.getElementById("soul").innerHTML, 10); //see above
  
  document.getElementById("attribute-cost").innerHTML = attributeCost * attributeRanks; // calculates attribute cost, updates display


  var combatCost = 1; //constant; character point cost per combat rank
  //Important Note: Attributes provide discounts to combat costs.
  //For simplicity, we just apply all attributes to the lump cost rather than distinguish which attribute discounts which combat traits
  //Might provides 3 points of discount, Finesse provides 2 points, and Soul provides 1 point
    
  var combatRanks = 0; //skillRanks is the total number of combat ranks; starts at zero
  combatRanks += parseInt(document.getElementById("attack").innerHTML, 10); //adds Attack's ranks to combatRanks
  combatRanks += parseInt(document.getElementById("defense").innerHTML, 10); //see above
  combatRanks += parseInt(document.getElementById("damage").innerHTML, 10); //see above
  combatRanks += parseInt(document.getElementById("toughness").innerHTML, 10); //see above
  combatRanks += parseInt(document.getElementById("fortitude").innerHTML, 10); //see above
  combatRanks += parseInt(document.getElementById("will").innerHTML, 10); //see above
  //Discounts for attributes are applied here
  //Might and Finesse are repeated to make it more clear what's going on, rather than multiplied by two
  combatRanks -= parseInt(document.getElementById("might").innerHTML, 10); //Discount to Damage for Might
  combatRanks -= parseInt(document.getElementById("might").innerHTML, 10); //Discount to Toughness for Might
  combatRanks -= parseInt(document.getElementById("might").innerHTML, 10); //Discount to Fortitude for Might
  combatRanks -= parseInt(document.getElementById("finesse").innerHTML, 10); //Discount to Attack for Finesse
  combatRanks -= parseInt(document.getElementById("finesse").innerHTML, 10); //Discount to Defense for Finesse
  combatRanks -= parseInt(document.getElementById("soul").innerHTML, 10); //Discount to Will for Soul
  
  document.getElementById("combat-cost").innerHTML = combatCost * combatRanks; // calculates skill cost, updates display; can be a fraction
  

  var skillCost = 0.5; //constant; character point cost per skill rank
  
  var skillRanks = 0; //skillRanks is the total number of skill ranks; starts at zero
  skillRanks += parseInt(document.getElementById("acrobatics").innerHTML, 10); //adds Acrobatics's ranks to skillRanks
  skillRanks += parseInt(document.getElementById("athletics").innerHTML, 10); //see above
  skillRanks += parseInt(document.getElementById("deception").innerHTML, 10); //see above
  skillRanks += parseInt(document.getElementById("insight").innerHTML, 10); //see above
  skillRanks += parseInt(document.getElementById("intimidation").innerHTML, 10); //see above
  skillRanks += parseInt(document.getElementById("investigation").innerHTML, 10); //see above
  skillRanks += parseInt(document.getElementById("perception").innerHTML, 10); //see above
  skillRanks += parseInt(document.getElementById("persuasion").innerHTML, 10); //see above
  skillRanks += parseInt(document.getElementById("sleight").innerHTML, 10); //see above
  skillRanks += parseInt(document.getElementById("stealth").innerHTML, 10); //see above
  skillRanks += parseInt(document.getElementById("technology").innerHTML, 10); //see above
  skillRanks += parseInt(document.getElementById("treatment").innerHTML, 10); //see above
  skillRanks += parseInt(document.getElementById("vehicles").innerHTML, 10); //see above
  skillRanks += parseInt(document.getElementById("custom1").innerHTML, 10); //see above
  skillRanks += parseInt(document.getElementById("custom2").innerHTML, 10); //see above
  skillRanks += parseInt(document.getElementById("custom3").innerHTML, 10); //see above

  document.getElementById("skill-cost").innerHTML = skillCost * skillRanks; // calculates skill cost, updates display; can be a fraction

  //Power costs are a little different. There's no constant multiplier because the input categories just track points directly.
  
  var powerCost = 0; //powerCost is the total cost of the powers; starts at zero
  
  powerCost += parseInt(document.getElementById("offensive").innerHTML, 10);
  powerCost += parseInt(document.getElementById("defensive").innerHTML, 10);
  powerCost += parseInt(document.getElementById("mobility").innerHTML, 10);
  powerCost += parseInt(document.getElementById("other").innerHTML, 10);
  
  document.getElementById("power-cost").innerHTML = powerCost; // updates power cost display; can be a fraction

  var totalCost = 0; //totalCost is total cost of all the traits; starts at zero
  totalCost += parseInt(document.getElementById("attribute-cost").innerHTML, 10); //adds Attribute's cost to totalCost
  totalCost += parseInt(document.getElementById("combat-cost").innerHTML, 10); //see above
  totalCost += parseInt(document.getElementById("skill-cost").innerHTML, 10); //see above
  totalCost += parseInt(document.getElementById("power-cost").innerHTML, 10); //see above
  document.getElementById("total-cost").innerHTML = totalCost; // calculates total cost, updates display; fractions are rounded down

}

//======================QUICK SETUP=============
function quickSetup(powerLevel) {  
    //powerLevel should be the number to set the combat stats to
  
    document.getElementById("attack").innerHTML = powerLevel;
    document.getElementById("defense").innerHTML = powerLevel;
    document.getElementById("damage").innerHTML = powerLevel;
    document.getElementById("toughness").innerHTML = powerLevel;
    document.getElementById("fortitude").innerHTML = powerLevel;
    document.getElementById("will").innerHTML = powerLevel;

  
  updateCost(); //calls the updateCost function to adjust the point costs

}

//======================CLEAR ALL=============
function clearAll() {  
    //powerLevel should be the number to set the combat stats to
  
    document.getElementById("might").innerHTML = 0;
    document.getElementById("finesse").innerHTML = 0;
    document.getElementById("mind").innerHTML = 0;
    document.getElementById("soul").innerHTML =
    document.getElementById("attack").innerHTML = 0;
    document.getElementById("defense").innerHTML = 0;
    document.getElementById("damage").innerHTML = 0;
    document.getElementById("toughness").innerHTML = 0;
    document.getElementById("fortitude").innerHTML = 0;
    document.getElementById("will").innerHTML = 0;
    document.getElementById("acrobatics").innerHTML = 0;
    document.getElementById("athletics").innerHTML = 0;
    document.getElementById("deception").innerHTML = 0;
    document.getElementById("insight").innerHTML = 0;
    document.getElementById("intimidation").innerHTML = 0;
    document.getElementById("investigation").innerHTML = 0;
    document.getElementById("perception").innerHTML = 0;
    document.getElementById("persuasion").innerHTML = 0;
    document.getElementById("sleight").innerHTML = 0;
    document.getElementById("stealth").innerHTML = 0;
    document.getElementById("technology").innerHTML = 0;
    document.getElementById("treatment").innerHTML = 0;
    document.getElementById("vehicles").innerHTML = 0;
    document.getElementById("custom1").innerHTML = 0;
    document.getElementById("custom2").innerHTML = 0;
    document.getElementById("custom3").innerHTML = 0;
    document.getElementById("offensive").innerHTML = 0;
    document.getElementById("defensive").innerHTML = 0;
    document.getElementById("mobility").innerHTML = 0;
    document.getElementById("other").innerHTML = 0;


  
  updateCost(); //calls the updateCost function to adjust the point costs

}