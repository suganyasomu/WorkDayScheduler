$(document).ready(function () {

    //Create array to store the id's for buttons
    var btnName = ["btn1", "btn2", "btn3", "btn4", "btn5", "btn6", "btn7", "btn8", "btn9"];

    //Assign and set each of the values from array to button id's
    var buttons = $(".btn");
    var increment = 0;
    for (var i = 0; i < btnName.length; i++) {
        buttons[increment] = buttons.attr("id", btnName[i]);
        increment++;
    }

    //Add functions 
    function save(event) {
        var getBtnId = event.target.id;
        // var getId=$()
        console.log("hello");
    }
    //Add Event Listeners for each button 
    $(".btn").on("click", save);
})