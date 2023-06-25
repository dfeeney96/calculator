const buttons = document.querySelectorAll(".keyboard div");
const displayText = document.querySelector("h2");
const operators = ["+", "-", "/", "x", "="];
const specialKeys = ["DEL", "RESET"]
let chosenNumbers = [];
let totalFigure = 0;
let answer = 0;

buttons.forEach(button => {
    button.addEventListener("click", ()=> {
        let chosenFigure = button.innerText;
        evaluateFigure(chosenFigure);
        displayFigure(chosenFigure);
    })
})



let evaluateFigure = chosenFigure => {
    if(operators.includes(chosenFigure)){
        chosenNumbers.push(Number(totalFigure));
        if (chosenFigure == "=") {
            chosenNumbers.push(chosenFigure);
            calculateAnswer();
        }else {
            chosenNumbers.push(chosenFigure);
        }
        totalFigure = 0;
       
    } else if (chosenFigure == "RESET"){
        chosenNumbers = [];
        totalFigure = 0;
        answer = 0;

    } else if (chosenFigure == "DEL") {
        totalFigure = 0;

    } else {
        totalFigure += chosenFigure;
    }
}

let calculateAnswer = () => {
    for(let i = 0; i < chosenNumbers.length; i++ ){
        let num1 = chosenNumbers[i - 1];
        let num2 = chosenNumbers[i + 1];
        switch (chosenNumbers[i]) {
            case "+":
                answer = add(num1, num2);
                break;
            case "-":
                answer = subtract(num1, num2);
                break;
            case "/":
                answer = divide(num1, num2);
                break;
            case "x":
                answer = multiply(num1, num2);
                break;
        }

    } 

}


let add = (num1, num2) => {
    return num1 + num2;
}

let subtract = (num1, num2) => {
    return num1 - num2;
}

let multiply = (num1, num2) => {
    return num1 * num2;
}

let divide = (num1, num2) => {
    return num1 / num2;
}



let displayFigure = (chosenFigure) => {
    if (chosenNumbers.includes("=")){
        displayText.innerText = Math.round(answer*1000000) / 1000000;  
    } else{
        if(operators.includes(chosenFigure)){
        displayText.innerText = chosenFigure;
        } else if(chosenFigure == "RESET"){
            displayText.innerText = 0;
        } else if (chosenFigure == "DEL"){
            displayText.innerText = chosenNumbers[chosenNumbers.length - 1];

        }else {
            displayText.innerText = totalFigure.slice(1, totalFigure.length);
        }
    }

    
    
}

