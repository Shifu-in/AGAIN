document.addEventListener('DOMContentLoaded', function() {
    var balanceElement = document.getElementById("balance");
    var countElement = document.getElementById("count");

    var balance = 10.14691900;
    var miningRates = {
        day: 0.0003277300,  // Rate per day
        week: 0.0022940900, // Rate per week
        month: 0.0101595600 // Rate per month
    };

    var totalMiningRate = miningRates.day / 86400 + miningRates.week / 604800 + miningRates.month / 2592000;

    function updateBalance() {
        balance += totalMiningRate * 0.1; // Update every 0.1 second
        balanceElement.textContent = balance.toFixed(8);
        countElement.textContent = balance.toFixed(10);
    }

    document.getElementById("startButton").addEventListener("click", function() {
        setInterval(updateBalance, 100); // Update every 0.1 second
    });
});
