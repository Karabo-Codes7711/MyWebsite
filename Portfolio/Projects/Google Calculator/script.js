let equation = "";
//update the interface
function updateInterface(string){
    var screen = document.getElementById("screen");
    screen.innerHTML = string;
}

//input
function input(string){
    equation = equation + string;
    updateInterface(equation);
}

//reset the equation and clear the screen
function ac() {
    equation = "";
    updateInterface(equation);
}

function evaluateEquation(){
    try{
        equation = eval(equation).toString();
    }catch (e){
        equation = "Error"
    }
    updateInterface(equation);
    
}

