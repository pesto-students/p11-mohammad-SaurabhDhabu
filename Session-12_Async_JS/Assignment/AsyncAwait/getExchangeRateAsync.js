async function main() {
  let currencyCode = prompt("Give currency code to get exchange rate:");
  if (currencyCode) {
    getExchangeRate(currencyCode)
      .then((rate) => {
        console.log(rate); // Output: 1.2133
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

async function getExchangeRate(currencyCode) {
  try {
    const response = await fetch("https://api.exchangerate.host/latest");
    if (!response.ok) {
      throw new Error("Failed to fetch exchange rates");
    }
    const data = await response.json();
    const rate = data.rates[currencyCode.toUpperCase()];
    if (rate === undefined) {
      return null;
    }
    return parseFloat(rate.toFixed(4));
  } catch (error) {
    console.error(error);
    throw new Error("Failed to get exchange rate");
  }
}
