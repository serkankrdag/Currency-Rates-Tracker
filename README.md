# Currency Rates Live Tracker

This is a JavaScript program that fetches and displays real-time exchange rates for USD and EUR.

## Installation

To run this program, you need to have Node.js installed on your machine. Once you have Node.js installed, you can clone this repository or download the files to your computer.

## Installation

1. Open your terminal or command prompt.
2. Navigate to the directory where the program files are located.
3. Run the command `node index.js`.
4. Copy the bot token and add it to the `config.py` file.
5. The program will start fetching and displaying the exchange rates every 10 seconds.

## Notes

- The program uses the exchangeratesapi.io API to fetch the exchange rates.
- The exchange rates are displayed in the format "USD: 1 = EUR: X", where X is the current exchange rate.
- The program will continue to fetch and display the exchange rates every 10 seconds until you stop it by pressing `Ctrl+C` in your terminal or command prompt.
- If there is an error fetching the exchange rates, the program will display the error message in the console. 
