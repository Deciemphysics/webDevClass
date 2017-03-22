var teamshowing = false;

function showteam(){
    if(!teamshowing){
        $(".list").slideDown(1000, function(){
            $(".glyphicon").removeClass("glyphicon-menu-right");
            $(".glyphicon").addClass("glyphicon-menu-down");
        });
        teamshowing = true;
    }
    else{
        $(".list").slideUp(1000, function(){
            $(".glyphicon").addClass("glyphicon-menu-right");
            $(".glyphicon").removeClass("glyphicon-menu-down");
        });
        teamshowing = false;
    }
}