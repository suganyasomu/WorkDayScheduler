$(document).ready(function () {
  //Create array to store the id's for buttons
  //   var btnName = [
  //     "btn1",
  //     "btn2",
  //     "btn3",
  //     "btn4",
  //     "btn5",
  //     "btn6",
  //     "btn7",
  //     "btn8",
  //     "btn9",
  //   ];

  //Assign and set each of the values from array to button id's

  //   for (var i = 0; i < buttons.length; i++) {
  //     buttons[i] = buttons.attr("id", btnName[i]);
  //     console.log(buttons[i]);
  //   }

  //Current day and date will be displayed at the top of the calendar
  var currentDay = moment().format("dddd");
  console.log(currentDay);
  var currentDate = moment().format("MMM Do");
  console.log(currentDate);
  $("#currentDay").text(currentDay + ", " + currentDate);

  var currentTime = moment().format("H");
  console.log(currentTime);
  var time = $(".hour");

  var buttons = $("button");

  //This function is called when the user click on the save button
  function save(event) {
    var buttonId = event.target.id;
    var eventDesc = $("#" + buttonId)
      .prev()
      .val();
    var eventText = $("#" + buttonId)
      .prev()
      .text(eventDesc)
      .val();
    console.log(eventText);
    localStorage.setItem(buttonId, eventText);
    var localValue = localStorage.getItem(buttonId);
    console.log(localValue);
    console.log(
      $("#" + buttonId)
      .prev()
      .text(localValue)
    );
  }

  //Step 1: Executes when the page is loaded
  function load() {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      $("#" + key)
        .prev()
        .text(value);
    }

    //get the current time
    colorCode();
  }

  function colorCode() {
    for (var j = 0; j < time.length; j++) {
      var hrsFormat = moment($.trim(time[j].innerHTML), ["h A"]).format("HH");
      if (hrsFormat === currentTime) {
        console.log(hrsFormat);
        console.log(currentTime);
        $(time[j]).next().css("background-color", "red");
      }
      if (hrsFormat > currentTime) {
        console.log(hrsFormat);
        console.log(currentTime);
        $(time[j]).next().css("background-color", "green");
      }

      if (hrsFormat < currentTime) {
        console.log(hrsFormat);
        console.log(currentTime);
        $(time[j]).next().css("background-color", "grey");
      }

      // if ($.trim(time[j].innerHTML) < currentTime) {
      //   console.log($.trim(time[j].innerHTML));
      //   console.log(currentTime);
      //   // var data = moment().endOf("day").fromNow();
      //   // console.log(data);
      //   $(time[j]).next().css("background-color", "yellow");
      // }

      // if ($.trim(time[j].innerHTML) > currentTime) {
      //   $(time[j]).next().css("background-color", "green");
      // }
    }
  }

  //Add Event Listeners for each button
  $(buttons).on("click", save);

  load();
});