let timeLeft = 120;
let interval;
let highest = 0;
let highestName = '—';

const timerEl = document.getElementById('timer');
const bidEl = document.getElementById('bid');
const nameEl = document.getElementById('name');
const placeBidBtn = document.getElementById('placeBid');
const highestBidEl = document.getElementById('highestBid');
const highestBidderEl = document.getElementById('highestBidder');
const resultEl = document.getElementById('result');

function updateTimer() {
  const mins = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const secs = String(timeLeft % 60).padStart(2, '0');
  timerEl.textContent = `Time left: ${mins}:${secs}`;
  if (timeLeft <= 0) {
    clearInterval(interval);
    placeBidBtn.disabled = true;
    resultEl.textContent = `⏱ Auction over! Winner is ${highestName} with ₹${highest}`;
  }
  timeLeft--;
}

placeBidBtn.addEventListener('click', () => {
  const bid = parseInt(bidEl.value, 10);
  const name = nameEl.value.trim() || 'Anonymous';
  if (!bid || isNaN(bid) || bid <= highest) {
    alert('Bid must be greater than current highest');
    return;
  }
  highest = bid;
  highestName = name;
  highestBidEl.textContent = `₹${highest}`;
  highestBidderEl.textContent = highestName;
  bidEl.value = '';
});

interval = setInterval(updateTimer, 1000);
updateTimer();
