var saveBtn = $(".saveBtn");
var now = moment().format("dddd, MMMM Do YYYY");
var currentTime = moment().format("LT");
var currentHour = currentTime.split(":")[0];

var timeblocks = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];

for (var i = 0; i < timeblocks.length; i++) {
    var eventText = localStorage.getItem(timeblocks[i]);
    var currentTime24 = parseInt(moment().format("k"));

    if (eventText !== null) {
        var idLocator = timeblocks[i].split(" ")[0];
        
        $(`#${idLocator}`).empty();
        $(`#${idLocator}`).html(eventText);
    }

    if (parseInt(timeblocks[i].split(" ")[0]) < 9 ) {
        var timestamp = parseInt(timeblocks[i].split(" ")[0]) + 12;
    }

    else {
        timestamp = parseInt(timeblocks[i].split(" ")[0]);
    }

    // Is the time that the current block represents chronologically later than the current time?
    console.log(moment(timestamp).isAfter(currentTime24));

    if (moment(timestamp).isAfter(currentTime24)){
        $("#" + timeblocks[i].split(" ")[0]).addClass("future");
    }

    else if (moment(timestamp).isSame(currentTime24)) {
        $("#" + timeblocks[i].split(" ")[0]).addClass("present");
    }

    else {
        $("#" + timeblocks[i].split(" ")[0]).addClass("past");
    }
}

$("#currentDay").text(now);
$("#currentDay").append($("<div>").text(moment().format("h:mm a")));

// Event listener for save buttons
saveBtn.click(function(){
    var textAreaContent = $(this).prev().val()
    var time = $(this).data("time");

    console.log(textAreaContent);
    console.log(time);
    localStorage.setItem(time, textAreaContent);


});