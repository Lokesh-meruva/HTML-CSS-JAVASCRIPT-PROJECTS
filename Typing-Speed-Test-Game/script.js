const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The purpose of our lives is to be happy.",
  "In the middle of every difficulty lies opportunity.",
  "Life is what happens when you're busy making other plans.",
  "The best way to predict the future is to invent it."
];

let quote = "";
let timer;
let startTime;

function startTest() {
  // Get a random quote
  quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteDisplay").innerText = quote;

  // Reset UI
  const input = document.getElementById("quoteInput");
  input.value = "";
  input.disabled = false;
  input.focus();
  document.getElementById("timer").innerText = 0;
  document.getElementById("wpm").innerText = 0;

  startTime = new Date();

  // Clear previous timer if any
  clearInterval(timer);
  timer = setInterval(updateTimer, 1000);

  // Listen for input
  input.addEventListener("input", checkInput);
}

function updateTimer() {
  const currentTime = new Date();
  const elapsedTime = Math.floor((currentTime - startTime) / 1000);
  document.getElementById("timer").innerText = elapsedTime;
}

function checkInput() {
  const inputText = document.getElementById("quoteInput").value;
  if (inputText === quote) {
    finishTest();
  }
}

function finishTest() {
  clearInterval(timer);

  const totalTime = Math.floor((new Date() - startTime) / 1000);
  const wordCount = quote.split(" ").length;
  const wpm = Math.round((wordCount / totalTime) * 60);

  document.getElementById("wpm").innerText = wpm;
  document.getElementById("quoteInput").disabled = true;
}
