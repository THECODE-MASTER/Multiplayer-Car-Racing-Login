class Form{
 constructor(){
  }
 display(){
var title=createElement("h2");
title.html("car racing game");
title.position(130,0);
var input=createInput("PLEASE ENTER YOUR NAME");
input.position(130,160);
var button=createButton("Play Game");
button.position(250,200);
var greeting=createElement("h3");
button.mousePressed( function(){
    input.hide();
    button.hide();
    var Name = input.value();
    playerCount++;
    player.update(Name);
    player.updateCount(playerCount);
    greeting.html("HELLO and WELCOME TO CAR RACING GAME: "+Name);
    greeting.position(130,160);
}
);
}
}