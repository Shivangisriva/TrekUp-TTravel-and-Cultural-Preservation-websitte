const API_URL1 = "https://v6.exchangerate-api.com/v6/609f2918a2035a91138cb312/latest/";
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const msg = document.querySelector(".msg");
const amountInput = document.getElementById("amount");

async function fetchCountryCodes() {
  try {
    const response = await fetch(API_URL1 + "USD");
    const data = await response.json();
    console.log("API Response:", data);

    if (data.result === "success") {
      populateCurrencyDropdowns(data.conversion_rates);
    } else {
      showMessage("Failed to fetch currency data.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    showMessage("Error fetching currency data.");
  }
}

function populateCurrencyDropdowns(rates) {
  Object.keys(rates).forEach((currency) => {
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    option1.value = currency;
    option1.textContent = currency;
    option2.value = currency;
    option2.textContent = currency;
    fromCurrency.appendChild(option1);
    toCurrency.appendChild(option2);
  });
  fromCurrency.value = "USD"; // Default "From" currency
  toCurrency.value = "INR";  // Default "To" currency
}

async function fetchExchangeRate() {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amount = parseFloat(amountInput.value) || 1;

  try {
    const response = await fetch(API_URL1 + from);
    const data = await response.json();

    if (data.result === "success") {
      const rate = data.conversion_rates[to];
      const convertedAmount = (rate * amount).toFixed(2);
      msg.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
    } else {
      msg.textContent = "Failed to fetch exchange rate.";
    }
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    msg.textContent = "Error fetching exchange rate.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchCountryCodes();

  // Add event listeners to update the exchange rate dynamically
  document.getElementById("currencyForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission
    fetchExchangeRate();
  });

  fromCurrency.addEventListener("change", fetchExchangeRate);
  toCurrency.addEventListener("change", fetchExchangeRate);
  amountInput.addEventListener("input", fetchExchangeRate);
});