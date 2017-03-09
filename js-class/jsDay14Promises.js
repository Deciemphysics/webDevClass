// Now to discuss issues that can occur with callbacks and callback messiness

var p1 = new Promise(
    function(resolve,reject){
        log.insertAdjacentHTML('beforeend',thisPromiseCount +
        ') Promise started (<small>async code started</small>)<br/>');
        window.setTimeout(
            function(){
                resolve(thisPromiseCount);
            }, Math.random() * 2000 + 1000
        );
    }
);

var p2 = new Promise(executor);
function executor(resolve,reject){
    window.setTimeout(
        function(){
            resolve({data:'resolved', status: 200});
        }, Math.random() * 2000 + 1000
    );
}
function displayResponse(response){
    document.getElementById('p1').innerHTML = response.data;
}
p2.then(displayResponse);

