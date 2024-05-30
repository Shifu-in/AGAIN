document.addEventListener('DOMContentLoaded', function() {
    var balanceElement = document.getElementById("balance");
    var countElement = document.getElementById("count");
    var timerElement = document.getElementById("timer");
    var startButton = document.getElementById("startButton");

    var balance = 0;
    var miningRates = {
        hour: 2 / 3600,  // 2 YNG per hour
        day: 30 / 86400, // 30 YNG per day
        week: 280 / 604800 // 280 YNG per week
    };

    var totalMiningRate = miningRates.hour + miningRates.day + miningRates.week;

    function updateBalance() {
        balance += totalMiningRate * 0.1; // Update every 0.1 second
        balanceElement.textContent = balance.toFixed(8);
        countElement.textContent = balance.toFixed(10);
    }

    function updateTimer() {
        var now = new Date().getTime();
        var countdownTime = now + 96 * 60 * 60 * 1000;
        var interval = setInterval(function() {
            var distance = countdownTime - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            timerElement.textContent = `${days}:${hours.toLocaleString('en-US', {minimumIntegerDigits: 2})}:${minutes.toLocaleString('en-US', {minimumIntegerDigits: 2})}:${seconds.toLocaleString('en-US', {minimumIntegerDigits: 2})}`;

            if (distance < 0) {
                clearInterval(interval);
                timerElement.textContent = "00:00:00:00";
                startButton.disabled = false;
            }
            now += 1000; // Update current time every second
        }, 1000);
    }

    startButton.addEventListener("click", function() {
        setInterval(updateBalance, 100); // Update every 0.1 second
    });

    updateTimer();
});
