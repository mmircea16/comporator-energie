import requests
import logging
import json
from typing import Optional, Dict, Any

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('energy_comparator.log'),
        logging.StreamHandler()
    ]
)

logger = logging.getLogger(__name__)

def get_energy_offers(
    tip_oferta: int = 1,
    data_start_aplicare: str = "05-07-2025",
    tip_client: str = "casnic",
    tip_pret: str = "nediferentiat",
    consum_anual: int = 1200,
    consum_lunar: int = 100,
    nivel_tensiune: str = "JT_",
    id_zona: int = 6,
    tip_produs: int = 0
) -> Optional[Dict[Any, Any]]:
    """
    Makes a GET request to the Romanian energy comparator API and logs the response.
    
    Args:
        tip_oferta (int): Type of offer (default: 1)
        data_start_aplicare (str): Start date for application (default: "05-07-2025")
        tip_client (str): Type of client (default: "casnic")
        tip_pret (str): Type of price (default: "nediferentiat")
        consum_anual (int): Annual consumption in kWh (default: 1200)
        consum_lunar (int): Monthly consumption in kWh (default: 100)
        nivel_tensiune (str): Voltage level (default: "JT_")
        id_zona (int): Zone ID (default: 6)
        tip_produs (int): Product type (default: 0)
    
    Returns:
        Optional[Dict[Any, Any]]: The API response as a dictionary, or None if request fails
    """
    
    base_url = "https://posf.ro/api/v1/comparator"
    
    params = {
        "request": "comparator-electric",
        "tip_oferta": tip_oferta,
        "data_start_aplicare": data_start_aplicare,
        "tip_client": tip_client,
        "tip_pret": tip_pret,
        "consum_anual": consum_anual,
        "consum_lunar": consum_lunar,
        "valoare_factura_curenta": "",
        "nivel_tensiune": nivel_tensiune,
        "id_zona": id_zona,
        "tip_produs": tip_produs,
        "perioada_contract": "",
        "energie_regenerabila": "",
        "factura_electronica": "",
        "frecventa_emitere_factura": "",
        "procent_zona_noapte": "",
        "procent_zona_zi": "",
        "frecventa_citire_contor": "",
        "valoare_fixa": ""
    }
    
    try:
        logger.info(f"Making GET request to {base_url}")
        logger.info(f"Parameters: {params}")
        
        response = requests.get(base_url, params=params, timeout=30)
        response.raise_for_status()  # Raises an HTTPError for bad responses
        
        # Parse JSON response
        data = response.json()
        
        # Log the response
        logger.info(f"Request successful. Status code: {response.status_code}")
        logger.info(f"Response headers: {dict(response.headers)}")
        logger.info(f"Number of offers received: {len(data) if isinstance(data, list) else 'N/A'}")
        
        # Log the full response (pretty printed)
        logger.info("Full API Response:")
        logger.info(json.dumps(data, indent=2, ensure_ascii=False))
        
        return data
        
    except requests.exceptions.RequestException as e:
        logger.error(f"Request failed: {e}")
        return None
    except json.JSONDecodeError as e:
        logger.error(f"Failed to parse JSON response: {e}")
        logger.error(f"Raw response: {response.text}")
        return None
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        return None

def main():
    """Main function to test the energy comparator API call."""
    logger.info("Starting energy comparator API call...")
    
    # Make the API call with default parameters
    offers = get_energy_offers()
    
    if offers:
        logger.info("API call completed successfully!")
        if isinstance(offers, list):
            logger.info(f"Retrieved {len(offers)} energy offers")
            for i, offer in enumerate(offers[:3]):  # Log first 3 offers summary
                logger.info(f"Offer {i+1}: {offer.get('denumire_oferta', 'N/A')} - "
                           f"Price: {offer.get('pret_final', 'N/A')} lei/kWh")
        else:
            logger.info("Response is not a list of offers")
    else:
        logger.error("API call failed!")

if __name__ == "__main__":
    main() 