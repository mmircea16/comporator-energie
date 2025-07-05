# Energy Comparator API Client

A Python script to fetch energy offers from the Romanian energy comparator API (POSF).

## Installation

1. Create a virtual environment:
```bash
python3 -m venv venv
```

2. Activate the virtual environment:
```bash
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

## Usage

### Basic Usage

Run the script directly (make sure the virtual environment is activated):
```bash
source venv/bin/activate && python energy_comparator.py
```

Alternatively, if the virtual environment is already activated:
```bash
python energy_comparator.py
```

### Using the Function

You can also import and use the function in your own code:

```python
from energy_comparator import get_energy_offers

# Get energy offers with default parameters
offers = get_energy_offers()

# Get energy offers with custom parameters
offers = get_energy_offers(
    consum_anual=1500,
    consum_lunar=125,
    id_zona=3
)
```

## Parameters

The `get_energy_offers()` function accepts the following parameters:

- `tip_oferta` (int): Type of offer (default: 1)
- `data_start_aplicare` (str): Start date for application (default: "05-07-2025")
- `tip_client` (str): Type of client (default: "casnic")
- `tip_pret` (str): Type of price (default: "nediferentiat")
- `consum_anual` (int): Annual consumption in kWh (default: 1200)
- `consum_lunar` (int): Monthly consumption in kWh (default: 100)
- `nivel_tensiune` (str): Voltage level (default: "JT_")
- `id_zona` (int): Zone ID (default: 6)
- `tip_produs` (int): Product type (default: 0)

## Logging

The script logs all activity to:
- Console output
- `energy_comparator.log` file

## Example Output

The script will log information about the API request and response, including:
- Request parameters
- Response status and headers
- Number of offers received
- Full API response (formatted JSON)
- Summary of the first 3 offers 