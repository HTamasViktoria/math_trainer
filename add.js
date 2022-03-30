let firstNumber = document.querySelector("#firstNumber")
let operation = document.querySelector("#operation")
let secondNumber = document.querySelector("#secondNumber")
let equalsTo = document.querySelector("#equalsTo")
let result = document.querySelector("#result")
let correctOrNot = document.querySelector("#correctOrNot")
let checkButton = document.querySelector("#check")
let newButton = document.querySelector("#new")
let resultForm = document.querySelector("#resultForm")


let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let hexColor = "#";


/*let colorMaker = function (element) {
    for (let i = 0; i < 6; i++) {
        let newHexArray = hexArray.sort((a, b) => Math.random() - 0.5)
        console.log(newHexArray)
        let randomNumber = Math.floor(Math.random() * 6)
        hexColor = hexColor.concat(newHexArray[randomNumber])

    }
    console.log(hexColor)
    element.style.color = hexColor
}*/

newButton.addEventListener("click", () => {
    resultForm.reset()
    firstNumber.innerHTML = Math.floor(Math.random() * 10);
    operation.innerHTML = "+";
    secondNumber.innerHTML = Math.floor(Math.random() * 10)
    equalsTo.innerHTML = "=";
    correctOrNot.style.background = ""; 
    /*colorMaker(firstNumber);
    hexColor="#";
    colorMaker(operation);
    hexColor="#"
    colorMaker(secondNumber)
    hexColor="#";
    colorMaker(equalsTo);
    hexColor="#"*/
})

checkButton.addEventListener("click", () => {
    if (parseInt(firstNumber.innerHTML) + parseInt(secondNumber.innerHTML) == result.value) {
        //correctOrNot.innerHTML = "Helytelen válasz!";
        correctOrNot.style.background = "url(correct.png) no-repeat center"; 
        correctOrNot.stlye.backgroundSize = "cover"

    }
    else if (parseInt(firstNumber.innerHTML) + parseInt(secondNumber.innerHTML) != result.value) {
        //correctOrNot.innerHTML = "Helytelen válasz!";
        //document.body.style.background = "#f3f3f3 url('img_tree.png') no-repeat right top"
        correctOrNot.style.background = "url(redx.png) no-repeat center";
        correctOrNot.stlye.backgroundSize = "cover"
    }
}
)



