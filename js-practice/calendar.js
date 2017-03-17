var numbdays = 31;
var numbweeks = Math.ceil(numbdays/7)
function makeWeek(){

    for (var i = 1; i <= numbweeks; i++) {
        $("#calendarcontainer").append("<div class='weekbox' id='week"+i+"'></div>");
    }
    makeDays();
}

function makeDays(){
    for (var i = 1; i <= numbweeks; i++){
        for (var j = 1; j <= 7; j++){
            var day = (i - 1) * 7 + j;
            if (day <= numbdays){
                $("#week"+ i).append("<div class='daybox' id='week" + i + "day" + j + "'>"+ day + "</div>");
            }
        }
    }
}

// So we have weeks and days we know that