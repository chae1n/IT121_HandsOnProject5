document.getElementById('convertFeet').addEventListener('click', function() {
    const inches = parseFloat(document.getElementById('inches').value);
    if (isNaN(inches) || inches < 0) {
        document.getElementById('result').innerText = 'Please enter a valid number of inches.';
        return;
    }
    const feet = inches / 12;
    document.getElementById('result').innerText = `${inches} inches is equal to ${feet.toFixed(2)} feet.`;
});

document.getElementById('convertYards').addEventListener('click', function() {
    const inches = parseFloat(document.getElementById('inches').value);
    if (isNaN(inches) || inches < 0) {
        document.getElementById('result').innerText = 'Please enter a valid number of inches.';
        return;
    }
    const yards = inches / 36;
    document.getElementById('result').innerText = `${inches} inches is equal to ${yards.toFixed(2)} yards.`;
});
