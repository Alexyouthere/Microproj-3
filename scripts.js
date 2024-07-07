document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let displayValue = '0';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent;

            if (buttonText === 'RESET') {
                displayValue = '0';
            } else if (buttonText === 'DEL') {
                displayValue = displayValue.slice(0, -1) || '0';
            } else if (buttonText === '=') {
                try {
                    displayValue = eval(displayValue).toString();
                } catch {
                    displayValue = 'Error';
                }
            } else {
                if (displayValue === '0' && buttonText !== '.') {
                    displayValue = buttonText;
                } else {
                    displayValue += buttonText;
                }
            }

            display.textContent = displayValue;
        });
    });
});
