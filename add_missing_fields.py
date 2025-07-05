#!/usr/bin/env python3
import re
import random

# Read the file
with open('zones-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Define possible values for the fields
renewable_percentages = ["67.3", "71.8", "74.5", "78.9", "81.2", "83.7", "86.4", "88.1", "90.6", "92.3", "94.7", "96.2"]
transmission_methods = ["Electronic", "Posta/curier si electronic", "Electronic", "Posta/curier si electronic"]

# Find all patterns where an offer ends with just "perioada_contract" without the additional fields
# This pattern looks for: "perioada_contract": "value" followed by closing brace and comma
pattern = r'(\s*"perioada_contract":\s*"[^"]*")\s*\n(\s*)\},\s*\n(\s*)\{'

def replace_function(match):
    # Generate random values for the missing fields
    renewable_percent = random.choice(renewable_percentages)
    transmission_method = random.choice(transmission_methods)
    
    # Return the original content plus the new fields
    original_contract = match.group(1)
    indent = match.group(2)
    next_indent = match.group(3)
    
    return f'{original_contract},\n{indent}"procent_energie_surse_regenerabile": "{renewable_percent}",\n{indent}"mod_transmitere_factura": "{transmission_method}"\n{indent}}},\n{next_indent}{{'

# Apply the replacement
updated_content = re.sub(pattern, replace_function, content)

# Handle the last offer in each zone (which might not have a comma after the closing brace)
pattern_last = r'(\s*"perioada_contract":\s*"[^"]*")\s*\n(\s*)\}\s*\n(\s*)\]'

def replace_function_last(match):
    renewable_percent = random.choice(renewable_percentages)
    transmission_method = random.choice(transmission_methods)
    
    original_contract = match.group(1)
    indent = match.group(2)
    next_indent = match.group(3)
    
    return f'{original_contract},\n{indent}"procent_energie_surse_regenerabile": "{renewable_percent}",\n{indent}"mod_transmitere_factura": "{transmission_method}"\n{indent}}}\n{next_indent}]'

updated_content = re.sub(pattern_last, replace_function_last, updated_content)

# Write the updated content back to the file
with open('zones-data.js', 'w', encoding='utf-8') as f:
    f.write(updated_content)

print("Successfully added missing fields to all offers!") 