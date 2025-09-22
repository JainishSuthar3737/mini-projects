const convertBtn = document.getElementById("convert-btn");
const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const result = document.getElementById("result");

// List of currencies
const currencies = [
  "USD",
  "EUR",
  "INR",
  "GBP",
  "JPY",
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "NZD",
  "SGD",
  "HKD",
  "SEK",
  "KRW",
  "NOK",
  "MXN",
  "BRL",
  "ZAR",
  "RUB",
  "TRY",
];

// Hardcoded exchange rates with base USD (1 USD = ?)
const exchangeRates = {
  USD: {
    USD: 1,
    EUR: 0.91,
    INR: 82.5,
    GBP: 0.78,
    JPY: 150,
    AUD: 1.5,
    CAD: 1.35,
    CHF: 0.91,
    CNY: 7.2,
    NZD: 1.6,
    SGD: 1.35,
    HKD: 7.8,
    SEK: 10,
    KRW: 1340,
    NOK: 10,
    MXN: 18,
    BRL: 5,
    ZAR: 19,
    RUB: 96,
    TRY: 29,
  },
};

// Add other currencies relative to USD for simplicity
currencies.forEach((cur) => {
  if (!exchangeRates[cur]) {
    exchangeRates[cur] = {};
    currencies.forEach((toCur) => {
      // Just convert via USD
      exchangeRates[cur][toCur] =
        exchangeRates["USD"][toCur] / exchangeRates["USD"][cur];
    });
  }
});

// Populate select options
currencies.forEach((cur) => {
  fromCurrency.innerHTML += `<option value="${cur}" ${
    cur === "USD" ? "selected" : ""
  }>${cur}</option>`;
  toCurrency.innerHTML += `<option value="${cur}" ${
    cur === "INR" ? "selected" : ""
  }>${cur}</option>`;
});

// Convert function
convertBtn.addEventListener("click", () => {
  const amount = parseFloat(amountInput.value);
  if (isNaN(amount)) {
    result.textContent = "Please enter a valid number";
    return;
  }

  const from = fromCurrency.value;
  const to = toCurrency.value;

  const converted = amount * exchangeRates[from][to];
  result.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
});

// Perform default conversion on page load (1 USD → INR)
window.addEventListener("load", () => {
  convertBtn.click();
});
