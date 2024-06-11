document.addEventListener("DOMContentLoaded", function() {
    const urlPoolPrice = 'http://127.0.0.1:5000/api/poolprice';
    const urlTokenMcap = 'http://127.0.0.1:5000/api/tokenmcap';
    const urlTokenChange = 'http://127.0.0.1:5000/api/tokenchange';
    const urlTokenPrice = 'http://127.0.0.1:5000/api/tokenprice';

    // Generic function to fetch data
    async function fetchData(url) {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            return null;
        }
    }

    // Fetch and display Pool Price Data
    async function fetchPoolData() {
        const data = await fetchData(urlPoolPrice);
        if (data) {
            let volume24h = data.volume24h ?? 0;
            document.getElementById('volume24h').innerText = `$${volume24h.toFixed(0)}`;
        } else {
            document.getElementById('volume24h').innerText = 'Failed to load data';
        }
    }

    // Fetch and display Token Market Cap
    async function fetchTokenMcap() {
        const data = await fetchData(urlTokenMcap);
        if (data) {
            let mcap = data.mcap ?? 0;
            document.getElementById('mcap').innerText = `$${mcap}`;
        } else {
            document.getElementById('mcap').innerText = 'Failed to load data';
        }
    }

    // Fetch and display Token 24h Change
    async function fetchTokenChange() {
        const data = await fetchData(urlTokenChange);
        if (data) {
            let variation24h = data.variation24h ?? 0;
            document.getElementById('variation24h').innerText = `${variation24h.toFixed(2)}%`;
        } else {
            document.getElementById('variation24h').innerText = 'Failed to load data';
        }
    }

    // Fetch and display Token Price
    async function fetchTokenDataPrice() {
        const data = await fetchData(urlTokenPrice);
        if (data) {
            let price = data.price ?? 0;
            document.getElementById('price').innerText = `$${price.toFixed(4)}`;
        } else {
            document.getElementById('price').innerText = 'Failed to load data';
        }
    }

    // Run all fetch functions
    fetchPoolData();
    fetchTokenMcap();
    fetchTokenChange();
    fetchTokenDataPrice();
});
