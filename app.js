/**********
* JavaScript Practice from Pig - Dice Game
*/
var restaurant, currentRestaurant, siteActive;
init();

document.querySelector('.btn-pick').addEventListener('click', function() {
    siteActive = true;
    if(siteActive) {
        // Get random number 1-6 for the restaurant
        var roll;
        var input = document.querySelector('.budget').value;
        var budget = input;
        if(input > 0 && input <= 5) {
            roll = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
        } else if(input > 5 && input <= 12) {
            roll = Math.floor(Math.random() * (3 - 2 + 1)) + 2;
        } else if(input > 12) {
            roll = Math.floor(Math.random() * (5 - 4 + 1)) + 4;
        } else {
            roll = Math.floor(Math.random() * 6);
        }
        // Display the results
        document.getElementById('default-img').style.display = 'block';
        document.getElementById('default-img').src = 'rest-' + roll + '.png';
        // Update the restaurant chosen to match the roll.
        if(roll === 0) {
            document.getElementById('default-img').src = 'rest-1.png';
            document.getElementById('restaurant-title').textContent = 'McDonalds';
            document.getElementById('current-0').textContent = 'https://www.mcdonalds.com/'
        } else if(roll === 1){
            document.getElementById('default-img').src = 'rest-2.png';
            document.getElementById('restaurant-title').textContent = 'Taco Bell';
            document.getElementById('current-0').textContent = 'https://www.tacobell.com/'
        } else if(roll === 2){
            document.getElementById('default-img').src = 'rest-3.png';
            document.getElementById('restaurant-title').textContent = 'Chipotle';
            document.getElementById('current-0').textContent = 'https://www.chipotle.com/'
        } else if(roll === 3){
            document.getElementById('default-img').src = 'rest-4.png';
            document.getElementById('restaurant-title').textContent = 'CAVA';
            document.getElementById('current-0').textContent = 'https://www.cava.com/'
        } else if(roll === 4){
            document.getElementById('default-img').src = 'rest-5.png';
            document.getElementById('restaurant-title').textContent = 'Ramen';
            document.getElementById('current-0').textContent = 'https://www.sakuramen.net/'
        } else {
            document.getElementById('default-img').src = 'rest-6.png';
            document.getElementById('restaurant-title').textContent = 'Korean BBQ';
            document.getElementById('current-0').textContent = 'http://www.sokoreanbbq.com/'
        }
    }
});

// Back to default landing page on click of the reset button
document.querySelector('.btn-reset').addEventListener('click', function() {
    document.getElementById('default-img').src = 'default-img.png';
    document.getElementById('restaurant-title').textContent = 'Pick Something! I\'m Starving...';
    document.getElementById('current-0').textContent = 'Link';
    reset();
});

function init() {
    siteActive = false;
    
    document.getElementById('default-img').style.display = 'block';
    document.getElementById('restaurant-title').textContent = 'Pick Something! I\'m Starving...';
    document.getElementById('current-0').textContent = 'Link';
}

function reset() {
  var initialValue = '';
  var inputText = document.getElementById('input-text');

  inputText.value = initialValue;
}
