from flask import Flask, jsonify, render_template
import requests

app = Flask(__name__)

apiKey = '8Fs3phbiI63XIG4WO2lBe83X8STE2ioC42BldAsS'
urlpoolprice = 'https://public-api.dextools.io/trial/v2/pool/arbitrum/0x874cda82c3e797d3bdab4057560af1f756cc24a4/price'
urltokeninfo = 'https://public-api.dextools.io/trial/v2/token/arbitrum/0x3b55804e532c4d7c47894d5ed89a89a5ff103fe2/info'
urltokenprice = 'https://public-api.dextools.io/trial/v2/token/arbitrum/0x3b55804e532c4d7c47894d5ed89a89a5ff103fe2/price'

headers = {
    'accept': 'application/json',
    'x-api-key': apiKey
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/poolprice')
def get_pool_price():
    try:
        response = requests.get(urlpoolprice, headers=headers)
        response.raise_for_status()
        data = response.json()
        volume24h = data.get('data', {}).get('volume24h', 0)
        return jsonify({'volume24h': volume24h})
    except requests.RequestException as error:
        return jsonify({'error': str(error)})

@app.route('/api/tokenmcap')
def get_token_mcap():
    try:
        response = requests.get(urltokeninfo, headers=headers)
        response.raise_for_status()
        data = response.json()
        mcap = data.get('data', {}).get('mcap', 0)
        return jsonify({'mcap': mcap})
    except requests.RequestException as error:
        return jsonify({'error': str(error)})

@app.route('/api/tokenchange')
def get_token_change():
    try:
        response = requests.get(urltokenprice, headers=headers)
        response.raise_for_status()
        data = response.json()
        variation24h = data.get('data', {}).get('variation24h', 0)
        return jsonify({'variation24h': variation24h})
    except requests.RequestException as error:
        return jsonify({'error': str(error)})

@app.route('/api/tokenprice')
def get_token_price():
    try:
        response = requests.get(urltokenprice, headers=headers)
        response.raise_for_status()
        data = response.json()
        price = data.get('data', {}).get('price', 0)
        return jsonify({'price': price})
    except requests.RequestException as error:
        return jsonify({'error': str(error)})

if __name__ == '__main__':
    app.run(debug=True)
