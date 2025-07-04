let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

// Optional: Add keyboard support
document.addEventListener('keydown', function (e) {
    if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
        appendValue(e.key);
    } else if (e.key === 'Enter') {
        calculate();
    } else if (e.key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (e.key === 'Escape') {
        clearDisplay();
    }
});
