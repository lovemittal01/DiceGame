const num1 = Math.floor((Math.random() * 6) + 1);
const num2 = Math.floor((Math.random() * 6) + 1);

console.log(num1)
console.log(num2)

if (num1 > num2) {
    document.querySelector(".headline").innerText = "Player 1 Wins!";

    switch (num1) {
        case 1:
            document.querySelector(".rolled1").src = "1.png";
            break;
        case 2:
            document.querySelector(".rolled1").src = "2.png";
            break;
        case 3:
            document.querySelector(".rolled1").src = "3.png";
            break;
        case 4:
            document.querySelector(".rolled1").src = "4.png";
            break;
        case 5:
            document.querySelector(".rolled1").src = "5.png";
            break;
        case 6:
            document.querySelector(".rolled1").src = "6.png";
            break;
    }
    switch (num2) {
        case 1:
            document.querySelector(".rolled2").src = "1.png";
            break;
        case 2:
            document.querySelector(".rolled2").src = "2.png";
            break;
        case 3:
            document.querySelector(".rolled2").src = "3.png";
            break;
        case 4:
            document.querySelector(".rolled2").src = "4.png";
            break;
        case 5:
            document.querySelector(".rolled2").src = "5.png";
            break;
        case 6:
            document.querySelector(".rolled2").src = "6.png";
            break;
    }

} else if (num1 < num2) {
    document.querySelector(".headline").innerText = "Player 2 Wins!";

    switch (num1) {
        case 1:
            document.querySelector(".rolled1").src = "1.png";
            break;
        case 2:
            document.querySelector(".rolled1").src = "2.png";
            break;
        case 3:
            document.querySelector(".rolled1").src = "3.png";
            break;
        case 4:
            document.querySelector(".rolled1").src = "4.png";
            break;
        case 5:
            document.querySelector(".rolled1").src = "5.png";
            break;
        case 6:
            document.querySelector(".rolled1").src = "6.png";
            break;
    }
    switch (num2) {
        case 1:
            document.querySelector(".rolled2").src = "1.png";
            break;
        case 2:
            document.querySelector(".rolled2").src = "2.png";
            break;
        case 3:
            document.querySelector(".rolled2").src = "3.png";
            break;
        case 4:
            document.querySelector(".rolled2").src = "4.png";
            break;
        case 5:
            document.querySelector(".rolled2").src = "5.png";
            break;
        case 6:
            document.querySelector(".rolled2").src = "6.png";
            break;
    }
} else {
    document.querySelector(".headline").innerText = "Game Draw!"

}