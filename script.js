const quoteContent = document.getElementById("quoteContent");
const quoteAuthor = document.getElementById("quoteAuthor");
const getQuoteBtn = document.getElementById("getQuoteBtn");

getQuoteBtn.addEventListener("click", () => {
  console.log("Кнопка нажата");
  displayQuote();
});

async function getRandomQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Ошибка при получении цитаты:`, error);
    throw new Error(error);
  }
}

async function displayQuote() {
  const quote = await getRandomQuote();
  console.log(quote);
  quoteContent.innerText = quote.content;
  quoteAuthor.innerText = quote.author;
}

(async () => {
  try {
    const quote = await getRandomQuote();
    console.log(quote);
    quoteContent.innerText = quote.content;
    quoteAuthor.innerText = quote.author;
  } catch (err) {
    console.error(err);
  }
})();
