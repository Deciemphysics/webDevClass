// I need to place a marker, randomly
// So divs with pngs
// Like 3?
// One function would do it.
var screenwidth = 1920;
var screenheight = 1080;
var somenumber = 42;
function mapMarker(height, width){
    for (var i = 0; i < somenumber; i++) {
        var randomX = Math.floor(Math.random() * width);
        var randomY = Math.ceil(Math.random() * height) - 1;
        document.getElementById("container").innerHTML += '<img src="images/33622.png" style="position: absolute; top: ' + randomY + 'px; left: ' + randomX + 'px; width: 20px; height 20px;"/>'
    }
}