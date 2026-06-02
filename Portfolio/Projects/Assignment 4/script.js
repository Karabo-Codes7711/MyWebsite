function CalcQuote(){
    //Getting the values from the user by their Id's
    //Can use let or var to store 
    var name = document.getElementById("Tname").value;
    var travellers = parseInt(document.getElementById("numberT").value);
    var era = document.getElementById("era").value;
    var days = parseInt(document.getElementById("Dlength").value);

    //get the value from the user on the radio button that is checked
    //Use the for loop to find the checked button
    let machine = "";  //creating an instance to store the checked radio button
    let machines = document.getElementsByName("machine");  //getting the all the machine names from the form

    for(let i = 0; i < machines.length ; i++){
        if(machines[i].checked){
            machine = machines[i].value;
        } //if the radiobutton at this specific machine is cheked then we store it in the created instance called machines.
    }

    //Now we are getting the checkbox inputs based on what is cheked.
    let count = 0;
    let insurances = document.getElementsByName("insurance");   //getting all of the checkboxes

    //for loop to get all the checked boxes
    for(let i = 0; i < insurances.length; i++){
        if(insurances[i].checked){
            count++;
        } //checking if the checkbox at this current iteration is checked
        //if yes, then increase the count by 1.
        //then now we know how many checkboxes were selected by the user
    }

    //Given Prices, We create an objects that has all the prices for the machine
    //Prices from the era drop down menu
    let DestinationPrices = {
        "Ancient Egypt" : 420,
        "Golden Age Piracy" :380,
        "Wild West" : 310,
        "Roaring" : 350,
        "Cyberpunk" : 560,
        "Martian" : 780
    };

    //Prices for radiobutton based on which one is selected
    let machinePrices = {
        "DoLorean": 140,
        "steampunk": 190,
        "quantum": 260
    };

    
    //Calculate Destination cost
    let DestinationCost = DestinationPrices[era] * travellers * days;

    //get the time-Cost machine from the radio button
    let TimeCostmachine = machinePrices[machine];

     //R75 is price per box selected/ticked
    let insuranceCostTemporal = count * 75; 

    let totalCost = DestinationCost + TimeCostmachine + insuranceCostTemporal;

    //The OUTPUUT!!!
    document.getElementById("output").innerHTML = "Hello " + name + ", your trip to " + era + " for " + travellers + " traveller(s) over " + days + " days will cost: R" + totalCost;

}