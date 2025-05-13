const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    text: "Do what you can with all you have, wherever you are.",
    author: "Theodore Roosevelt"
  },
  {
    text: "It always seems impossible until it’s done.",
    author: "Nelson Mandela"
  }
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  document.getElementById("quoteText").innerText = quote.text;
  document.getElementById("quoteAuthor").innerText = `- ${quote.author}`;
}

function copyQuote() {
  const quote = document.getElementById("quoteText").innerText;
  const author = document.getElementById("quoteAuthor").innerText;
  const textToCopy = `${quote} ${author}`;

  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      alert("Quote copied to clipboard!");
    })
    .catch(() => {
      alert("Failed to copy quote.");
    });
}

function tweetQuote() {
  const quote = document.getElementById("quoteText").innerText;
  const author = document.getElementById("quoteAuthor").innerText;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + " " + author)}`;
  window.open(tweetUrl, "_blank");
}
