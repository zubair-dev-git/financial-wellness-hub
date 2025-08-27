document.addEventListener('DOMContentLoaded', () => {
    const principalInput = document.getElementById('principal');
    const rateInput = document.getElementById('rate');
    const yearsInput = document.getElementById('years');
    const calculateBtn = document.getElementById('calculate-btn');
    const totalAmountSpan = document.getElementById('total-amount');

    calculateBtn.addEventListener('click', calculateCompoundInterest);

    function calculateCompoundInterest() {
        // Get values from the input fields
        const principal = parseFloat(principalInput.value);
        const rate = parseFloat(rateInput.value) / 100; // Convert percentage to decimal
        const years = parseFloat(yearsInput.value);

        // Simple validation to ensure all fields have valid numbers
        if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
            totalAmountSpan.textContent = 'Please enter valid numbers.';
            return;
        }

        // The core calculation: A = P(1 + r)^t
        const finalAmount = principal * Math.pow((1 + rate), years);

        // Format the result as a currency and display it
        totalAmountSpan.textContent = `$${finalAmount.toFixed(2)}`;
    }
});