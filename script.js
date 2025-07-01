async function getRandomQuote(){
  try{
    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
  }catch(error){
    console.error(`Ошибка при получении цитаты:`, error)
    throw new Error(error);
  }
}

(async () => {
    try {
      const quote = await getRandomQuote();  // ждём результата
      console.log(quote);                    // теперь это не Promise, а объект
    } catch (err) {
      console.error(err);
    }
  })();