document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateButton');
    const form = document.querySelector('.calculator-form form');

    if (!calculateButton || !form) return;

    calculateButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Clear previous errors (if you have error handling)

        // Retrieve user inputs
        const amount = parseFloat(document.getElementById('mortgage-amount').value);
        const rate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
        const term = parseInt(document.getElementById('mortgage-term').value) * 12;
        const mortgageType = form.querySelector('input[name="mortgage-type"]:checked')?.value;

        // Validate inputs
        if (isNaN(amount) || isNaN(rate) || isNaN(term) || !mortgageType) {
            // Show error messages here if desired
            return;
        }

        let monthlyPayment, totalPayment;

        if (mortgageType === "repayment") {
            // Standard repayment calculation
            monthlyPayment = (amount * rate) / (1 - Math.pow(1 + rate, -term));
            totalPayment = monthlyPayment * term;
        } else if (mortgageType === "interest-only") {
            // Interest-only calculation
            monthlyPayment = amount * rate;
            totalPayment = monthlyPayment * term;
        }

        // Display results in the correct spans (using your class names)
        const monthlyRepaymentSpan = document.querySelector('.monthly-repayment-data');
        const totalRepaySpan = document.querySelector('.total-repay-data');

        if (monthlyRepaymentSpan) {
            monthlyRepaymentSpan.textContent = isFinite(monthlyPayment)
                ? monthlyPayment.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
                : '—';
        }
        if (totalRepaySpan) {
            totalRepaySpan.textContent = isFinite(totalPayment)
                ? totalPayment.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
                : '—';
        }

        // Show results, hide default message
        const resultsCalculation = document.querySelector('.results-calculation');
        const defaultMessage = document.querySelector('.default-message');
        if (resultsCalculation) resultsCalculation.style.display = 'block';
        if (defaultMessage) defaultMessage.style.display = 'none';
    });
});