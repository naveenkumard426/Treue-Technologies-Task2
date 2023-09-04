document.addEventListener('DOMContentLoaded', function () {
    const lengthInput = document.getElementById('lengthInput');
    const unitSelector = document.getElementById('unitSelector');
    const convertButton = document.getElementById('convertButton');
    const resultContainer = document.getElementById('resultContainer');
    const convertedLength = document.getElementById('convertedLength');

    convertButton.addEventListener('click', function () {
        const lengthInMeters = parseFloat(lengthInput.value);

        if (isNaN(lengthInMeters)) {
            alert('Please enter a valid number for length.');
            return;
        }

        const selectedUnit = unitSelector.value;
        let result;

        switch (selectedUnit) {
            case 'centimeters':
                result = lengthInMeters * 100;
                break;
            case 'kilometers':
                result = lengthInMeters / 1000;
                break;
            case 'millimeters':
                result = lengthInMeters * 1000;
                break;
            default:
                result = 0;
        }

        convertedLength.textContent = result.toFixed(2) + ' ' + selectedUnit;
        resultContainer.classList.remove('hidden');
    });
});
