window.onload = function() {
    let form = document.querySelector("form");
    let answerDiv = document.querySelector("#output-box");
    form.onsubmit = function(event) {
        event.preventDefault();
        let nr1 = parseFloat(document.querySelectorAll("input")[0].value);
        let nr2 = parseFloat(document.querySelectorAll("input")[1].value);
        let op = document.querySelector("select").value;
        if (isNaN(nr1) || isNaN(nr2))
            {
            answerDiv.innerHTML = "Rezultat: Invalid input";
            return;
        }
        let result; 
        switch(op) {
            case '+':
                result = nr1 + nr2;
                break;
            case '-':
                result = nr1 - nr2;
                break;
            case '⋅':
                result = nr1 * nr2;
                break;
            case '/':
                result = nr1 / nr2;
                break;
            case '%':
                result = nr1 % nr2;
                break;
            case '^':
                result = nr1 ** nr2;
                break;
            default:
                result = "Invalid operation";
        }
        answerDiv.innerHTML = "Rezultat: " + nr1 + " " + op + " " + nr2 + " = " + result;
    }
}
