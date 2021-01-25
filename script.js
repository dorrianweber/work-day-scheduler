var saveBtn = $(".saveBtn");
var now = moment().format("dddd, MMMM Do YYYY");
var currentTime = moment().format("LT");

console.log(currentTime.split(":")[0]);

var timeblocks = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];

for (var i = 0; i < timeblocks.length; i++) {
    var eventText = localStorage.getItem(timeblocks[i]);

    if (eventText !== null) {
        var idLocator = timeblocks[i].split(" ")[0];
        
        $(`#${idLocator}`).empty();
        $(`#${idLocator}`).html(eventText);
    }
    
    // if (parseInt(idLocator) >= 9 && <= 12)
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