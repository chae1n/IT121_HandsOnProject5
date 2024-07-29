function calculateCredit() {
    // Get input values
    const name = document.getElementById('name').value;
    const gpa = parseFloat(document.getElementById('gpa').value);

    // Validate input
    if (!name || isNaN(gpa) || gpa < 0 || gpa > 4.0) {
        alert('Please enter a valid name and GPA.');
        return;
    }

    // Calculate bookstore credit based on GPA
    let credit;
    if (gpa >= 3.5) {
        credit = 100; // High GPA
    } else if (gpa >= 3.0) {
        credit = 75;  // Medium GPA
    } else if (gpa >= 2.5) {
        credit = 50;  // Low GPA
    } else {
        credit = 25;  // Below threshold
    }

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Student ${name} is eligible for $${credit} bookstore credit.`;
}
