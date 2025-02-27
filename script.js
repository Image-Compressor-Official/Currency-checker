// Exchange Rates API (Free Tier)
const API_KEY = 'YOUR_API_KEY';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

// Mobile Menu Toggle
document.getElementById('menuBtn').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('hidden');
});

// Currency Converter Logic
async function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const from = document.getElementById('fromCurrency').value;
    const to = document.getElementById('toCurrency').value;

    if (!amount) return;

    try {
        const response = await fetch(`${BASE_URL}${from}`);
        const data = await response.json();
        const rate = data.conversion_rates[to];
        const result = (amount * rate).toFixed(2);
        
        document.getElementById('result').innerHTML = `
            ${amount} ${from} = ${result} ${to}
        `;
    } catch (error) {
        document.getElementById('result').innerHTML = "Error fetching rates!";
    }
}

// Real-Time Conversion
document.querySelectorAll('select, input').forEach(element => {
    element.addEventListener('change', convertCurrency);
    element.addEventListener('keyup', convertCurrency);
});

// Initialize Ads
(adsbygoogle = window.adsbygoogle || []).push({});
