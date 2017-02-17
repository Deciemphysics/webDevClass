/**
 * Created by ronaldmarx on 2/17/17.
 */
// function display(msg) {
//     var i = 0;
//     for (var i = 0; i < 3;) {
//         console.log(msg + ' ' + i);
//         i = i + 1;
//     }
// }
// display('text');
var loadedDiv = document.getElementById('loaded');
loadedDiv.onclick = function () {
    loadedDiv.innerText = 'Shouldn\'t have done that';
    loadedDiv.style.color = 'red';

};
loadedDiv.style.cursor = 'pointer';