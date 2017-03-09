// This is a sample JS for the golf score card

var numplayers = 5;

function runcode() {
    for(var p = 1; p <= numplayers; p++ ){
        collectholes(p);
    }
}

function collectholes(player){
    var golfcourse = "";
    for(var h = 1; h <= 18; h++){
        var hole = "<div id='player" + player +"hole" + h +"' class='col-xs-6 backgroundDisplay'>hole display</div>";
        golfcourse += hole;
        //console.log(golfcourse);
    }
    $("#scorecard").append(golfcourse);
}


