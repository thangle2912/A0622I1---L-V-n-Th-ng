function getHistory() {
    return document.getElementById("value-history").innerText;
}
function printHistory(num) {
    document.getElementById("value-history").innerText = num;
}
function getOutput() {
    return document.getElementById("value-output").innerText;

}
function printOutput(num) {
    if (num ==""){
        document.getElementById("value-output").innerText = num;
    } else {
        document.getElementById("value-output").innerText = getFormattedNumber(num);
    }
}
function getFormattedNumber(num) {
    if (num=="-"){
        return '';
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
// printOutput(122319);
function reverseFormattedNumber(num) {
    return Number(num.replace(/,/g,''));
}
// alert(reverseFormattedNumber(getOutput()));
let operator = document.getElementsByClassName("operator");
for (let i = 0; i<operator.length;i++){

    operator[i].addEventListener('click',function () {
        if (this.id == 'clear'){
            printOutput('');
            printHistory('');
        } else if (this.id=='backspace'){
            let output = reverseFormattedNumber(getOutput()).toString();
            if (output){
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }  else {
            let output = getOutput();
            let  history = getHistory();
            if (output ==""&&history!=""){
                if (isNaN(history[history.length-1])){
                    history = history.substr(0,history.length-1);
                }
            }
            if (output!="" || history !=""){
                output = output=="" ?output:reverseFormattedNumber(output);
                history = history + output;
                if (this.id=='='){
                    let result = eval(history);
                    printOutput(result);
                    printHistory("");
                } else {
                    history = history+ this.id;
                    printHistory(history);
                    printOutput('');
                }
            }
        }
    });
}
let number = document.getElementsByClassName("number");
for (let i = 0; i<number.length;i++){
    number[i].addEventListener('click',function () {
        let output = reverseFormattedNumber(getOutput());
        if (output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    });
}