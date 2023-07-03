const optionButtons = document.querySelectorAll(".option");
const themeStyleSheet = document.querySelectorAll("link")[5];


optionButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        let chosenThemeDiv = e.target;
        let chosenThemeNumber = chosenThemeDiv.classList[1];
        const rootLink = "./source/stylesheets/";
        switch (chosenThemeNumber) {
            case "option-one":
                themeStyleSheet.setAttribute("href", `${rootLink}theme1.css`);
                break;
            case "option-two":
                themeStyleSheet.setAttribute("href", `${rootLink}theme2.css`);
                break;
            case "option-three":
                themeStyleSheet.setAttribute("href", `${rootLink}theme3.css`);
          
                break;
        }
      
        
    })

})