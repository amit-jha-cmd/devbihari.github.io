var card = document.getElementById("card");
var card_inner = document.getElementById("card-inner");
var card_back = document.getElementById("card-back");
var bottom_label = document.getElementById("label");
var front_div = document.getElementById('front-div');

var sec1 = document.getElementById('sec-1');
var sec2 = document.getElementById('sec-2');

var view_client_btn = document.getElementById('view-client');

var clients_visible = false;

var offset = 50;

function flip() {
    
}

function straight() {
    
}

window.addEventListener('click', function(e){   
    if (card.contains(e.target)){
        card_inner.style.transform = 'rotateY(180deg)';
        bottom_label.style.display = 'none';
        setTimeout(() => {
            front_div.style.display = 'none';
        }, 200);
    } else {
        card_inner.style.transform = 'rotateY(0deg)';
        bottom_label.style.display = 'inherit';
        setTimeout(() => {
            front_div.style.display = 'inherit';
        }, 250);
    }
  });

window.addEventListener('resize' ,() => {
    var width = window.innerWidth;
    var card_width = front_div.offsetWidth;
    if(card_width + offset > width){
        front_div.style.width = (card_width - (card_width + offset - width)).toString() + "px";
        card.style.width = (card_width - (card_width + offset - width)).toString() + "px";
    } else {
        front_div.style.width = (card_width + Math.abs(card_width + offset - width)).toString() + "px";
        card.style.width = (card_width + Math.abs(card_width + offset - width)).toString() + "px";
    }
    
})

card.addEventListener('swiped-up', (e) => {
    clients_visible = !clients_visible;
    console.log('worked');
    if(clients_visible){
        view_client_btn.innerHTML = "Hide Clients";
        card.style.transform = "translate(-50%, 40%)";
    } else {
        view_client_btn.innerHTML = "View Clients";
        card.style.transform = "translate(-50%, 50%)";
    }
    
});