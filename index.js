var card = document.getElementById("card");
var card_inner = document.getElementById("card-inner");
var card_back = document.getElementById("card-back");
var bottom_label = document.getElementById("label");
var front_div = document.getElementById('front-div');

var offset = 50;

card.addEventListener('click', () => {
    
});

window.addEventListener('click', function(e){   
    if (card.contains(e.target)){
        card_inner.style.transform = 'rotateY(180deg)';
        bottom_label.style.display = 'none';
        setTimeout(() => {
            front_div.style.display = 'none';
        }, 300);
        
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