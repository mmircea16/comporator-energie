import requests
import logging
import json
from typing import Optional, Dict, Any, Union, List
from datetime import datetime
import os

# Import the complete county zone mapping
from complete_county_zone_mapping import get_all_zones, get_counties_by_zone

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
    valoare_factura_curenta: str = "",
    nivel_tensiune: str = "JT_",
    id_zona: int = 6,
    tip_produs: int = 0
) -> Optional[Union[List[Dict[Any, Any]], Dict[Any, Any]]]:
    """
    Makes a GET request to the Romanian energy comparator API and logs the response.
    
    Args:
        tip_oferta (int): Type of offer (1 for all offers)
        data_start_aplicare (str): Start date for application (DD-MM-YYYY)
        tip_client (str): Type of client ("casnic" for residential)
        tip_pret (str): Type of price ("nediferentiat" for non-differentiated)
        consum_anual (int): Annual consumption in kWh
        consum_lunar (int): Monthly consumption in kWh
        valoare_factura_curenta (str): Current bill value
        nivel_tensiune (str): Voltage level ("JT_" for low voltage)
        id_zona (int): Zone ID (1-8)
        tip_produs (int): Product type (0 for electricity)
    
    Returns:
        Optional[Dict[Any, Any]]: API response as dictionary, or None if error
    """
    
    # API endpoint
    url = "https://posf.ro/api/v1/comparator"
    
    # Parameters for the GET request
    params = {
        "request": "comparator-electric",
        "tip_oferta": tip_oferta,
        "data_start_aplicare": data_start_aplicare,
        "tip_client": tip_client,
        "tip_pret": tip_pret,
        "consum_anual": consum_anual,
        "consum_lunar": consum_lunar,
        "valoare_factura_curenta": valoare_factura_curenta,
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
        logger.info(f"Making API request for zone {id_zona}...")
        logger.info(f"Parameters: {params}")
        
        # Make the GET request
        response = requests.get(url, params=params)
        
        # Log response details
        logger.info(f"Response Status Code: {response.status_code}")
        logger.info(f"Response Headers: {dict(response.headers)}")
        
        # Check if request was successful
        if response.status_code == 200:
            try:
                # Parse JSON response
                data = response.json()
                logger.info("API request successful!")
                
                # Log summary information
                if isinstance(data, list):
                    logger.info(f"Received {len(data)} offers")
                    if len(data) > 0:
                        logger.info("First 3 offers:")
                        for i, offer in enumerate(data[:3]):
                            logger.info(f"  Offer {i+1}: {offer.get('nume_furnizor', 'N/A')} - {offer.get('pret_kwh', 'N/A')} RON/kWh")
                elif isinstance(data, dict):
                    logger.info(f"Received response with keys: {list(data.keys())}")
                
                # Pretty print the full response
                logger.info("Full API Response:")
                logger.info(json.dumps(data, indent=2, ensure_ascii=False))
                
                return data
                
            except json.JSONDecodeError as e:
                logger.error(f"Failed to parse JSON response: {e}")
                logger.error(f"Response content: {response.text}")
                return None
                
        else:
            logger.error(f"API request failed with status code: {response.status_code}")
            logger.error(f"Response content: {response.text}")
            return None
            
    except requests.exceptions.RequestException as e:
        logger.error(f"Request failed: {e}")
        return None
    except Exception as e:
        logger.error(f"Unexpected error: {e}")
        return None

def capture_all_zones_data(
    consum_anual: int = 1200,
    consum_lunar: int = 100,
    output_dir: str = "zone_data"
) -> Dict[int, bool]:
    """
    Capture energy offers data for all zones and save to separate files.
    
    Args:
        consum_anual (int): Annual consumption in kWh
        consum_lunar (int): Monthly consumption in kWh
        output_dir (str): Directory to save zone data files
    
    Returns:
        Dict[int, bool]: Dictionary mapping zone IDs to success status
    """
    logger.info("=== Capturing Energy Offers for All Zones ===")
    
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Get all available zones
    zones = get_all_zones()
    logger.info(f"Found {len(zones)} zones to process: {sorted(zones)}")
    
    results = {}
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    
    for zone_id in sorted(zones):
        logger.info(f"\n--- Processing Zone {zone_id} ---")
        
        # Get counties for this zone
        counties = get_counties_by_zone(zone_id)
        logger.info(f"Zone {zone_id} counties: {', '.join(sorted(counties))}")
        
        # Get energy offers for this zone
        offers = get_energy_offers(
            id_zona=zone_id,
            consum_anual=consum_anual,
            consum_lunar=consum_lunar
        )
        
        if offers:
            # Create filename with zone ID and timestamp
            filename = f"zone_{zone_id}_offers_{timestamp}.json"
            filepath = os.path.join(output_dir, filename)
            
            # Prepare data to save
            zone_data = {
                "zone_id": zone_id,
                "counties": sorted(counties),
                "timestamp": datetime.now().isoformat(),
                "consumption_annual": consum_anual,
                "consumption_monthly": consum_lunar,
                "offers_count": len(offers) if isinstance(offers, list) else 1,
                "offers": offers
            }
            
            try:
                # Save to file
                with open(filepath, 'w', encoding='utf-8') as f:
                    json.dump(zone_data, f, indent=2, ensure_ascii=False)
                
                logger.info(f"✓ Zone {zone_id} data saved to {filename}")
                logger.info(f"  Counties: {len(counties)}")
                logger.info(f"  Offers: {zone_data['offers_count']}")
                
                results[zone_id] = True
                
            except Exception as e:
                logger.error(f"✗ Failed to save data for zone {zone_id}: {e}")
                results[zone_id] = False
        else:
            logger.warning(f"✗ No data received for zone {zone_id}")
            results[zone_id] = False
    
    # Log summary
    logger.info(f"\n=== ZONE DATA CAPTURE SUMMARY ===")
    successful_zones = [zone for zone, success in results.items() if success]
    failed_zones = [zone for zone, success in results.items() if not success]
    
    logger.info(f"Successfully captured: {len(successful_zones)} zones")
    if successful_zones:
        logger.info(f"  Success zones: {sorted(successful_zones)}")
    
    if failed_zones:
        logger.info(f"Failed to capture: {len(failed_zones)} zones")
        logger.info(f"  Failed zones: {sorted(failed_zones)}")
    
    logger.info(f"Output directory: {output_dir}")
    logger.info(f"Files created: zone_X_offers_{timestamp}.json")
    
    return results

def main():
    """
    Main function to demonstrate the energy comparator functionality.
    """
    logger.info("=== Romanian Energy Comparator ===")
    
    # Option 1: Get offers for a specific zone
    logger.info("\n1. Getting offers for Zone 6 (default)...")
    offers = get_energy_offers()
    
    if offers:
        logger.info("✓ Successfully retrieved offers for Zone 6")
    else:
        logger.error("✗ Failed to retrieve offers for Zone 6")
    
    # Option 2: Capture data for all zones
    logger.info("\n2. Capturing data for all zones...")
    results = capture_all_zones_data()
    
    successful_count = sum(1 for success in results.values() if success)
    total_count = len(results)
    
    logger.info(f"\n=== FINAL SUMMARY ===")
    logger.info(f"Zones processed: {total_count}")
    logger.info(f"Successfully captured: {successful_count}")
    logger.info(f"Success rate: {successful_count/total_count*100:.1f}%")

if __name__ == "__main__":
    main() 