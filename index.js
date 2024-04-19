var randomNumber1 = Math.floor(Math.random() * 6)+1; // 1-6
var randomDiceImage ="dice" +randomNumber1 +".png"; //dice1.png -dice6.png
var randonImageSource ="images/" + randomDiceImage; //images/dice1.png -images/dice6.png
var image1 = document.querySelectorAll("img") [0];
image1.setAttribute("src",randonImageSource);



// var randomnumber2 =Math.floor(Math.random() * 6)+1;
// var randonImageSource2 ="images/dice" +randomnumber2 +".png";
// document.querySelectorAll("img") [1].setAttribute("src", randonImageSource2);

// (below and above commented code is same ,we can use any among both)

var randomNumber2 = Math.floor(Math.random() * 6)+1; // 1-6
var randomDiceImage2 ="dice" +randomNumber2 +".png"; //dice1.png -dice6.png
var randonImageSource2 ="images/" + randomDiceImage2; //images/dice1.png -images/dice6.png
var image1 = document.querySelectorAll("img") [1];
image1.setAttribute("src",randonImageSource2);



// If player 1 wins among two players
if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML ="🏆 play 1 wins!";
}else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML ="player 2 wins!🏅";
}else {
    document.querySelector("h1").innerHTML = "🤝😥Draw!";
}





