// Date and time function

function updateTime(){
    $("#currentDay").html(moment().format("dddd, MMMM Do") + "<br><br>" + moment().format("LT"));
};setInterval(updateTime,1000);

updateTime();

// saveBtn.addEventListener("click", savePlanner)

// function savePlanner(){
// console.log("save")

// }



// for (let i = 0; i <= 9; i++) {
//     var value = localStorage.getItem(i)
//     $("#eventInput-" + i).val(value)
//     if (i < time) {
//         $("#eventInput-" + i).addClass()
//     }
//     }
//     else {
//         $("#eventInput-" + i).addClass()
//     }
// }


// var saver = $(this).attr("data-time-btn");
    // var saveBtn = $(".description").attr("data-time-text");


// storage for the planner
// $("#1").children("input").val(localStorage.getItem("8am"));

// $("#2").children("input").val(localStorage.getItem("9am"));

// $("#3").children("input").val(localStorage.getItem("10am"));

// $("#4").children("input").val(localStorage.getItem("11am"));

// $("#5").children("input").val(localStorage.getItem("12pm"));

// $("#6").children("input").val(localStorage.getItem("1pm"));

// $("#7").children("input").val(localStorage.getItem("2pm"));

// $("#8").children("input").val(localStorage.getItem("3pm"));

// $("#9").children("input").val(localStorage.getItem("4pm"));

// $("#10").children("input").val(localStorage.getItem("5pm"));
