# Simple React Hello World

A basic React webpage that displays "Hello World!" when you click a button.

## How to Run

### Standalone Version (Recommended)
1. Open `index-standalone.html` directly in your web browser
2. No server required - all data is embedded in the HTML file
3. Select a Romanian county from the dropdown to see its energy zone
4. The page will automatically display available energy offers for that zone
5. Browse through the offers table to compare prices and contract terms

## Features

- Simple React component using hooks (useState)
- Clean, responsive design
- County dropdown with all Romanian counties
- Zone information display for selected county
- Dynamic loading of energy offers for selected county's zone
- Displays offer details: name, supplier, final price, and contract period
- Responsive table with hover effects and scrollable content

## Data Coverage

- **593 total offers** across 8 energy zones
- **42 Romanian counties** with zone mapping
- **Essential offer details**: name, supplier, price, contract period
- **Real energy market data** from Romanian energy comparator

## No Build Tools Required

This uses React via CDN links, so no npm, webpack, or other build tools are needed. Just open the HTML file in any modern web browser! 