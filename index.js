var player1 = Math.floor((Math.random() * 6) + 1);
console.log(player1);
if (player1 === 1) {
    document.querySelector(".img1").setAttribute("src", "images/dice1.png")
} else if (player1 === 2) {
    document.querySelector(".img1").setAttribute("src", "images/dice2.png")
} else if (player1 === 3) {
    document.querySelector(".img1").setAttribute("src", "images/dice3.png")
} else if (player1 === 4) {
    document.querySelector(".img1").setAttribute("src", "images/dice4.png")
} else if (player1 === 5) {
    document.querySelector(".img1").setAttribute("src", "images/dice5.png")
} else if (player1 === 6) {
    document.querySelector(".img1").setAttribute("src", "images/dice6.png")
}
var player2 = Math.floor((Math.random() * 6) + 1);
console.log(player2);
if (player2 === 1) {
    document.querySelector(".img2").setAttribute("src", "images/dice1.png")
} else if (player2 === 2) {
    document.querySelector(".img2").setAttribute("src", "images/dice2.png")
} else if (player2 === 3) {
    document.querySelector(".img2").setAttribute("src", "images/dice3.png")
} else if (player2 === 4) {
    document.querySelector(".img2").setAttribute("src", "images/dice4.png")
} else if (player2 === 5) {
    document.querySelector(".img2").setAttribute("src", "images/dice5.png")
} else if (player2 === 6) {
    document.querySelector(".img2").setAttribute("src", "images/dice6.png")
}
if (player1 > player2) {
    document.querySelector("h1").innerHTML = " <span>&#128681</span> Player 1 wins";
} else if (player2 > player1) {
    document.querySelector("h1").innerHTML = "  Player 2 wins <span>&#128681</span>";
} else {
    document.querySelector("h1").textContent = " Draw ";
}

// function diceimage(player1, "imageNumber") {
//     if (player2 === 1) {
//         document.querySelector("imageNumber").setAttribute("src", images / dice1.png)
//     }
//     if (player2 === 2) {
//         document.querySelector("imageNumber").setAttribute("src", images / dice2.png)
//     }
//     if (player2 === 3) {
//         document.querySelector("imageNumber").setAttribute("src", images / dice3.png)
//     }
//     if (player2 === 4) {
//         document.querySelector("imageNumber").setAttribute("src", images / dice4.png)
//     }
//     if (player2 === 5) {
//         document.querySelector("imageNumber").setAttribute("src", images / dice5.png)
//     }
//     if (player2 === 6) {
//         document.querySelector("imageNumber").setAttribute("src", images / dice6.png)
//     }
// }