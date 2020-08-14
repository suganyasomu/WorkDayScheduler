$(document).ready(function () {

  //Current day and date will be displayed using moment at the top of the calendar
  var currentDay = moment().format("dddd");
  var currentDate = moment().format("MMM Do");

  $("#currentDay").text(currentDay + ", " + currentDate);

  var currentTime = moment().format("H");
  var time = $(".hour");

  var buttons = $("button");


  //Step 1: When the page is loaded , already created event should be displayed on the respective textarea.
  function load() {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key);
      $("#" + key)
        .prev()
        .text(value);
    }
    colorCode();
  }

  //Timeblocks should be displayed with different color based on past , present and future
  function colorCode() {
    for (var j = 0; j < time.length; j++) {
      var hrsFormat = moment($.trim(time[j].innerHTML), ["h A"]).format("HH");
      if (hrsFormat === currentTime) {
        $(time[j]).next().css("background-color", "red");
      }
      if (hrsFormat > currentTime) {
        $(time[j]).next().css("background-color", "green");
      }

      if (hrsFormat < currentTime) {
        $(time[j]).next().css("background-color", "grey");
      }
    }
  }

  //This function is called when the user click on the save button and the event should be saved on the local storage
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
  //Add Event Listeners for each button
  $(buttons).on("click", save);

  load();
});