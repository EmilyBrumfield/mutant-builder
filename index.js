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

  //Power costs are a little different. There's no constant multiplier because they can have different costs per rank.
  //Instead, the costs are a multiplier.
  
  var powerCost = 0; //powerCost is the total cost of the powers; starts at zero
  
  powerCost += (parseInt(document.getElementById("armor").innerHTML, 10)) * 1;
  powerCost += (parseInt(document.getElementById("blast").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("blending").innerHTML, 10)) * 1;
  powerCost += (parseInt(document.getElementById("clinging").innerHTML, 10)) * 1;
  powerCost += (parseInt(document.getElementById("corrosion").innerHTML, 10)) * 1;
  powerCost += (parseInt(document.getElementById("datalink").innerHTML, 10)) * 1;
  powerCost += (parseInt(document.getElementById("dazzle").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("density").innerHTML, 10)) * 3;
  powerCost += (parseInt(document.getElementById("disintegration").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("elementControl").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("energyControl").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("energyField").innerHTML, 10)) * 4;
  powerCost += (parseInt(document.getElementById("esp").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("fatigue").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("flight").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("growth").innerHTML, 10)) * 3; 
  powerCost += (parseInt(document.getElementById("healing").innerHTML, 10)) * 3;
  powerCost += (parseInt(document.getElementById("illusion").innerHTML, 10)) * 2; 
  powerCost += (parseInt(document.getElementById("immovability").innerHTML, 10)) * 1; 
  powerCost += (parseInt(document.getElementById("incorporeal").innerHTML, 10)) * 2; 
  powerCost += (parseInt(document.getElementById("invisibility").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("leaping").innerHTML, 10)) * 1;
  powerCost += (parseInt(document.getElementById("luck").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("mindBlast").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("mindControl").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("morph").innerHTML, 10)) * 1;
  powerCost += (parseInt(document.getElementById("neutralize").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("obscure").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("paralysis").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("plantControl").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("regeneration").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("shrinking").innerHTML, 10)) * 3;
  powerCost += (parseInt(document.getElementById("slick").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("slow").innerHTML, 10)) * 1;
  powerCost += (parseInt(document.getElementById("snare").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("speed").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("swimming").innerHTML, 10)) * 1;
  powerCost += (parseInt(document.getElementById("telekinesis").innerHTML, 10)) * 1;
  powerCost += (parseInt(document.getElementById("telepathy").innerHTML, 10)) * 2;
  powerCost += (parseInt(document.getElementById("teleport").innerHTML, 10)) * 3;
  powerCost += (parseInt(document.getElementById("weatherControl").innerHTML, 10)) * 2;

  
  

  document.getElementById("power-cost").innerHTML = powerCost; // updates power cost display; can be a fraction

  var totalCost = 0; //totalCost is total cost of all the traits; starts at zero
  totalCost += parseInt(document.getElementById("attribute-cost").innerHTML, 10); //adds Attribute's cost to totalCost
  totalCost += parseInt(document.getElementById("combat-cost").innerHTML, 10); //see above
  totalCost += parseInt(document.getElementById("skill-cost").innerHTML, 10); //see above
  document.getElementById("total-cost").innerHTML = totalCost; // calculates total cost, updates display; fractions are rounded down

}