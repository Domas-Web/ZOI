//require('dotenv').config();

document.addEventListener("DOMContentLoaded", function() {
    //const apiKey = process.env.API_KEY;
    const apiKey = '8Fs3phbiI63XIG4WO2lBe83X8STE2ioC42BldAsS';
    const urlpoolprice = 'https://public-api.dextools.io/trial/v2/pool/arbitrum/0x874cda82c3e797d3bdab4057560af1f756cc24a4/price';
    const urltokeninfo = 'https://public-api.dextools.io/trial/v2/token/arbitrum/0x3b55804e532c4d7c47894d5ed89a89a5ff103fe2/info';
    const urltokenprice = 'https://public-api.dextools.io/trial/v2/token/arbitrum/0x3b55804e532c4d7c47894d5ed89a89a5ff103fe2/price';

    // Pool price-volume
    async function fetchPoolData() {
        try {
            const response = await fetch(urlpoolprice, {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'x-api-key': apiKey
                }
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            let volume24h = data?.data?.volume24h;
    
            if (volume24h === null || volume24h === undefined) {
                volume24h = 0; // Set to zero if null or undefined
            }
    
            document.getElementById('volume24h').innerText = `$${volume24h.toFixed(0)}`;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('volume24h').innerText = 'Failed to load data';
        }
    }
    fetchPoolData();
    
    // Token info-mcap
    async function fetchTokenMcap() {
        try {
            const response = await fetch(urltokeninfo, {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'x-api-key': apiKey
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            let mcap = data?.data?.mcap;

            if (mcap === null) {
                mcap = 0; // Set to zero if null
            }

            document.getElementById('mcap').innerText = `$${mcap}`;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('mcap').innerText = 'Failed to load data';
        }
    }
    fetchTokenMcap();
    
    // Token info-change
    async function fetchTokenChange() {
        try {
            const response = await fetch(urltokenprice, {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'x-api-key': apiKey
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            let variation24h = data?.data?.variation24h;

            if (variation24h === null) {
                variation24h = 0; // Set to zero if null
            }

            document.getElementById('variation24h').innerText = `${variation24h.toFixed(2)}%`;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('variation24h').innerText = 'Failed to load data';
        }
    }
    fetchTokenChange();

    //Token Price-price
    async function fetchTokenDataPrice() {
        try {
            const response = await fetch(urltokenprice, {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'x-api-key': apiKey
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            let price = data?.data?.price;

            if (price === null) {
                price = 0; // Set to zero if null
            }

            document.getElementById('price').innerText = `$${price.toFixed(4)}`;
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('price').innerText = 'Failed to load data';
        }
    }
    fetchTokenDataPrice();

    const video = document.getElementById('background-video');
    const audio = document.getElementById('background-audio');
    const button = document.getElementById('play-button');
  
    // Add event listener to the button
    button.addEventListener('click', function() {
        // Play the video and audio on button click
        video.play();
        audio.play();
    });
});

var typed = new Typed(".typed-words", {
    strings: ["Hello I am a mayor representing Anthropos City - the first virtual city in the world. Our goal is to provide tools to help create the new mentally and physically strong generation."],
    typeSpeed: 40,
    backSpeed: 50,
    backDelay: 800,
    startDelay: 500,
    delay: 400,
    loop: false,
    showCursor: false,
    cursorChar: "|",
    attr: null,
});
  
var typed2 = new Typed(".typed-words2", {
    strings: ["Welcome to Anthropos City"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 800,
    startDelay: 500,
    loop: false,
    showCursor: false,
    cursorChar: "|",
    attr: null,
});
