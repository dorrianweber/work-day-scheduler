var saveBtn = $(".saveBtn");
var now = moment().format("dddd, MMMM Do YYYY");

var timeblocks = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];

for (var i = 0; i < timeblocks.length; i++) {
    var eventText = localStorage.getItem(timeblocks[i]);

    console.log(eventText);

    if (eventText !== null) {
        var idLocator = timeblocks[i].split(" ")[0];
        console.log(idLocator);
        
        $(`#${idLocator}`).empty();
        $(`#${idLocator}`).html(eventText);
    }
    
}

console.log(now);

$("#currentDay").text(now);

// Event listener for save buttons
saveBtn.click(function(){
    var textAreaContent = $(this).prev().val()
    var time = $(this).data("time");

    console.log(textAreaContent);
    console.log(time);
    localStorage.setItem(time, textAreaContent);


});