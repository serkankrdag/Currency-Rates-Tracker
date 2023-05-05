const apiUrl = 'https://api.exchangeratesapi.io/latest?base=USD';

async function getExchangeRates() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const usdRate = data.rates.EUR;
    const eurRate = 1 / usdRate;
    console.log(`USD: 1 = EUR: ${eurRate.toFixed(2)}`);
  } catch (error) {
    console.error(error);
  }
}

setInterval(getExchangeRates, 10000); // Her 10 saniyede bir güncelle

