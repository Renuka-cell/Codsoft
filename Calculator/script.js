
function toggleCalculator() {
    const calculator = document.getElementById('calculator');
    calculator.style.display = (calculator.style.display === 'none' || calculator.style.display === '') ? 'block' : 'none';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid input');
        clearDisplay();
    }
}
