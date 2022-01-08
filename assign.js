let screen = document.querySelector("#screen1");

const display = (val) => {
    screen.value += val;
}

const clr = () => {
    screen.value = '';
}

const clearLast = () => {
    let sVal = screen.value.slice(0, screen.value.length - 1);
    screen.value = sVal;
}

const evaluateScreen = () => {
    let sValue = screen.value;
    let sAns = eval(sValue);
    screen.value = sAns;
}