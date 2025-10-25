function getEndOfMonthDate() {
  let now = new Date();
  // next month ka 1st day, then 1 day minus = current month ka last day
  return new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
}

function startCountdown() {
  let countTime = setInterval(function () {
    let endDate = getEndOfMonthDate().getTime();
    let now = new Date().getTime();
    let diff = endDate - now;

    // Agar time zero se neeche chala gaya → next month reset
    if (diff <= 0) {
      endDate = getEndOfMonthDate().getTime();
      diff = endDate - now;
    }

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }, 1000);
}

startCountdown();
