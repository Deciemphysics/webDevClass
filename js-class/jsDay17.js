// BROWSER STORAGE
// cookies are oldschools
// document.cookie = "username=John Does; expires=Thu, 18 Dec 2013 12:00:00 UTC";  // Key values Pairs!!!
// var x = document.cookie;

// So how do we store info?
// Local and session storage.
window.localStorage // Stores data forever
window.sessionStorage // stores data for one sessions ( data is lost after tab is closed )
/*
localStorage.colorSetting = '#a4509b';
localStorage['colorSetting'] = '#a4509b';
localStorage.setItem('colorSetting','#a4509b');

// These all do the same thing, however there are pitfalls to this.

// key vales are setItem, getItem, removeItem, key, length

// You can set an event listener for when storage is modified. This is like a promise.

// We can use storage for golf data, put score data inside localStorage.
*/
if(!db.get('cart')){
    db.save('cart',[]);
}


document.getElementById('add').onclick = function(){
    var candyName = document.getElementById('candyName').value;
    var candy = {name: candyName};
    var cart = db.get('cart');
    cart.push(candy);
    db.update('cart', cart);
    displayCart();
};
document.getElementById('del').onclick = function(){
    // var candyName = document.getElementById('candyName').value;
    // var candy = {name: candyName};
    var checkedValue = document.querySelector('.messageCheckbox:checked').value;
    var cart = db.get('cart');
    for (var i = 0; i < cart.length; i++) {
        var obj = cart[i];
        if (obj.name == checkedValue){
            cart.splice(i,1);
        }
    }
    db.update('cart', cart);
    displayCart();
};
function displayCart(){
    var cart = db.get('cart');
    document.getElementById('cart').innerHTML = '';
    if(cart.length){
        var candyList = '';
        cart.forEach(function(candy){
            candyList = candyList + '<li>' + candy.name + '<input type="checkbox" name="candy" value="'+candy.name+'" class="messageCheckbox" /> </li>';
        });
        document.getElementById('cart').innerHTML = candyList;
    }

}