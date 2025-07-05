"""
Complete County to Zone Mapping for Romanian Energy Comparator
"""

COUNTY_TO_ZONE_MAPPING = {
    "Alba": 3,
    "Arad": 1,
    "Arges": 6,
    "Bacau": 4,
    "Bihor": 2,
    "Bistrita-Nasaud": 2,
    "Botosani": 4,
    "Braila": 5,
    "Brasov": 3,
    "Bucuresti": 7,
    "Buzau": 5,
    "Calarasi": 8,
    "Caras-Severin": 1,
    "Cluj": 2,
    "Constanta": 8,
    "Covasna": 3,
    "Dambovita": 5,
    "Dolj": 6,
    "Galati": 5,
    "Giurgiu": 7,
    "Gorj": 6,
    "Harghita": 3,
    "Hunedoara": 1,
    "Ialomita": 8,
    "Iasi": 4,
    "Ilfov": 7,
    "Maramures": 2,
    "Mehedinti": 6,
    "Mures": 3,
    "Neamt": 4,
    "Olt": 6,
    "Prahova": 5,
    "Salaj": 2,
    "Satu Mare": 2,
    "Sibiu": 3,
    "Suceava": 4,
    "Teleorman": 6,
    "Timis": 1,
    "Tulcea": 8,
    "Valcea": 6,
    "Vaslui": 4,
    "Vrancea": 5,
}

def get_zone_by_county(county_name):
    """Get zone ID by county name."""
    return COUNTY_TO_ZONE_MAPPING.get(county_name)

def get_all_counties():
    """Get all available counties."""
    return list(COUNTY_TO_ZONE_MAPPING.keys())

def get_all_zones():
    """Get all available zone IDs."""
    return list(set(COUNTY_TO_ZONE_MAPPING.values()))

def get_counties_by_zone(zone_id):
    """Get all counties for a specific zone."""
    return [county for county, zone in COUNTY_TO_ZONE_MAPPING.items() if zone == zone_id]

def print_zone_summary():
    """Print a summary of all zones and their counties."""
    zones = get_all_zones()
    for zone in sorted(zones):
        counties = get_counties_by_zone(zone)
        print(f"Zone {zone}: {len(counties)} counties")
        for county in sorted(counties):
            print(f"  - {county}")
        print()
