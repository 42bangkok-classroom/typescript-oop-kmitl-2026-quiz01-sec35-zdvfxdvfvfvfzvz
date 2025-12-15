var balance = Number(process.argv[2]);
var withdrawn = Number(process.argv[3]);
if (isNaN(balance) || isNaN(withdrawn)) {
    console.log("Invalid Input");
    process.exit(0);
}
function bank(balance, withdrawn) {
    if (withdrawn > balance) {
        return "Insufficient balance";
    }
    else if (withdrawn > 5000) {
        return "Exceeds per-withdrawal limit";
    }
    else {
        return "Withdrawal approved";
    }
}
console.log(bank(balance, withdrawn));
