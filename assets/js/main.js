
calculateButton.addEventListener('click', function() {
    // Retrieve user inputs
    const amount = parseFloat(document.getElementById('mortgage-amount').value);
    const rate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    const term = parseInt(document.getElementById('mortgage-term').value) * 12;

    // Validate inputs
    if (isNaN(amount) || isNaN(rate) || isNaN(term)) {
        alert("Please enter valid numbers for all fields.");
        return;
    }

    // Calculate monthly payment using the formula
    const monthlyPayment = (amount * rate) / (1 - Math.pow(1 + rate, -term));
    
    // Calculate total payment and total interest
    const totalPayment = monthlyPayment * term;
    const totalInterest = totalPayment - amount;

    // Display results
    document.getElementById('monthly-payment').textContent = monthlyPayment.toFixed(2);
    document.getElementById('total-payment').textContent = totalPayment.toFixed(2);
    document.getElementById('total-interest').textContent = totalInterest.toFixed(2);
});