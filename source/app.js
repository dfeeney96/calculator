const buttons = document.querySelectorAll(".keyboard div");
let selectedNumber;

buttons.forEach(button => {
    button.addEventListener("click", ()=> {
        selectedNumber = Number(button.innerText);
        console.log(selectedNumber);
    })
})

