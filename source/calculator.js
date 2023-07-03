//if there is a second operator added / chosen Numbers array has a length of 4+, calculate the first operation

const buttons = document.querySelectorAll(".keyboard div");

const displayText = document.querySelector("h2");
const operators = ["+", "-", "/", "x"];
const specialKeys = ["DEL", "RESET", "="]
let chosenNumbers = [];
let totalFigure = 0;
let answer = 0;





buttons.forEach(button => {
        button.addEventListener("click", e => {
        let chosenFigure = button.innerText;
        evaluateFigure(chosenFigure);
        displayFigure(chosenFigure);
        e.stopPropagation();
        e.preventDefault();
        })
    })




const evaluateFigure = chosenFigure => {
    if(operators.includes(chosenFigure)){
        if(typeof (chosenNumbers[chosenNumbers.length - 1]) == "number"){
            chosenNumbers.push(chosenFigure);
            totalFigure = 0;

        } else{
            chosenNumbers.push(Number(totalFigure));
            chosenNumbers.push(chosenFigure);
            totalFigure = 0;
            let noOfOperators = 0;
            for(let i = 0; i <  chosenNumbers.length; i++){
                for(let j = 0; j < operators.length; j++){
                    if(chosenNumbers[i] == operators[j]){
                        ++ noOfOperators;
                    }
                }
                if(noOfOperators > 1){
                    reduceArr();
                }
            }
        }
            
         
        } else if (chosenFigure == "="){
            chosenNumbers.push(Number(totalFigure));
            chosenNumbers.push(chosenFigure);
            let indexOfOperator = 1;
            calculateAnswer(indexOfOperator);
            totalFigure = 0;
      
         
        }
        
        else if (chosenFigure == "RESET"){
            chosenNumbers = [];
            totalFigure = 0;
            answer = 0;
         
    

        } else if (chosenFigure == "DEL") {
         
            if(operators.includes(chosenNumbers[chosenNumbers.length - 1])){
                chosenNumbers.pop();

            } else{
                totalFigure = 0;
            }

        } else  {
            totalFigure += chosenFigure;
       
        } 
    }

const reduceArr = () => {
    calculateAnswer();
    chosenNumbers.shift();
    chosenNumbers.shift();
    chosenNumbers.shift();
    chosenNumbers.unshift(answer);
    totalFigure = 0;

}


const calculateAnswer = indexOfOperator => {
            let operator = chosenNumbers[indexOfOperator];
            
            num1 = chosenNumbers[indexOfOperator - 1];
            num2 = chosenNumbers[indexOfOperator + 1];

            switch (operator) {
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
    

   




const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}


const displayFigure = (chosenFigure) => {
    if (chosenNumbers.includes("=")){
        displayText.innerText = Math.round(answer * 1000000) / 1000000;  
        chosenNumbers= [];
        chosenNumbers.push(answer);
    } else{
        if(operators.includes(chosenFigure)){
        displayText.innerText = chosenFigure;
        } else if(chosenFigure == "RESET"){
            displayText.innerText = 0;
        } else if (chosenFigure == "DEL"){
            if(chosenNumbers.length == 0){
                displayText.innerText = 0;
            } else{
            displayText.innerText = chosenNumbers[chosenNumbers.length - 1];


            }

        }else if (totalFigure){
            displayText.innerText = totalFigure.slice(1, totalFigure.length);
        } else {
            displayText.innerText = chosenNumbers[chosenNumbers.length - 1];
        }
    }

    
    
}

