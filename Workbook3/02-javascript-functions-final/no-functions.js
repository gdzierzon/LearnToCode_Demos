let loanAmount;
let anualInterestRatePercent; 
let years;

// A x MIR / (1 - (1 + MIR)^-np)
let anualInterestRate;
let monthlyInterstRate;
let numberOfPayments;

let interestPerMonth;
let paymentDenominator;
let monthlyPayment;
let totalPaid;
let totalInterestPaid;


// Loan option 1
loanAmount = 53000;
anualInterestRatePercent = 7.625; 
years = 15;

anualInterestRate = anualInterestRatePercent / 100;  
monthlyInterstRate = anualInterestRate / 12;
numberOfPayments = years * 12;

interestPerMonth = loanAmount * monthlyInterstRate;
paymentDenominator = 1 - Math.pow(1 + monthlyInterstRate, -numberOfPayments)
monthlyPayment = parseFloat((interestPerMonth / paymentDenominator).toFixed(2));
totalPaid = monthlyPayment * numberOfPayments;
totalInterestPaid = totalPaid - loanAmount;

console.log("Loan Amount:         $" + loanAmount)
console.log("Interest Rate:       " + anualInterestRatePercent + " %")
console.log("Loan Length:         " + years + " years")
console.log("Monthly Payment:     $" + monthlyPayment);
console.log("Total Interest Paid: $" + totalInterestPaid.toFixed(2));
console.log("Total Paid:          $" + totalPaid.toFixed(2));

console.log("\n")


// Loan option 2
loanAmount = 100000;
anualInterestRatePercent = 7.835; 
years = 30;

anualInterestRate = anualInterestRatePercent / 100; 
monthlyInterstRate = anualInterestRate / 12;
numberOfPayments = years * 12;

interestPerMonth = loanAmount * monthlyInterstRate;
paymentDenominator = 1 - Math.pow(1 + monthlyInterstRate, -numberOfPayments)
monthlyPayment = parseFloat((interestPerMonth / paymentDenominator).toFixed(2));
totalPaid = monthlyPayment * numberOfPayments;
totalInterestPaid = totalPaid - loanAmount;

console.log("Loan Amount:         $" + loanAmount)
console.log("Interest Rate:       " + anualInterestRatePercent + " %")
console.log("Loan Length:         " + years + " years")
console.log("Monthly Payment:     $" + monthlyPayment);
console.log("Total Interest Paid: $" + totalInterestPaid.toFixed(2));
console.log("Total Paid:          $" + totalPaid.toFixed(2));

console.log("\n")
