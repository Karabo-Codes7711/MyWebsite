// Task 1: When the page loads, display a popup alert to welcome the user to the amusement park website
$(document).ready(function(){
    alert("Welcome to the amusement park website!");

//Task 10: When the page loads, change the font type and size of all paragraph elements using jQuery. Do not use an ID or class to select the elements.
    $("p").css({
    "font-family" : "Verdana",
    "font-size" : "20px"
});

//calling the newHeading() so that a new Heading can be visible
        newHeading();
});

//Task 2: When the user clicks on any ride card, display the background colour of that specific card in an alert. 
$(".ride-card").click(function(){
    let color = $(this).css("background-color");
    alert(color);
});

// Task 3: Show/Hide the Rides section when the 'Toggle Rides' button is clicked
$("#toggleRides").click(function(){
    $("#rides").toggle();
});

//Task 4: When the user double clicks on any game in the list, add another game to the list, with the same formatting. 
$("li").dblclick(function(){
    $(this).after("<li>New Game</li>");
});

// Task 5: When the 'Highlight Attractions' button is clicked, apply or remove the following formatting to all the ride cards
// formatting: 3px solid #ff6f61 border all around. 
//Each click should toggle the formatting on and off 
$("#highlight").click(function(){
    $(".ride-card").toggleClass("highlight");
});

//Task 6: The 'Fade Out Page' button should make the entire page fade out and then fade back in automatically
 $("#fadeOut").click(function(){
     $("body").fadeOut(3000).fadeIn(4000);
 });

// $("#fadeOut").click(function(){
//     $("body").fadeTo(4000,0.1);
// });

//Task 7: When a user clicks on any ride card, apply a short animation effect to that specific card. 
$(".ride-card").click(function(){
    $(this).animate({width : "70%", opacity : 0.2}, 1500).animate({width : "90%",opacity : 1},1500);
});

//Task 8: When the user hovers over a ride card, temporarily change its background colour. When the mouse leaves, return it to the original colour
$(".ride-card").hover(function(){
    $(this).css("background-color", "#ff6f61");
},
function(){
   $(this).css("background-color", "");
}
);

//Task 9: Clicking the 'BUY Tickets' heading, should replace the heading text with a new message e.g. "Tickets sold out!"
$("#tickets h2").click(function(){
    $(this).text("Tickets sold out!");
});


//Task 11: Create your own new function + add a description of what the function does here

function newHeading(){
    $("h1").text("WELCOME TO THE AMUSEMENT PARK!"); //Changing the old heading into new interisting heading.
}
//Task 12: Create your own new function + add a description of what the function does here
function changeBackground(){
    $("#total").css("color", "#ff6f61"); //Changing the color of the text inside p with id = "total" to a new color
}

$("#calculate").click(function(){
    changeBackground();  //changing the colour after the calculate button has been pressed.
});

//Challenge 1: Write a function that adds logical and appropriate functionality to the 'Shuffle Games' button
function shuffleGames(){
    let items = $("ul li"); //get all the items from html(games)

    items.sort(function(){    //use sort event
        return 0.5 - Math.random();    //using a random sorting from Math.random
    });

    $("ul").html(items);
}

$("#shuffleGames").click(function(){
    shuffleGames();
});

//Challenge 2: Write a function that adds logical and appropriate functionality to the 'Calculate Total' button
$("#calculate").click(function() {
            let name = $("#name").val();
            let price = $("#ticketType").val();
            let quantity = $("#quantity").val();

            let total = price * quantity;
            let discount = total * 0.1;
            let finalAmount = total - discount;

            if(quantity > 3){
            document.getElementById("total").innerHTML = "Hello " + name + ", the total amount for " + quantity + " ticket(s) is R" + total + "  with a discount of R" + discount + " leading to a final amount due of R" + finalAmount + " .";
            }
            else
            {
            document.getElementById("total").innerHTML = "Hello " + name + ", the total amount for " + quantity + " ticket(s) is R" + total + ".";
            }
            
});

document.getElementById("name").oninput = function() {
    let email = this.value;
    if(email.includes("@") && email.includes(".")) {
        this.style.borderColor = "green";
    } else 
    {
        this.style.borderColor = "red";
    }
};