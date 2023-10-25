

// Loan option 1
compareLoan(53000, 7.625, 15);
// Loan option 2
compareLoan(100000, 7.835, 30);


function compareLoan(loanAmount, annualInterestRate, years) {
    const monthlyInterstRate = annualInterestRate/1200;
    const numberOfPayments = years * 12;

    const monthlyPayment = calculateMonthlyPayment(loanAmount, monthlyInterstRate, numberOfPayments);
    const totalPaid = calculateTotalPaid(monthlyPayment, numberOfPayments);
    const totalInterestPaid = calculateInterestPaid(loanAmount, totalPaid);

    displayLoanDetails(loanAmount, annualInterestRate, years,monthlyPayment,totalPaid, totalInterestPaid);
}

function calculateMonthlyPayment(loanAmount, monthlyRate, numberOfPayments) {

    const numerator = loanAmount * monthlyRate;
    const denominator = 1 - Math.pow(1 + monthlyRate, -numberOfPayments);
    return +(numerator / denominator).toFixed(2);
}

function calculateTotalPaid(monthlyPayment, numberOfPayments) {
    return +(monthlyPayment * numberOfPayments).toFixed(2);
}

function calculateInterestPaid(loanAmount, totalPaid) {
    return +(totalPaid - loanAmount).toFixed(2);
}

function displayLoanDetails(loanAmount, annualInterestRate, years, monthlyPayment, totalPaid, totalInterestPaid) {
    
    console.log("Loan Amount:         $" + loanAmount)
    console.log("Interest Rate:       " + annualInterestRate + " %")
    console.log("Loan Length:         " + years + " years");
    console.log("--------------------------");
    console.log("Monthly Payment:     $" + monthlyPayment);
    console.log("Total Interest Paid: $" + totalInterestPaid.toFixed(2));
    console.log("Total Paid:          $" + totalPaid.toFixed(2));
    
    console.log("")
}


