// Establish the different pay rates
payRate1 = 12.5;
payRate2 = 25;
payRate3 = 17.30;

// Hours worked
hoursWorked = 20;


overtimeTime = hoursOvertime - hoursWorked
overtimePay = payRate * 1.5 * overtimeTime

// If
if (hoursWorked > 40);
 {
    grossPay = (payRate * 1.5) * hoursWorked;

}
else (hoursWorked <= 40) ;
{
    grossPay = payRate * hoursWorked ;
}


console.log(grossPay);