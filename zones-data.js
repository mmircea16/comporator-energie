// Energy zones data and county mapping for Romania
// This file contains all the energy offers organized by zones and the county-to-zone mapping

const zonesData = {
  "1": {
    "zone_id": 1,
    "counties": [
      "Arad",
      "Caras-Severin",
      "Hunedoara",
      "Timis"
    ],
    "offers_count": 73,
    "offers": [
      {
        "denumire_oferta": "Oferta HE Viitor Hidro - Banat_JT",
        "nume_furnizor": "SPEEH HIDROELECTRICA",
        "pret_final": "1.04",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "NOVA_EE_C_3 luni_01.07.2025_Banat_JT",
        "nume_furnizor": "NOVA POWER & GAS S.R.L.",
        "pret_final": "1.27",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - EDB JT 2025",
        "nume_furnizor": "Tinmar Energy",
        "pret_final": "1.31",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "FIX 24",
        "nume_furnizor": "Grenerg SRL",
        "pret_final": "1.31",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "Dinamic One Casnic",
        "nume_furnizor": "Grenerg SRL",
        "pret_final": "1.31",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "NOVA_EE_C_12 luni_01.07.2025_Banat_JT",
        "nume_furnizor": "NOVA POWER & GAS S.R.L.",
        "pret_final": "1.32",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta_ casnici _ RER (zona Banat ) JT _iunie - iulie.2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.35",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta_ casnici _ RER (zona Banat ) MT _ iunie - iulie 2025 ",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.35",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta_ casnici _ RER (zona Banat ) MT _iunie - iulie 2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.35",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta_ casnici _ RER (zona Banat ) MT _iulie 2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.35",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "entera SWITCH_Client Casnic zona Banat",
        "nume_furnizor": "ENERGY TECH ENTERA SRL",
        "pret_final": "1.36",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "CORE RESIDENTIAL",
        "nume_furnizor": "ENERGY CORE DEVELOPMENT SRL",
        "pret_final": "1.39",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Ampero Verde Online 03.07-15.07.2025_Banat_JT",
        "nume_furnizor": "ENGIE Romania",
        "pret_final": "1.41",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Stabil 30_Banat",
        "nume_furnizor": " ELECTRICA FURNIZARE S.A.",
        "pret_final": "1.42",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "CLIENTI FINALI CASNIC CONCURENTIAL_01.07.2025-31.07.2025",
        "nume_furnizor": "NEXT ENERGY PARTNERS S.R.L.",
        "pret_final": "1.42",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "ppc energie verde Banat",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.43",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "OFERTA TIP PENTRU FURNIZAREA ENERGIEI ELECTRICE CONSUMATOR CASNIC BANAT",
        "nume_furnizor": "ANCHOR GRUP S.A.",
        "pret_final": "1.43",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Duo Assist PRO",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.44",
        "perioada_contract": "2 ani"
      },
      {
        "denumire_oferta": "Ampero Verde 03.07-15.07.2025_Banat_JT",
        "nume_furnizor": "ENGIE Romania",
        "pret_final": "1.45",
        "perioada_contract": "intre 1 an si 2 ani"
      },
      {
        "denumire_oferta": "E.ON Duo Assist",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.45",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - EDB JT 2025",
        "nume_furnizor": "Tinmar Energy",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - REB JT",
        "nume_furnizor": "AMV SOLAR S.R.L.",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - REB JT",
        "nume_furnizor": "M.D.A. Energy",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - REB JT",
        "nume_furnizor": "MAR-TIN SOLAR ENERGY S.R.L.",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - REB JT",
        "nume_furnizor": "TINMAR GREEN ENERGY S.R.L.",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - REB JT",
        "nume_furnizor": "SOLPRIM",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - REB JT",
        "nume_furnizor": "EYE MALL",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Assist Electric Plus",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.45",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "E.ON Duo",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Casnic JT (01.07.2025 pana la 31.07.2025) RETELE ELECTRICE BANAT SA",
        "nume_furnizor": "GETICA 95 COM",
        "pret_final": "1.45",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Casnic JT (01.07.2025 pana la 31.07.2025) RETELE ELECTRICE BANAT SA",
        "nume_furnizor": "GETICA 95 COM",
        "pret_final": "1.45",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Met Casnici Retele Electrice Banat",
        "nume_furnizor": "MET ROMANIA ENERGY SRL",
        "pret_final": "1.46",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta_EE_tip_casnic_general_MVM",
        "nume_furnizor": "MVM FUTURE ENERGY TECHNOLOGY S.R.L.",
        "pret_final": "1.46",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Green Home",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.47",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Start Electric",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.48",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta energie electrica casnic PCC00151",
        "nume_furnizor": "OMV Petrom SA",
        "pret_final": "1.48",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - EDB JT iulie 2025",
        "nume_furnizor": "LORD ENERGY SRL",
        "pret_final": "1.48",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta concurentiala client casnic Banat",
        "nume_furnizor": "SC ICCO ENERG SRL",
        "pret_final": "1.48",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip Furnizare Energie Electrica pentru consumatorii casnici - BANAT - iulie 2025",
        "nume_furnizor": "Monsson Trading S.R.L.",
        "pret_final": "1.51",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "oferta vanzare ee casnici cod CEO018",
        "nume_furnizor": "SOCIETATEA COMPLEXUL ENERGETIC OLTENIA S.A.",
        "pret_final": "1.51",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Casnic Banat",
        "nume_furnizor": "Cotroceni Park SA",
        "pret_final": "1.51",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "PE REZIDENTIAL ONLINE",
        "nume_furnizor": "PREMIER ENERGY FURNIZARE S.A.",
        "pret_final": "1.53",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Luxten casnic JT_LLCC01072025BN",
        "nume_furnizor": "LUXTEN LIGHTING COMPANY SA",
        "pret_final": "1.53",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "CASNIC01",
        "nume_furnizor": "DIGI ROMANIA S.A.",
        "pret_final": "1.53",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "ppc simplu online Banat",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.54",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta energie electrica valabila pentru perioada 01.07-31.12.2025 - Banat - casnic JT",
        "nume_furnizor": "ENTREX SERVICES SRL",
        "pret_final": "1.54",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "ppc simplu anual Banat ",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.55",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "E.ON Home Electric",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.56",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Renovatio Casnic JT BN 2025",
        "nume_furnizor": "RENOVATIO TRADING SRL",
        "pret_final": "1.58",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici",
        "nume_furnizor": "Energy Distribution Services",
        "pret_final": "1.58",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Tip Client Casnic DES888BNT33",
        "nume_furnizor": "Dacia Energy Solutions",
        "pret_final": "1.61",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "OFERTA_Casnic_JT_07.2025_Banat",
        "nume_furnizor": "EAST WIND FARM SRL",
        "pret_final": "1.63",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic Banat JT",
        "nume_furnizor": "ELECTRICOM S.A.",
        "pret_final": "1.66",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic BN MT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "1.69",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic BN JT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "1.69",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici BN JT",
        "nume_furnizor": "VIMETCO MANAGEMENT ROMANIA SRL",
        "pret_final": "1.69",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "OFERTA PENTRU CLIENTII CASNICI",
        "nume_furnizor": "EFT FURNIZARE S.R.L.",
        "pret_final": "1.70",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "OFERTA PENTRU CLIENTII CASNICI",
        "nume_furnizor": "EFT POWER S.R.L.",
        "pret_final": "1.70",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "18.06.25.GES Rezidential Retele Electrice Romania_JT",
        "nume_furnizor": "Ges Furnizare SRL",
        "pret_final": "1.70",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare clienti casnici",
        "nume_furnizor": "TERMO PLOIESTI",
        "pret_final": "1.82",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip C Banat JT",
        "nume_furnizor": "AUCHAN RENEWABLE ENERGY",
        "pret_final": "1.82",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip PLENERG Banat JT",
        "nume_furnizor": "PLENERG S.R.L",
        "pret_final": "1.87",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumator casnic -  Banat JT",
        "nume_furnizor": "Eol Energy S.R.L.",
        "pret_final": "1.87",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici JT Banat ALR107",
        "nume_furnizor": "ALRO S.A.",
        "pret_final": "1.93",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Standard- clienti casnici  JT -E-Distribuție Banat 100-255",
        "nume_furnizor": "INGKA INVESTMENTS RENEWABLE ENERGY  ROMANIA S.R.L.",
        "pret_final": "1.93",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Standard- clienti casnici  JT -E-Distribuție Banat 0-100",
        "nume_furnizor": "INGKA INVESTMENTS RENEWABLE ENERGY  ROMANIA S.R.L.",
        "pret_final": "1.93",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica perioada 01.07.2025 - 30.06.2026",
        "nume_furnizor": "PHOTOVOLTAIC GREEN PROJECT S.R.L.",
        "pret_final": "1.93",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica perioada 01.07.2025 - 30.06.2026",
        "nume_furnizor": "Transenergo Microhidro SRL",
        "pret_final": "1.93",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica client casnic ",
        "nume_furnizor": "TRANSENERGO COM S.A.",
        "pret_final": "1.93",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Flexi consumator casnic_REB_JT",
        "nume_furnizor": "COOPERATIVADEENERGIE FURNIZARE",
        "pret_final": "2.20",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic BN JT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "2.29",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic BN MT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "2.29",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "Oferta Werk Casnic Banat JT",
        "nume_furnizor": "WERK ENERGY SRL",
        "pret_final": "2.29",
        "perioada_contract": "1 an"
      }
    ]
  },
  "2": {
    "zone_id": 2,
    "counties": [
      "Bihor",
      "Bistrita-Nasaud",
      "Cluj",
      "Maramures",
      "Salaj",
      "Satu Mare"
    ],
    "offers_count": 75,
    "offers": [
      {
        "denumire_oferta": "Oferta HE Viitor Hidro - Transilvania Nord_JT",
        "nume_furnizor": "SPEEH HIDROELECTRICA",
        "pret_final": "1.11",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "NOVA_EE_C_3 luni_01.07.2025_Transilvania Nord_JT",
        "nume_furnizor": "NOVA POWER & GAS S.R.L.",
        "pret_final": "1.33",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "FIX 24",
        "nume_furnizor": "Grenerg SRL",
        "pret_final": "1.37",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "NOVA_EE_C_12 luni_01.07.2025_Transilvania Nord_JT",
        "nume_furnizor": "NOVA POWER & GAS S.R.L.",
        "pret_final": "1.38",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta EE_ casnici  _ DEER(zona TN) _ JT _iunie - iulie.2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.41",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta EE_ casnici  _ DEER(zona TN) _ JT _iunie - iulie2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.41",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta EE_ casnici  _ DEER(zona TN) _ JT _IULIE2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.41",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "entera SWITCH_Client Casnic zona Transilvania Nord",
        "nume_furnizor": "ENERGY TECH ENTERA SRL",
        "pret_final": "1.43",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "CORE RESIDENTIAL",
        "nume_furnizor": "ENERGY CORE DEVELOPMENT SRL",
        "pret_final": "1.46",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Ampero Verde Online 03.07-15.07.2025_Transilvania Nord_JT",
        "nume_furnizor": "ENGIE Romania",
        "pret_final": "1.47",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Stabil 30_Transilvania Nord",
        "nume_furnizor": " ELECTRICA FURNIZARE S.A.",
        "pret_final": "1.49",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "CLIENTI FINALI CASNIC CONCURENTIAL_01.07.2025-31.07.2025",
        "nume_furnizor": "NEXT ENERGY PARTNERS S.R.L.",
        "pret_final": "1.49",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "ppc energie verde Transilvania Nord",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.50",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "OFERTA TIP PENTRU FURNIZAREA ENERGIEI ELECTRICE CONSUMATOR CASNIC DEER",
        "nume_furnizor": "ANCHOR GRUP S.A.",
        "pret_final": "1.50",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Duo Assist PRO",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.51",
        "perioada_contract": "2 ani"
      },
      {
        "denumire_oferta": "Ampero Verde 03.07-15.07.2025_Transilvania Nord_JT",
        "nume_furnizor": "ENGIE Romania",
        "pret_final": "1.51",
        "perioada_contract": "intre 1 an si 2 ani"
      },
      {
        "denumire_oferta": "E.ON Duo Assist",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.52",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER TN JT 2025",
        "nume_furnizor": "Tinmar Energy",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER TN JT",
        "nume_furnizor": "AMV SOLAR S.R.L.",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER TN",
        "nume_furnizor": "M.D.A. Energy",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER TN",
        "nume_furnizor": "MAR-TIN SOLAR ENERGY S.R.L.",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - TN JT 2025",
        "nume_furnizor": "TINMAR GREEN ENERGY S.R.L.",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER TN JT ",
        "nume_furnizor": "SOLPRIM",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER TN JT",
        "nume_furnizor": "EYE MALL",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Assist Electric Plus",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.52",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "E.ON Duo",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Casnic JT (01.07.2025 pana la 31.07.2025) DEER SA TN",
        "nume_furnizor": "GETICA 95 COM",
        "pret_final": "1.52",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Casnic JT (01.07.2025 pana la 31.07.2025) DEER SA TN",
        "nume_furnizor": "GETICA 95 COM",
        "pret_final": "1.52",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Met Casnici SDEE Transilvania Nord",
        "nume_furnizor": "MET ROMANIA ENERGY SRL",
        "pret_final": "1.52",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta_EE_tip_casnic_general_MVM",
        "nume_furnizor": "MVM FUTURE ENERGY TECHNOLOGY S.R.L.",
        "pret_final": "1.53",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Green Home",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.54",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Start Electric",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.54",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta energie electrica casnic PCC00157",
        "nume_furnizor": "OMV Petrom SA",
        "pret_final": "1.55",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER TN JT iulie 2025",
        "nume_furnizor": "LORD ENERGY SRL",
        "pret_final": "1.55",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta concurentiala client casnic Transilvania Nord",
        "nume_furnizor": "SC ICCO ENERG SRL",
        "pret_final": "1.55",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip Furnizare Energie Electrica pentru consumatorii casnici - TRANSILVANIA NORD - iulie 2025",
        "nume_furnizor": "Monsson Trading S.R.L.",
        "pret_final": "1.58",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "oferta vanzare ee casnici cod CEO019",
        "nume_furnizor": "SOCIETATEA COMPLEXUL ENERGETIC OLTENIA S.A.",
        "pret_final": "1.58",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Energy GO - TRANSILVANIA NORD_ JT",
        "nume_furnizor": "RESTART ENERGY ONE SA",
        "pret_final": "1.59",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "PE REZIDENTIAL ONLINE",
        "nume_furnizor": "PREMIER ENERGY FURNIZARE S.A.",
        "pret_final": "1.59",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Luxten casnic JT_LLCC01072025TN",
        "nume_furnizor": "LUXTEN LIGHTING COMPANY SA",
        "pret_final": "1.59",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "CASNIC01",
        "nume_furnizor": "DIGI ROMANIA S.A.",
        "pret_final": "1.60",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "ppc simplu online Transilvania Nord",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.61",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta energie electrica valabila pentru perioada 01.07-31.12.2025 - Transilvania Nord - casnic JT",
        "nume_furnizor": "ENTREX SERVICES SRL",
        "pret_final": "1.61",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "ppc simplu anual Transilvania Nord",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.62",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "E.ON Home Electric",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.63",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Renovatio Casnic JT OT 2025",
        "nume_furnizor": "RENOVATIO TRADING SRL",
        "pret_final": "1.64",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici",
        "nume_furnizor": "Energy Distribution Services",
        "pret_final": "1.65",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Tip Client Casnic DES888TNT33",
        "nume_furnizor": "Dacia Energy Solutions",
        "pret_final": "1.68",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "OFERTA_Casnic_JT_07.2025",
        "nume_furnizor": "EAST WIND FARM SRL",
        "pret_final": "1.70",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic Transilvania Nord JT",
        "nume_furnizor": "ELECTRICOM S.A.",
        "pret_final": "1.73",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic TN MT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "1.76",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic TN MT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "1.76",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic TN MT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "1.76",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic TN MT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "1.76",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic TN JT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "1.76",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici TN JT",
        "nume_furnizor": "VIMETCO MANAGEMENT ROMANIA SRL",
        "pret_final": "1.76",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "OFERTA PENTRU CLIENTII CASNICI",
        "nume_furnizor": "EFT FURNIZARE S.R.L.",
        "pret_final": "1.76",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "OFERTA PENTRU CLIENTII CASNICI",
        "nume_furnizor": "EFT POWER S.R.L.",
        "pret_final": "1.76",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "18.06.25.GES Rezidential DEER_JT",
        "nume_furnizor": "Ges Furnizare SRL",
        "pret_final": "1.76",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "0525.GES Rezidential DEER_JT",
        "nume_furnizor": "Ges Furnizare SRL",
        "pret_final": "1.76",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare clienti casnici",
        "nume_furnizor": "TERMO PLOIESTI",
        "pret_final": "1.88",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip C Transilvania Nord JT",
        "nume_furnizor": "AUCHAN RENEWABLE ENERGY",
        "pret_final": "1.89",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip PLENERG Transilvania Nord JT",
        "nume_furnizor": "PLENERG S.R.L",
        "pret_final": "1.93",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumator casnic -  Transilvania Nord JT",
        "nume_furnizor": "Eol Energy S.R.L.",
        "pret_final": "1.94",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici JT Transilvania Nord ALR103",
        "nume_furnizor": "ALRO S.A.",
        "pret_final": "2.00",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica perioada 01.07.2025 - 30.06.2026",
        "nume_furnizor": "PHOTOVOLTAIC GREEN PROJECT S.R.L.",
        "pret_final": "2.00",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica perioada 01.07.2025 - 30.06.2026",
        "nume_furnizor": "Transenergo Microhidro SRL",
        "pret_final": "2.00",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica client casnic ",
        "nume_furnizor": "TRANSENERGO COM S.A.",
        "pret_final": "2.00",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Standard- clienti casnici  JT - DEER SDEE Transilvania Nord 100-255",
        "nume_furnizor": "INGKA INVESTMENTS RENEWABLE ENERGY  ROMANIA S.R.L.",
        "pret_final": "2.00",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Standard- clienti casnici  JT - DEER SDEE Transilvania Nord 0-100",
        "nume_furnizor": "INGKA INVESTMENTS RENEWABLE ENERGY  ROMANIA S.R.L.",
        "pret_final": "2.00",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Flexi consumator casnic_DEERTN_JT",
        "nume_furnizor": "COOPERATIVADEENERGIE FURNIZARE",
        "pret_final": "2.27",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Flexi consumator casnic_DEERTN_JT",
        "nume_furnizor": "COOPERATIVADEENERGIE FURNIZARE",
        "pret_final": "2.27",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic TN JT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "2.35",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic TN MT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "2.35",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "Oferta Werk Casnic Transilvania Nord JT",
        "nume_furnizor": "WERK ENERGY SRL",
        "pret_final": "2.36",
        "perioada_contract": "1 an"
      }
    ]
  },
  "3": {
    "zone_id": 3,
    "counties": [
      "Alba",
      "Brasov",
      "Covasna",
      "Harghita",
      "Mures",
      "Sibiu"
    ],
    "offers_count": 76,
    "offers": [
      {
        "denumire_oferta": "Oferta HE Viitor Hidro - Transilvania Sud_JT",
        "nume_furnizor": "SPEEH HIDROELECTRICA",
        "pret_final": "1.11",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "NOVA_EE_C_3 luni_01.07.2025_Transilvania Sud_JT",
        "nume_furnizor": "NOVA POWER & GAS S.R.L.",
        "pret_final": "1.33",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "FIX 24",
        "nume_furnizor": "Grenerg SRL",
        "pret_final": "1.37",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "NOVA_EE_C_12 luni_01.07.2025_Transilvania Sud_JT",
        "nume_furnizor": "NOVA POWER & GAS S.R.L.",
        "pret_final": "1.38",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta casnic _ DEER (zona TS) JT - iunie - iulie.2025 ",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.41",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic _ DEER (zona TS) JT - iunie - iulie 2025 ",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.41",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta EE_ casnici  _ DEER(zona TN) _ JT _IULIE2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.41",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "entera SWITCH_Client Casnic zona Transilvania Sud",
        "nume_furnizor": "ENERGY TECH ENTERA SRL",
        "pret_final": "1.43",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "CORE RESIDENTIAL",
        "nume_furnizor": "ENERGY CORE DEVELOPMENT SRL",
        "pret_final": "1.46",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Ampero Verde Online 03.07-15.07.2025_Transilvania Sud_JT",
        "nume_furnizor": "ENGIE Romania",
        "pret_final": "1.47",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Stabil 30_Transilvania Sud",
        "nume_furnizor": " ELECTRICA FURNIZARE S.A.",
        "pret_final": "1.49",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "CLIENTI FINALI CASNIC CONCURENTIAL_01.07.2025-31.07.2025",
        "nume_furnizor": "NEXT ENERGY PARTNERS S.R.L.",
        "pret_final": "1.49",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "ppc energie verde Transilvania Sud",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.50",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "OFERTA TIP PENTRU FURNIZAREA ENERGIEI ELECTRICE CONSUMATOR CASNIC DEER",
        "nume_furnizor": "ANCHOR GRUP S.A.",
        "pret_final": "1.50",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Duo Assist PRO",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.51",
        "perioada_contract": "2 ani"
      },
      {
        "denumire_oferta": "Ampero Verde 03.07-15.07.2025_Transilvania Sud_JT",
        "nume_furnizor": "ENGIE Romania",
        "pret_final": "1.51",
        "perioada_contract": "intre 1 an si 2 ani"
      },
      {
        "denumire_oferta": "E.ON Duo Assist",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.52",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER TS JT 2025",
        "nume_furnizor": "Tinmar Energy",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER TS JT",
        "nume_furnizor": "AMV SOLAR S.R.L.",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER TS",
        "nume_furnizor": "M.D.A. Energy",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER TS",
        "nume_furnizor": "MAR-TIN SOLAR ENERGY S.R.L.",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER TS",
        "nume_furnizor": "TINMAR GREEN ENERGY S.R.L.",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER TS JT",
        "nume_furnizor": "SOLPRIM",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER TS JT",
        "nume_furnizor": "EYE MALL",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Assist Electric Plus",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.52",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "E.ON Duo",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Casnic JT (01.07.2025 pana la 31.07.2025) DEER SA TS",
        "nume_furnizor": "GETICA 95 COM",
        "pret_final": "1.52",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Casnic JT (01.07.2025 pana la 31.07.2025) DEER SA TS",
        "nume_furnizor": "GETICA 95 COM",
        "pret_final": "1.52",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Met Casnici SDEE Transilvania Sud",
        "nume_furnizor": "MET ROMANIA ENERGY SRL",
        "pret_final": "1.52",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta_EE_tip_casnic_general_MVM",
        "nume_furnizor": "MVM FUTURE ENERGY TECHNOLOGY S.R.L.",
        "pret_final": "1.53",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Green Home",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.54",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Start Electric",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.54",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta energie electrica casnic PCC00158",
        "nume_furnizor": "OMV Petrom SA",
        "pret_final": "1.55",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER TS JT iulie 2025",
        "nume_furnizor": "LORD ENERGY SRL",
        "pret_final": "1.55",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta concurentiala client casnic Transilvania Sud",
        "nume_furnizor": "SC ICCO ENERG SRL",
        "pret_final": "1.55",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip Furnizare Energie Electrica pentru consumatorii casnici - TRANSILVANIA SUD - iulie 2025",
        "nume_furnizor": "Monsson Trading S.R.L.",
        "pret_final": "1.58",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "oferta vanzare ee casnici cod CEO020",
        "nume_furnizor": "SOCIETATEA COMPLEXUL ENERGETIC OLTENIA S.A.",
        "pret_final": "1.58",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Casnic Transilvania Sud",
        "nume_furnizor": "Cotroceni Park SA",
        "pret_final": "1.58",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Energy GO - TRANSILVANIA SUD_ JT",
        "nume_furnizor": "RESTART ENERGY ONE SA",
        "pret_final": "1.59",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "PE REZIDENTIAL ONLINE",
        "nume_furnizor": "PREMIER ENERGY FURNIZARE S.A.",
        "pret_final": "1.59",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Luxten casnic JT_LLCC01072025TS",
        "nume_furnizor": "LUXTEN LIGHTING COMPANY SA",
        "pret_final": "1.59",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "CASNIC01",
        "nume_furnizor": "DIGI ROMANIA S.A.",
        "pret_final": "1.60",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "ppc simplu online Transilvania Sud",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.61",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta energie electrica valabila pentru perioada 01.07-31.12.2025 - Transilvania Sud - casnic JT",
        "nume_furnizor": "ENTREX SERVICES SRL",
        "pret_final": "1.61",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "ppc simplu anual Transilvania Sud",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.62",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "E.ON Home Electric",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.63",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Renovatio Casnic JT TS 2025",
        "nume_furnizor": "RENOVATIO TRADING SRL",
        "pret_final": "1.64",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Renovatio Casnic JT 2025",
        "nume_furnizor": "RENOVATIO TRADING SRL",
        "pret_final": "1.64",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici",
        "nume_furnizor": "Energy Distribution Services",
        "pret_final": "1.65",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta GV7 casnic zona Transilvania Sud",
        "nume_furnizor": "Green Vision Seven SRL",
        "pret_final": "1.65",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Tip Client Casnic DES888TST33",
        "nume_furnizor": "Dacia Energy Solutions",
        "pret_final": "1.68",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "OFERTA_Casnic_JT_07.2025",
        "nume_furnizor": "EAST WIND FARM SRL",
        "pret_final": "1.70",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic Transilvania Sud JT",
        "nume_furnizor": "ELECTRICOM S.A.",
        "pret_final": "1.73",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic TS MT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "1.76",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic TS JT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "1.76",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici TS JT",
        "nume_furnizor": "VIMETCO MANAGEMENT ROMANIA SRL",
        "pret_final": "1.76",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "OFERTA PENTRU CLIENTII CASNICI",
        "nume_furnizor": "EFT FURNIZARE S.R.L.",
        "pret_final": "1.76",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "OFERTA PENTRU CLIENTII CASNICI",
        "nume_furnizor": "EFT POWER S.R.L.",
        "pret_final": "1.76",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "18.06.25.GES Rezidential DEER_JT",
        "nume_furnizor": "Ges Furnizare SRL",
        "pret_final": "1.76",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "0525.GES Rezidential DEER_JT",
        "nume_furnizor": "Ges Furnizare SRL",
        "pret_final": "1.76",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare clienti casnici",
        "nume_furnizor": "TERMO PLOIESTI",
        "pret_final": "1.88",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip C Transilvania Sud JT",
        "nume_furnizor": "AUCHAN RENEWABLE ENERGY",
        "pret_final": "1.89",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip PLENERG Transilvania Sud JT",
        "nume_furnizor": "PLENERG S.R.L",
        "pret_final": "1.93",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumator casnic -  Transilvania Sud JT",
        "nume_furnizor": "Eol Energy S.R.L.",
        "pret_final": "1.94",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici JT Transilvania Sud ALR104",
        "nume_furnizor": "ALRO S.A.",
        "pret_final": "2.00",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica perioada 01.07.2025 - 30.06.2026",
        "nume_furnizor": "PHOTOVOLTAIC GREEN PROJECT S.R.L.",
        "pret_final": "2.00",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica perioada 01.07.2025 - 30.06.2026",
        "nume_furnizor": "Transenergo Microhidro SRL",
        "pret_final": "2.00",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta Standard- clienti casnici  JT - DEER SDEE Transilvania Sud 0-100",
        "nume_furnizor": "INGKA INVESTMENTS RENEWABLE ENERGY  ROMANIA S.R.L.",
        "pret_final": "2.00",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta consumator casnic incepand cu 01.07.2025",
        "nume_furnizor": "Elcata MHC SRL",
        "pret_final": "2.00",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta Standard- clienti casnici  JT - DEER SDEE Transilvania Sud 100-255",
        "nume_furnizor": "INGKA INVESTMENTS RENEWABLE ENERGY  ROMANIA S.R.L.",
        "pret_final": "2.00",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Flexi consumator casnic_DEERTS_JT",
        "nume_furnizor": "COOPERATIVADEENERGIE FURNIZARE",
        "pret_final": "2.27",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Flexi consumator casnic_DEERTS_JT",
        "nume_furnizor": "COOPERATIVADEENERGIE FURNIZARE",
        "pret_final": "2.27",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic TS JT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "2.35",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic TS MT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "2.35",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "Oferta consumator casnic",
        "nume_furnizor": "Elcata MHC SRL",
        "pret_final": "2.36",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta Werk Casnic Transilvania Sud JT",
        "nume_furnizor": "WERK ENERGY SRL",
        "pret_final": "2.36",
        "perioada_contract": "1 an"
      }
    ]
  },
  "4": {
    "zone_id": 4,
    "counties": [
      "Bacau",
      "Botosani",
      "Iasi",
      "Neamt",
      "Suceava",
      "Vaslui"
    ],
    "offers_count": 73,
    "offers": [
      {
        "denumire_oferta": "Oferta HE Viitor Hidro - Moldova_DelgazGrid_JT",
        "nume_furnizor": "SPEEH HIDROELECTRICA",
        "pret_final": "1.11",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "NOVA_EE_C_3 luni_01.07.2025_Moldova_JT",
        "nume_furnizor": "NOVA POWER & GAS S.R.L.",
        "pret_final": "1.34",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "FIX 24",
        "nume_furnizor": "Grenerg SRL",
        "pret_final": "1.38",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "NOVA_EE_C_12 luni_01.07.2025_Moldova_JT",
        "nume_furnizor": "NOVA POWER & GAS S.R.L.",
        "pret_final": "1.39",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta EE_ casnici _ Delgaz _ JT_iunie - iulie.2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.42",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta EE_ casnici _ Delgaz _ JT_iunie - iulie 2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.42",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta _ casnic _ Delgaz _ JT _iulie 2025 ",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.42",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta EE_ casnici _ Delgaz _ JT_IULIE 2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.42",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "entera SWITCH_Client Casnic zona Moldova",
        "nume_furnizor": "ENERGY TECH ENTERA SRL",
        "pret_final": "1.43",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "CORE RESIDENTIAL",
        "nume_furnizor": "ENERGY CORE DEVELOPMENT SRL",
        "pret_final": "1.46",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Ampero Verde Online 03.07-15.07.2025_Moldova_JT",
        "nume_furnizor": "ENGIE Romania",
        "pret_final": "1.48",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Stabil 30_Moldova",
        "nume_furnizor": " ELECTRICA FURNIZARE S.A.",
        "pret_final": "1.49",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "CLIENTI FINALI CASNIC CONCURENTIAL_01.07.2025-31.07.2025",
        "nume_furnizor": "NEXT ENERGY PARTNERS S.R.L.",
        "pret_final": "1.49",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "ppc energie verde Moldova",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.50",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "OFERTA TIP PENTRU FURNIZAREA ENERGIEI ELECTRICE CONSUMATOR CASNIC MOLDOVA",
        "nume_furnizor": "ANCHOR GRUP S.A.",
        "pret_final": "1.50",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Duo Assist PRO",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.51",
        "perioada_contract": "2 ani"
      },
      {
        "denumire_oferta": "Ampero Verde 03.07-15.07.2025_Moldova_JT",
        "nume_furnizor": "ENGIE Romania",
        "pret_final": "1.52",
        "perioada_contract": "intre 1 an si 2 ani"
      },
      {
        "denumire_oferta": "E.ON Duo Assist",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.52",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DELGAZ JT 2025",
        "nume_furnizor": "Tinmar Energy",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DELGAZ JT",
        "nume_furnizor": "AMV SOLAR S.R.L.",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DELGAZ JT",
        "nume_furnizor": "M.D.A. Energy",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DELGAZ JT",
        "nume_furnizor": "MAR-TIN SOLAR ENERGY S.R.L.",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DELGAZ JT",
        "nume_furnizor": "TINMAR GREEN ENERGY S.R.L.",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DELGAZ JT",
        "nume_furnizor": "SOLPRIM",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DELGAZ JT",
        "nume_furnizor": "EYE MALL",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Assist Electric Plus",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.52",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "E.ON Duo",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Casnic JT (01.07.2025 pana la 31.07.2025) DELGAZ GRID SA",
        "nume_furnizor": "GETICA 95 COM",
        "pret_final": "1.52",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Casnic JT (01.07.2025 pana la 31.07.2025) DELGAZ GRID SA",
        "nume_furnizor": "GETICA 95 COM",
        "pret_final": "1.52",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Met Casnici Delgaz Grid ",
        "nume_furnizor": "MET ROMANIA ENERGY SRL",
        "pret_final": "1.53",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta_EE_tip_casnic_general_MVM",
        "nume_furnizor": "MVM FUTURE ENERGY TECHNOLOGY S.R.L.",
        "pret_final": "1.53",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Green Home",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.54",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Start Electric",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.55",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta energie electrica casnic PCC00153",
        "nume_furnizor": "OMV Petrom SA",
        "pret_final": "1.55",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DELGAZ JT iulie 2025",
        "nume_furnizor": "LORD ENERGY SRL",
        "pret_final": "1.55",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta concurentiala client casnic Moldova",
        "nume_furnizor": "SC ICCO ENERG SRL",
        "pret_final": "1.55",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip Furnizare Energie Electrica pentru consumatorii casnici - MOLDOVA - iulie 2025",
        "nume_furnizor": "Monsson Trading S.R.L.",
        "pret_final": "1.58",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "oferta vanzare ee casnici cod CEO016",
        "nume_furnizor": "SOCIETATEA COMPLEXUL ENERGETIC OLTENIA S.A.",
        "pret_final": "1.58",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Casnic Moldova",
        "nume_furnizor": "Cotroceni Park SA",
        "pret_final": "1.58",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Energy GO - MOLDOVA _ JT",
        "nume_furnizor": "RESTART ENERGY ONE SA",
        "pret_final": "1.59",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "PE REZIDENTIAL ONLINE",
        "nume_furnizor": "PREMIER ENERGY FURNIZARE S.A.",
        "pret_final": "1.60",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Luxten casnic JT_LLCC01072025MD",
        "nume_furnizor": "LUXTEN LIGHTING COMPANY SA",
        "pret_final": "1.60",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "CASNIC01",
        "nume_furnizor": "DIGI ROMANIA S.A.",
        "pret_final": "1.60",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "ppc simplu online Moldova",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.61",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta energie electrica valabila pentru perioada 01.07-31.12.2025 - Moldova - casnic JT",
        "nume_furnizor": "ENTREX SERVICES SRL",
        "pret_final": "1.61",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "ppc simplu anual Moldova",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.62",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "E.ON Home Electric",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.63",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Renovatio Casnic JT MD 2025",
        "nume_furnizor": "RENOVATIO TRADING SRL",
        "pret_final": "1.65",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici",
        "nume_furnizor": "Energy Distribution Services",
        "pret_final": "1.65",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Tip Client Casnic DES888MLD33",
        "nume_furnizor": "Dacia Energy Solutions",
        "pret_final": "1.68",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "OFERTA_Casnic_JT_07.2025_Moldova",
        "nume_furnizor": "EAST WIND FARM SRL",
        "pret_final": "1.70",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic Moldova JT",
        "nume_furnizor": "ELECTRICOM S.A.",
        "pret_final": "1.73",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic MD MT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "1.76",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic MD JT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "1.76",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici MD JT",
        "nume_furnizor": "VIMETCO MANAGEMENT ROMANIA SRL",
        "pret_final": "1.76",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "OFERTA PENTRU CLIENTII CASNICI",
        "nume_furnizor": "EFT FURNIZARE S.R.L.",
        "pret_final": "1.77",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "OFERTA PENTRU CLIENTII CASNICI",
        "nume_furnizor": "EFT POWER S.R.L.",
        "pret_final": "1.77",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "18.06.25.GES Rezidential Delgaz Grid_JT",
        "nume_furnizor": "Ges Furnizare SRL",
        "pret_final": "1.77",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare clienti casnici",
        "nume_furnizor": "TERMO PLOIESTI",
        "pret_final": "1.89",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip C Moldova JT",
        "nume_furnizor": "AUCHAN RENEWABLE ENERGY",
        "pret_final": "1.89",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip PLENERG Moldova JT",
        "nume_furnizor": "PLENERG S.R.L",
        "pret_final": "1.94",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumator casnic -  Moldova JT",
        "nume_furnizor": "Eol Energy S.R.L.",
        "pret_final": "1.94",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici JT Moldova ALR106",
        "nume_furnizor": "ALRO S.A.",
        "pret_final": "2.00",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica perioada 01.07.2025 - 30.06.2026",
        "nume_furnizor": "PHOTOVOLTAIC GREEN PROJECT S.R.L.",
        "pret_final": "2.00",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica perioada 01.07.2025 - 30.06.2026",
        "nume_furnizor": "Transenergo Microhidro SRL",
        "pret_final": "2.00",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta Standard- clienti casnici  JT - Delgaz Grid 100-255",
        "nume_furnizor": "INGKA INVESTMENTS RENEWABLE ENERGY  ROMANIA S.R.L.",
        "pret_final": "2.00",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Standard- clienti casnici  JT - Delgaz Grid 0-100",
        "nume_furnizor": "INGKA INVESTMENTS RENEWABLE ENERGY  ROMANIA S.R.L.",
        "pret_final": "2.00",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Flexi consumator casnic_Delgaz_JT",
        "nume_furnizor": "COOPERATIVADEENERGIE FURNIZARE",
        "pret_final": "2.27",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Flexi consumator casnic_Delgaz_IT",
        "nume_furnizor": "COOPERATIVADEENERGIE FURNIZARE",
        "pret_final": "2.27",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Flexi consumator casnic_Delgaz_JT",
        "nume_furnizor": "COOPERATIVADEENERGIE FURNIZARE",
        "pret_final": "2.27",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic MD JT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "2.36",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic MD MT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "2.36",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "Oferta Werk Casnic Moldova JT",
        "nume_furnizor": "WERK ENERGY SRL",
        "pret_final": "2.36",
        "perioada_contract": "1 an"
      }
    ]
  },
  "5": {
    "zone_id": 5,
    "counties": [
      "Braila",
      "Buzau",
      "Dambovita",
      "Galati",
      "Prahova",
      "Vrancea"
    ],
    "offers_count": 69,
    "offers": [
      {
        "denumire_oferta": "Oferta HE Viitor Hidro - Muntenia Nord_JT",
        "nume_furnizor": "SPEEH HIDROELECTRICA",
        "pret_final": "1.11",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "NOVA_EE_C_3 luni_01.07.2025_Muntenia Nord_JT",
        "nume_furnizor": "NOVA POWER & GAS S.R.L.",
        "pret_final": "1.33",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "FIX 24",
        "nume_furnizor": "Grenerg SRL",
        "pret_final": "1.37",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "NOVA_EE_C_12 luni_01.07.2025_Muntenia Nord_JT",
        "nume_furnizor": "NOVA POWER & GAS S.R.L.",
        "pret_final": "1.38",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta EE_ casnici  _ DEER(zona MN) _ JT _iunie - iulie2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.41",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta EE_ casnici  _ DEER(zona MN) _ JT _iunie - iulie2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.41",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta noncasnic_ DEER (MN) JT  - iunie - iulie 2025 ",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.41",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta_ casnici _ DEER (zona MN)_ JT_IULIE 2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.41",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "entera SWITCH_Client Casnic zona Muntenia Nord",
        "nume_furnizor": "ENERGY TECH ENTERA SRL",
        "pret_final": "1.43",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "CORE RESIDENTIAL",
        "nume_furnizor": "ENERGY CORE DEVELOPMENT SRL",
        "pret_final": "1.46",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Ampero Verde Online 03.07-15.07.2025_Muntenia Nord_JT",
        "nume_furnizor": "ENGIE Romania",
        "pret_final": "1.47",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Stabil 30_Muntenia Nord",
        "nume_furnizor": " ELECTRICA FURNIZARE S.A.",
        "pret_final": "1.49",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "CLIENTI FINALI CASNIC CONCURENTIAL_01.07.2025-31.07.2025",
        "nume_furnizor": "NEXT ENERGY PARTNERS S.R.L.",
        "pret_final": "1.49",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "ppc energie verde Muntenia Nord",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.50",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "OFERTA TIP PENTRU FURNIZAREA ENERGIEI ELECTRICE CONSUMATOR CASNIC DEER",
        "nume_furnizor": "ANCHOR GRUP S.A.",
        "pret_final": "1.50",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Duo Assist PRO",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.51",
        "perioada_contract": "2 ani"
      },
      {
        "denumire_oferta": "Ampero Verde 03.07-15.07.2025_Muntenia Nord_JT",
        "nume_furnizor": "ENGIE Romania",
        "pret_final": "1.51",
        "perioada_contract": "intre 1 an si 2 ani"
      },
      {
        "denumire_oferta": "E.ON Duo Assist",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.52",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER MN JT 2025",
        "nume_furnizor": "Tinmar Energy",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER MN JT",
        "nume_furnizor": "AMV SOLAR S.R.L.",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER MN",
        "nume_furnizor": "M.D.A. Energy",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER MN",
        "nume_furnizor": "MAR-TIN SOLAR ENERGY S.R.L.",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER MN",
        "nume_furnizor": "TINMAR GREEN ENERGY S.R.L.",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER MN JT",
        "nume_furnizor": "EYE MALL",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER MN JT",
        "nume_furnizor": "SOLPRIM",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Assist Electric Plus",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.52",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "E.ON Duo",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.52",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Casnic JT (01.07.2025 pana la 31.07.2025) DEER SA MN",
        "nume_furnizor": "GETICA 95 COM",
        "pret_final": "1.52",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Met Casnici SDEE Muntenia Nord",
        "nume_furnizor": "MET ROMANIA ENERGY SRL",
        "pret_final": "1.52",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta_EE_tip_casnic_general_MVM",
        "nume_furnizor": "MVM FUTURE ENERGY TECHNOLOGY S.R.L.",
        "pret_final": "1.53",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Green Home",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.54",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Start Electric",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.54",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta energie electrica casnic PCC00154",
        "nume_furnizor": "OMV Petrom SA",
        "pret_final": "1.55",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEER MN JT iulie 2025",
        "nume_furnizor": "LORD ENERGY SRL",
        "pret_final": "1.55",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta concurentiala client casnic Muntenia Nord",
        "nume_furnizor": "SC ICCO ENERG SRL",
        "pret_final": "1.55",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip Furnizare Energie Electrica pentru consumatorii casnici - MUNTENIA NORD - iulie 2025",
        "nume_furnizor": "Monsson Trading S.R.L.",
        "pret_final": "1.58",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "oferta vanzare ee casnici cod CEO015",
        "nume_furnizor": "SOCIETATEA COMPLEXUL ENERGETIC OLTENIA S.A.",
        "pret_final": "1.58",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Casnic Muntenia Nord",
        "nume_furnizor": "Cotroceni Park SA",
        "pret_final": "1.58",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Energy GO - MUNTENIA NORD _ JT",
        "nume_furnizor": "RESTART ENERGY ONE SA",
        "pret_final": "1.59",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "PE REZIDENTIAL ONLINE",
        "nume_furnizor": "PREMIER ENERGY FURNIZARE S.A.",
        "pret_final": "1.59",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Luxten casnic JT_LLCC01072025MN",
        "nume_furnizor": "LUXTEN LIGHTING COMPANY SA",
        "pret_final": "1.59",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "CASNIC01",
        "nume_furnizor": "DIGI ROMANIA S.A.",
        "pret_final": "1.60",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "ppc simplu online Muntenia Nord",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.61",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta energie electrica valabila pentru perioada 01.07-31.12.2025 - Muntenia Nord - casnic JT",
        "nume_furnizor": "ENTREX SERVICES SRL",
        "pret_final": "1.61",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "ppc simplu anual Muntenia Nord",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.62",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "E.ON Home Electric",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.63",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Renovatio Casnic JT MN 2025",
        "nume_furnizor": "RENOVATIO TRADING SRL",
        "pret_final": "1.64",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici",
        "nume_furnizor": "Energy Distribution Services",
        "pret_final": "1.65",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Tip Client Casnic DES888MTN33",
        "nume_furnizor": "Dacia Energy Solutions",
        "pret_final": "1.68",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "OFERTA_Casnic_JT_07.2025_MN",
        "nume_furnizor": "EAST WIND FARM SRL",
        "pret_final": "1.70",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic Muntenia Nord JT",
        "nume_furnizor": "ELECTRICOM S.A.",
        "pret_final": "1.73",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic MN JT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "1.76",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici MN JT",
        "nume_furnizor": "VIMETCO MANAGEMENT ROMANIA SRL",
        "pret_final": "1.76",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "OFERTA PENTRU CLIENTII CASNICI",
        "nume_furnizor": "EFT FURNIZARE S.R.L.",
        "pret_final": "1.76",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "OFERTA PENTRU CLIENTII CASNICI",
        "nume_furnizor": "EFT POWER S.R.L.",
        "pret_final": "1.76",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "18.06.25.GES Rezidential DEER_JT",
        "nume_furnizor": "Ges Furnizare SRL",
        "pret_final": "1.76",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare clienti casnici",
        "nume_furnizor": "TERMO PLOIESTI",
        "pret_final": "1.88",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip C Muntenia Nord JT",
        "nume_furnizor": "AUCHAN RENEWABLE ENERGY",
        "pret_final": "1.89",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumator casnic -  Muntenia Nord JT",
        "nume_furnizor": "Eol Energy S.R.L.",
        "pret_final": "1.94",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici JT Muntenia Nord ALR101",
        "nume_furnizor": "ALRO S.A.",
        "pret_final": "2.00",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Standard- clienti casnici  JT - DEER SDEE Muntenia Nord 100-255",
        "nume_furnizor": "INGKA INVESTMENTS RENEWABLE ENERGY  ROMANIA S.R.L.",
        "pret_final": "2.00",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica perioada 01.07.2025 - 30.06.2026",
        "nume_furnizor": "PHOTOVOLTAIC GREEN PROJECT S.R.L.",
        "pret_final": "2.00",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica perioada 01.07.2025 - 30.06.2026",
        "nume_furnizor": "Transenergo Microhidro SRL",
        "pret_final": "2.00",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica client casnic ",
        "nume_furnizor": "TRANSENERGO COM S.A.",
        "pret_final": "2.00",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Standard- clienti casnici  JT - DEER SDEE Muntenia Nord 0-100KWh",
        "nume_furnizor": "INGKA INVESTMENTS RENEWABLE ENERGY  ROMANIA S.R.L.",
        "pret_final": "2.00",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Flexi consumator casnic_DEERMN_JT",
        "nume_furnizor": "COOPERATIVADEENERGIE FURNIZARE",
        "pret_final": "2.27",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Flexi consumator casnic_DEERMN_JT",
        "nume_furnizor": "COOPERATIVADEENERGIE FURNIZARE",
        "pret_final": "2.27",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic MN JT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "2.35",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "Oferta Werk Casnic Muntenia Nord JT",
        "nume_furnizor": "WERK ENERGY SRL",
        "pret_final": "2.36",
        "perioada_contract": "1 an"
      }
    ]
  },
  "6": {
    "zone_id": 6,
    "counties": [
      "Arges",
      "Dolj",
      "Gorj",
      "Mehedinti",
      "Olt",
      "Teleorman",
      "Valcea"
    ],
    "offers_count": 77,
    "offers": [
      {
        "denumire_oferta": "Oferta HE Viitor Hidro - Oltenia_JT",
        "nume_furnizor": "SPEEH HIDROELECTRICA",
        "pret_final": "1.12",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "NOVA_EE_C_3 luni_01.07.2025_Oltenia_JT",
        "nume_furnizor": "NOVA POWER & GAS S.R.L.",
        "pret_final": "1.35",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "FIX 24",
        "nume_furnizor": "Grenerg SRL",
        "pret_final": "1.39",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "NOVA_EE_C_12 luni_01.07.2025_Oltenia_JT",
        "nume_furnizor": "NOVA POWER & GAS S.R.L.",
        "pret_final": "1.40",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta EE_ casnic _ DEO JT_ iunie - iulie.2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.43",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta EE_ casnic _ DEO JT_ iunie - iulie 2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.43",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta EE_ casnic _ DEO JT_ IULIE 2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.43",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta EE_ casnic _ DEO MT_ IULIE 2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.43",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "entera SWITCH_Client Casnic zona Oltenia",
        "nume_furnizor": "ENERGY TECH ENTERA SRL",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "CORE RESIDENTIAL",
        "nume_furnizor": "ENERGY CORE DEVELOPMENT SRL",
        "pret_final": "1.47",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica perioada 01.07.2025 - 30.06.2026",
        "nume_furnizor": "Transenergo Microhidro SRL",
        "pret_final": "1.48",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Ampero Verde Online 03.07-15.07.2025_Oltenia_JT",
        "nume_furnizor": "ENGIE Romania",
        "pret_final": "1.49",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Stabil 30_Oltenia",
        "nume_furnizor": " ELECTRICA FURNIZARE S.A.",
        "pret_final": "1.50",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "CLIENTI FINALI CASNIC CONCURENTIAL_01.07.2025-31.07.2025",
        "nume_furnizor": "NEXT ENERGY PARTNERS S.R.L.",
        "pret_final": "1.51",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "ppc energie verde Oltenia",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.51",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "OFERTA TIP PENTRU FURNIZAREA ENERGIEI ELECTRICE CONSUMATOR CASNIC OLTENIA",
        "nume_furnizor": "ANCHOR GRUP S.A.",
        "pret_final": "1.51",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Duo Assist PRO",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.52",
        "perioada_contract": "2 ani"
      },
      {
        "denumire_oferta": "Ampero Verde 03.07-15.07.2025_Oltenia_JT",
        "nume_furnizor": "ENGIE Romania",
        "pret_final": "1.53",
        "perioada_contract": "intre 1 an si 2 ani"
      },
      {
        "denumire_oferta": "E.ON Duo Assist",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.53",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEO JT 2025",
        "nume_furnizor": "Tinmar Energy",
        "pret_final": "1.53",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEO JT",
        "nume_furnizor": "AMV SOLAR S.R.L.",
        "pret_final": "1.53",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEO JT",
        "nume_furnizor": "M.D.A. Energy",
        "pret_final": "1.53",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEO JT",
        "nume_furnizor": "MAR-TIN SOLAR ENERGY S.R.L.",
        "pret_final": "1.53",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEO JT",
        "nume_furnizor": "TINMAR GREEN ENERGY S.R.L.",
        "pret_final": "1.53",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEO JT",
        "nume_furnizor": "SOLPRIM",
        "pret_final": "1.53",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEO JT",
        "nume_furnizor": "EYE MALL",
        "pret_final": "1.53",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Assist Electric Plus",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.53",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "E.ON Duo",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.54",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Casnic JT (01.07.2025 pana la 31.07.2025) DEO SA",
        "nume_furnizor": "GETICA 95 COM",
        "pret_final": "1.54",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Casnic JT (01.07.2025 pana la 31.07.2025) DEO SA",
        "nume_furnizor": "GETICA 95 COM",
        "pret_final": "1.54",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Met Casnici Distributie Oltenia",
        "nume_furnizor": "MET ROMANIA ENERGY SRL",
        "pret_final": "1.54",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta_EE_tip_casnic_general_MVM",
        "nume_furnizor": "MVM FUTURE ENERGY TECHNOLOGY S.R.L.",
        "pret_final": "1.54",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Green Home",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.55",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Green Home",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.55",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "E.ON Start Electric",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.56",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta energie electrica casnic PCC00156",
        "nume_furnizor": "OMV Petrom SA",
        "pret_final": "1.56",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - DEO JT iulie 2025",
        "nume_furnizor": "LORD ENERGY SRL",
        "pret_final": "1.56",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta concurentiala client casnic Oltenia",
        "nume_furnizor": "SC ICCO ENERG SRL",
        "pret_final": "1.56",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip Furnizare Energie Electrica pentru consumatorii casnici - OLTENIA - iulie 2025",
        "nume_furnizor": "Monsson Trading S.R.L.",
        "pret_final": "1.60",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Casnic Oltenia",
        "nume_furnizor": "Cotroceni Park SA",
        "pret_final": "1.60",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "oferta vanzare ee casnici cod CEO013",
        "nume_furnizor": "SOCIETATEA COMPLEXUL ENERGETIC OLTENIA S.A.",
        "pret_final": "1.60",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "PE REZIDENTIAL ONLINE",
        "nume_furnizor": "PREMIER ENERGY FURNIZARE S.A.",
        "pret_final": "1.61",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Luxten casnic JT_LLCC01072025OT",
        "nume_furnizor": "LUXTEN LIGHTING COMPANY SA",
        "pret_final": "1.61",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "CASNIC01",
        "nume_furnizor": "DIGI ROMANIA S.A.",
        "pret_final": "1.61",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "ppc simplu online Oltenia",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.62",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta energie electrica valabila pentru perioada 01.07-31.12.2025 - Oltenia - casnic JT",
        "nume_furnizor": "ENTREX SERVICES SRL",
        "pret_final": "1.62",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "ppc simplu anual Oltenia",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.63",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "E.ON Home Electric",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.64",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Renovatio Casnic JT OT 2025",
        "nume_furnizor": "RENOVATIO TRADING SRL",
        "pret_final": "1.66",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici",
        "nume_furnizor": "Energy Distribution Services",
        "pret_final": "1.66",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Tip Client Casnic DES888OLT33",
        "nume_furnizor": "Dacia Energy Solutions",
        "pret_final": "1.69",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "OFERTA_Casnic_JT_07.2025_Oltenia",
        "nume_furnizor": "EAST WIND FARM SRL",
        "pret_final": "1.72",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic Oltenia JT",
        "nume_furnizor": "ELECTRICOM S.A.",
        "pret_final": "1.75",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic OT MT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "1.77",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic OT JT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "1.77",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici OT JT",
        "nume_furnizor": "VIMETCO MANAGEMENT ROMANIA SRL",
        "pret_final": "1.78",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "OFERTA PENTRU CLIENTII CASNICI",
        "nume_furnizor": "EFT FURNIZARE S.R.L.",
        "pret_final": "1.78",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "OFERTA PENTRU CLIENTII CASNICI",
        "nume_furnizor": "EFT POWER S.R.L.",
        "pret_final": "1.78",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "18.06.25.GES Rezidential Distributie Oltenia_JT",
        "nume_furnizor": "Ges Furnizare SRL",
        "pret_final": "1.78",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare clienti casnici",
        "nume_furnizor": "TERMO PLOIESTI",
        "pret_final": "1.90",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip C Oltenia JT",
        "nume_furnizor": "AUCHAN RENEWABLE ENERGY",
        "pret_final": "1.91",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip PLENERG Oltenia JT",
        "nume_furnizor": "PLENERG S.R.L",
        "pret_final": "1.95",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumator casnic -  Oltenia JT",
        "nume_furnizor": "Eol Energy S.R.L.",
        "pret_final": "1.96",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici JT Oltenia ALR105",
        "nume_furnizor": "ALRO S.A.",
        "pret_final": "2.01",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica perioada 01.07.2025 - 30.06.2026",
        "nume_furnizor": "PHOTOVOLTAIC GREEN PROJECT S.R.L.",
        "pret_final": "2.01",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica perioada 01.07.2025 - 30.06.2026",
        "nume_furnizor": "Transenergo Microhidro SRL",
        "pret_final": "2.01",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica client casnic ",
        "nume_furnizor": "TRANSENERGO COM S.A.",
        "pret_final": "2.01",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica client casnic ",
        "nume_furnizor": "TRANSENERGO COM S.A.",
        "pret_final": "2.01",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Standard- clienti casnici  JT - Distribuție Energie Oltenia 100-255",
        "nume_furnizor": "INGKA INVESTMENTS RENEWABLE ENERGY  ROMANIA S.R.L.",
        "pret_final": "2.01",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Standard- clienti casnici  JT - Distribuție Energie Oltenia 0-100",
        "nume_furnizor": "INGKA INVESTMENTS RENEWABLE ENERGY  ROMANIA S.R.L.",
        "pret_final": "2.01",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Flexi consumator casnic_DEO_JT",
        "nume_furnizor": "COOPERATIVADEENERGIE FURNIZARE",
        "pret_final": "2.28",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Flexi consumator casnic_DEERTS_JT",
        "nume_furnizor": "COOPERATIVADEENERGIE FURNIZARE",
        "pret_final": "2.28",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Flexi consumator casnic_DEO_JT",
        "nume_furnizor": "COOPERATIVADEENERGIE FURNIZARE",
        "pret_final": "2.28",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic OT MT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "2.37",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic OT JT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "2.37",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "Oferta Werk Casnic Oltenia JT",
        "nume_furnizor": "WERK ENERGY SRL",
        "pret_final": "2.37",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "casnic",
        "nume_furnizor": "Best Energy SRL",
        "pret_final": "2.49",
        "perioada_contract": "1 an"
      }
    ]
  },
  "7": {
    "zone_id": 7,
    "counties": [
      "Bucuresti",
      "Giurgiu",
      "Ilfov"
    ],
    "offers_count": 77,
    "offers": [
      {
        "denumire_oferta": "Oferta HE Viitor Hidro - Muntenia Sud_JT",
        "nume_furnizor": "SPEEH HIDROELECTRICA",
        "pret_final": "1.04",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "NOVA_EE_C_3 luni_01.07.2025_Muntenia Sud_JT",
        "nume_furnizor": "NOVA POWER & GAS S.R.L.",
        "pret_final": "1.27",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "FIX 24",
        "nume_furnizor": "Grenerg SRL",
        "pret_final": "1.31",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "NOVA_EE_C_12 luni_01.07.2025_Muntenia Sud_JT",
        "nume_furnizor": "NOVA POWER & GAS S.R.L.",
        "pret_final": "1.32",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "NOVA_EE_C_12 luni_01.07.2025_Muntenia Sud_JT",
        "nume_furnizor": "NOVA POWER & GAS S.R.L.",
        "pret_final": "1.32",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta casnic _ RER (zona MS)  JT  - iunie  - iulie.2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.35",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic _ RER (zona MS)  JT  - iunie  - iulie 2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.35",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "entera SWITCH_Client Casnic zona Muntenia Sud",
        "nume_furnizor": "ENERGY TECH ENTERA SRL",
        "pret_final": "1.36",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "CORE RESIDENTIAL",
        "nume_furnizor": "ENERGY CORE DEVELOPMENT SRL",
        "pret_final": "1.39",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Ampero Verde Online 03.07-15.07.2025_Muntenia Sud_JT",
        "nume_furnizor": "ENGIE Romania",
        "pret_final": "1.41",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Stabil 30_Muntenia Sud",
        "nume_furnizor": " ELECTRICA FURNIZARE S.A.",
        "pret_final": "1.42",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "CLIENTI FINALI CASNIC CONCURENTIAL_01.07.2025-31.07.2025",
        "nume_furnizor": "NEXT ENERGY PARTNERS S.R.L.",
        "pret_final": "1.42",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "ppc energie verde Muntenia Sud",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.43",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "OFERTA TIP PENTRU FURNIZAREA ENERGIEI ELECTRICE CONSUMATOR CASNIC",
        "nume_furnizor": "ANCHOR GRUP S.A.",
        "pret_final": "1.43",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Duo Assist PRO",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.44",
        "perioada_contract": "2 ani"
      },
      {
        "denumire_oferta": "Ampero Verde 03.07-15.07.2025_Muntenia Sud_JT",
        "nume_furnizor": "ENGIE Romania",
        "pret_final": "1.45",
        "perioada_contract": "intre 1 an si 2 ani"
      },
      {
        "denumire_oferta": "E.ON Duo Assist",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.45",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - EDM JT 2025",
        "nume_furnizor": "Tinmar Energy",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - REM JT",
        "nume_furnizor": "AMV SOLAR S.R.L.",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - REM JT",
        "nume_furnizor": "M.D.A. Energy",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - REM JT",
        "nume_furnizor": "MAR-TIN SOLAR ENERGY S.R.L.",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - REM JT",
        "nume_furnizor": "TINMAR GREEN ENERGY S.R.L.",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - REM JT",
        "nume_furnizor": "EYE MALL",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - REM JT",
        "nume_furnizor": "SOLPRIM",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Assist Electric Plus",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.45",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "E.ON Duo",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Casnic JT (01.07.2025 pana la 31.07.2025) RETELE ELECTRICE MUNTENIA SA",
        "nume_furnizor": "GETICA 95 COM",
        "pret_final": "1.45",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Casnic JT (01.07.2025 pana la 31.07.2025) RETELE ELECTRICE MUNTENIA SA",
        "nume_furnizor": "GETICA 95 COM",
        "pret_final": "1.45",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Met Casnici Retele Electrice Muntenia",
        "nume_furnizor": "MET ROMANIA ENERGY SRL",
        "pret_final": "1.46",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta_EE_tip_casnic_general_MVM",
        "nume_furnizor": "MVM FUTURE ENERGY TECHNOLOGY S.R.L.",
        "pret_final": "1.46",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta tip - casnic",
        "nume_furnizor": "ALIVE CAPITAL SA",
        "pret_final": "1.46",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Green Home",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.47",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Start Electric",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.48",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta energie electrica casnic PCC00155",
        "nume_furnizor": "OMV Petrom SA",
        "pret_final": "1.48",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - EDM JT iulie 2025",
        "nume_furnizor": "LORD ENERGY SRL",
        "pret_final": "1.48",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta concurentiala client casnic Muntenia Sud",
        "nume_furnizor": "SC ICCO ENERG SRL",
        "pret_final": "1.48",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip Furnizare Energie Electrica pentru consumatorii casnici - MUNTENIA SUD - iulie 2025",
        "nume_furnizor": "Monsson Trading S.R.L.",
        "pret_final": "1.51",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "oferta vanzare ee casnici cod CEO014",
        "nume_furnizor": "SOCIETATEA COMPLEXUL ENERGETIC OLTENIA S.A.",
        "pret_final": "1.51",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Casnic Muntenia Sud",
        "nume_furnizor": "Cotroceni Park SA",
        "pret_final": "1.51",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "PE REZIDENTIAL ONLINE",
        "nume_furnizor": "PREMIER ENERGY FURNIZARE S.A.",
        "pret_final": "1.53",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Luxten casnic JT_LLCC01072025MS",
        "nume_furnizor": "LUXTEN LIGHTING COMPANY SA",
        "pret_final": "1.53",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "CASNIC01",
        "nume_furnizor": "DIGI ROMANIA S.A.",
        "pret_final": "1.53",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "ppc simplu online Muntenia Sud",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.54",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta energie electrica valabila pentru perioada 01.07-31.12.2025 - Muntenia Sud - casnic JT",
        "nume_furnizor": "ENTREX SERVICES SRL",
        "pret_final": "1.54",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "ppc simplu anual Muntenia Sud",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.55",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "E.ON Home Electric",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.56",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Renovatio Casnic JT MS 2025",
        "nume_furnizor": "RENOVATIO TRADING SRL",
        "pret_final": "1.58",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici",
        "nume_furnizor": "Energy Distribution Services",
        "pret_final": "1.58",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta consumatori noncasnici MICROINTREPRINDERI",
        "nume_furnizor": "Energy Distribution Services",
        "pret_final": "1.58",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Tip Client Casnic DES888MTS33",
        "nume_furnizor": "Dacia Energy Solutions",
        "pret_final": "1.61",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "OFERTA_Casnic_JT_07.2025_MunteniaSud",
        "nume_furnizor": "EAST WIND FARM SRL",
        "pret_final": "1.63",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta standard_casnic_VWPR_010725",
        "nume_furnizor": "VERBUND Wind Power Romania SRL",
        "pret_final": "1.63",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta standard_casnic_VWPR_0107",
        "nume_furnizor": "VERBUND Wind Power Romania SRL",
        "pret_final": "1.63",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic Muntenia Sud JT",
        "nume_furnizor": "ELECTRICOM S.A.",
        "pret_final": "1.66",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic MS MT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "1.69",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic MS JT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "1.69",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici MS JT",
        "nume_furnizor": "VIMETCO MANAGEMENT ROMANIA SRL",
        "pret_final": "1.69",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "OFERTA PENTRU CLIENTII CASNICI",
        "nume_furnizor": "EFT FURNIZARE S.R.L.",
        "pret_final": "1.70",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "OFERTA PENTRU CLIENTII CASNICI",
        "nume_furnizor": "EFT POWER S.R.L.",
        "pret_final": "1.70",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "18.06.25.GES Rezidential Retele Electrice Romania_JT",
        "nume_furnizor": "Ges Furnizare SRL",
        "pret_final": "1.70",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare clienti casnici",
        "nume_furnizor": "TERMO PLOIESTI",
        "pret_final": "1.82",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip C Muntenia Sud JT",
        "nume_furnizor": "AUCHAN RENEWABLE ENERGY",
        "pret_final": "1.82",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip PLENERG Muntenia Nord JT",
        "nume_furnizor": "PLENERG S.R.L",
        "pret_final": "1.87",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip PLENERG Muntenia Sud JT",
        "nume_furnizor": "PLENERG S.R.L",
        "pret_final": "1.87",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumator casnic -  Muntenia Sud JT",
        "nume_furnizor": "Eol Energy S.R.L.",
        "pret_final": "1.87",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici JT Muntenia Sud ALR109",
        "nume_furnizor": "ALRO S.A.",
        "pret_final": "1.93",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Standard- clienti casnici  JT - E-Distribuție Muntenia 100-255",
        "nume_furnizor": "INGKA INVESTMENTS RENEWABLE ENERGY  ROMANIA S.R.L.",
        "pret_final": "1.93",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Standard- clienti casnici  JT - E-Distribuție Muntenia 0-100",
        "nume_furnizor": "INGKA INVESTMENTS RENEWABLE ENERGY  ROMANIA S.R.L.",
        "pret_final": "1.93",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica perioada 01.07.2025 - 30.06.2026",
        "nume_furnizor": "PHOTOVOLTAIC GREEN PROJECT S.R.L.",
        "pret_final": "1.93",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica perioada 01.07.2025 - 30.06.2026",
        "nume_furnizor": "Transenergo Microhidro SRL",
        "pret_final": "1.93",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica client casnic ",
        "nume_furnizor": "TRANSENERGO COM S.A.",
        "pret_final": "1.93",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica client casnic ",
        "nume_furnizor": "TRANSENERGO COM S.A.",
        "pret_final": "1.93",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Flexi consumator casnic_REM_JT",
        "nume_furnizor": "COOPERATIVADEENERGIE FURNIZARE",
        "pret_final": "2.20",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Flexi consumator casnic_REM_JT",
        "nume_furnizor": "COOPERATIVADEENERGIE FURNIZARE",
        "pret_final": "2.20",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic MS JT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "2.29",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic MS MT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "2.29",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "Oferta Werk Casnic Muntenia Sud JT",
        "nume_furnizor": "WERK ENERGY SRL",
        "pret_final": "2.29",
        "perioada_contract": "1 an"
      }
    ]
  },
  "8": {
    "zone_id": 8,
    "counties": [
      "Calarasi",
      "Constanta",
      "Ialomita",
      "Tulcea"
    ],
    "offers_count": 73,
    "offers": [
      {
        "denumire_oferta": "Oferta HE Viitor Hidro- Dobrogea_JT",
        "nume_furnizor": "SPEEH HIDROELECTRICA",
        "pret_final": "1.04",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "NOVA_EE_C_3 luni_01.07.2025_Dobrogea_JT",
        "nume_furnizor": "NOVA POWER & GAS S.R.L.",
        "pret_final": "1.27",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "FIX 24",
        "nume_furnizor": "Grenerg SRL",
        "pret_final": "1.31",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "NOVA_EE_C_12 luni_01.07.2025_Dobrogea_JT",
        "nume_furnizor": "NOVA POWER & GAS S.R.L.",
        "pret_final": "1.32",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - RER (zona Dobrogea) MT - iunie - iulie.2025 ",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.35",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - RER (zona Dobrogea ) JT - iunie - iulie.2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.35",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - RER (zona Dobrogea ) JT - iunie - iulie 2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.35",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta_EE _ noncasnic _ RER (zona Dobrogea) JT _iunie - iulie 2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.35",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta_EE _ noncasnic _ RER (zona Dobrogea) JT _iulie 2025",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.35",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta_EE _ noncasnic _ RER (zona Dobrogea) JT ",
        "nume_furnizor": "EM POWER SRL ",
        "pret_final": "1.35",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "entera SWITCH_Client Casnic zona Dobrogea",
        "nume_furnizor": "ENERGY TECH ENTERA SRL",
        "pret_final": "1.36",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "CORE RESIDENTIAL",
        "nume_furnizor": "ENERGY CORE DEVELOPMENT SRL",
        "pret_final": "1.39",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Ampero Verde Online 03.07-15.07.2025_Dobrogea_JT",
        "nume_furnizor": "ENGIE Romania",
        "pret_final": "1.41",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Stabil 30_Dobrogea",
        "nume_furnizor": " ELECTRICA FURNIZARE S.A.",
        "pret_final": "1.42",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "CLIENTI FINALI CASNIC CONCURENTIAL_01.07.2025-31.07.2025",
        "nume_furnizor": "NEXT ENERGY PARTNERS S.R.L.",
        "pret_final": "1.42",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "ppc energie verde Dobrogea",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.43",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "OFERTA TIP PENTRU FURNIZAREA ENERGIEI ELECTRICE CONSUMATOR CASNIC DOBROGEA",
        "nume_furnizor": "ANCHOR GRUP S.A.",
        "pret_final": "1.43",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Duo Assist PRO",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.44",
        "perioada_contract": "2 ani"
      },
      {
        "denumire_oferta": "Ampero Verde 03.07-15.07.2025_Dobrogea_JT",
        "nume_furnizor": "ENGIE Romania",
        "pret_final": "1.45",
        "perioada_contract": "intre 1 an si 2 ani"
      },
      {
        "denumire_oferta": "E.ON Duo Assist",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.45",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - EDD JT 2025",
        "nume_furnizor": "Tinmar Energy",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - RED JT",
        "nume_furnizor": "AMV SOLAR S.R.L.",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - RED JT",
        "nume_furnizor": "M.D.A. Energy",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - RED JT",
        "nume_furnizor": "MAR-TIN SOLAR ENERGY S.R.L.",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - EDD JT 2025",
        "nume_furnizor": "TINMAR GREEN ENERGY S.R.L.",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - RED JT",
        "nume_furnizor": "SOLPRIM",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - RED JT",
        "nume_furnizor": "EYE MALL",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Assist Electric Plus",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.45",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "E.ON Duo",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.45",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Casnic JT (01.07.2025 pana la 31.07.2025) RETELE ELECTRICE DOBROGEA SA",
        "nume_furnizor": "GETICA 95 COM",
        "pret_final": "1.45",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Casnic JT (01.07.2025 pana la 31.07.2025) RETELE ELECTRICE DOBROGEA SA",
        "nume_furnizor": "GETICA 95 COM",
        "pret_final": "1.45",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Met Casnici Retele Electrice Dobrogea",
        "nume_furnizor": "MET ROMANIA ENERGY SRL",
        "pret_final": "1.46",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta_EE_tip_casnic_general_MVM",
        "nume_furnizor": "MVM FUTURE ENERGY TECHNOLOGY S.R.L.",
        "pret_final": "1.46",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Green Home",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.47",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "E.ON Start Electric",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.48",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta energie electrica casnic PCC00152",
        "nume_furnizor": "OMV Petrom SA",
        "pret_final": "1.48",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic - EDD JT iulie 2025",
        "nume_furnizor": "LORD ENERGY SRL",
        "pret_final": "1.48",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta concurentiala client casnic Dobrogea",
        "nume_furnizor": "SC ICCO ENERG SRL",
        "pret_final": "1.48",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip Furnizare Energie Electrica pentru consumatorii casnici - DOBROGEA - iulie 2025",
        "nume_furnizor": "Monsson Trading S.R.L.",
        "pret_final": "1.51",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "oferta vanzare ee casnici cod CEO017",
        "nume_furnizor": "SOCIETATEA COMPLEXUL ENERGETIC OLTENIA S.A.",
        "pret_final": "1.51",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Casnic Dobrogea",
        "nume_furnizor": "Cotroceni Park SA",
        "pret_final": "1.51",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "PE REZIDENTIAL ONLINE",
        "nume_furnizor": "PREMIER ENERGY FURNIZARE S.A.",
        "pret_final": "1.53",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Luxten casnic JT_LLCC01072025DG",
        "nume_furnizor": "LUXTEN LIGHTING COMPANY SA",
        "pret_final": "1.53",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "CASNIC01",
        "nume_furnizor": "DIGI ROMANIA S.A.",
        "pret_final": "1.53",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "ppc simplu online Dobrogea",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.54",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta energie electrica valabila pentru perioada 01.07-31.12.2025 - Dobrogea - casnic JT",
        "nume_furnizor": "ENTREX SERVICES SRL",
        "pret_final": "1.54",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "ppc simplu anual Dobrogea",
        "nume_furnizor": "PPC Energie S.A.",
        "pret_final": "1.55",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "E.ON Home Electric",
        "nume_furnizor": "EON Energie Romania ",
        "pret_final": "1.56",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Renovatio Casnic JT DO 2025",
        "nume_furnizor": "RENOVATIO TRADING SRL",
        "pret_final": "1.58",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici",
        "nume_furnizor": "Energy Distribution Services",
        "pret_final": "1.58",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Tip Client Casnic DES888DBG33",
        "nume_furnizor": "Dacia Energy Solutions",
        "pret_final": "1.61",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "OFERTA_Casnic_JT_07.2025_Dobrogea",
        "nume_furnizor": "EAST WIND FARM SRL",
        "pret_final": "1.63",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta casnic Dobrogea JT",
        "nume_furnizor": "ELECTRICOM S.A.",
        "pret_final": "1.66",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic DG JT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "1.69",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici DG JT",
        "nume_furnizor": "VIMETCO MANAGEMENT ROMANIA SRL",
        "pret_final": "1.69",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "OFERTA PENTRU CLIENTII CASNICI",
        "nume_furnizor": "EFT FURNIZARE S.R.L.",
        "pret_final": "1.70",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "OFERTA PENTRU CLIENTII CASNICI",
        "nume_furnizor": "EFT POWER S.R.L.",
        "pret_final": "1.70",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "18.06.25.GES Rezidential Retele Electrice Romania_JT",
        "nume_furnizor": "Ges Furnizare SRL",
        "pret_final": "1.70",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare clienti casnici",
        "nume_furnizor": "TERMO PLOIESTI",
        "pret_final": "1.82",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip C Dobrogea JT",
        "nume_furnizor": "AUCHAN RENEWABLE ENERGY",
        "pret_final": "1.82",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta-tip PLENERG Dobrogea JT",
        "nume_furnizor": "PLENERG S.R.L",
        "pret_final": "1.87",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumator casnic -  Dobrogea JT",
        "nume_furnizor": "Eol Energy S.R.L.",
        "pret_final": "1.87",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta consumatori casnici JT Dobrogea ALR108",
        "nume_furnizor": "ALRO S.A.",
        "pret_final": "1.93",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Standard- clienti casnici  JT - E-Distribuție Dobrogea 100-255",
        "nume_furnizor": "INGKA INVESTMENTS RENEWABLE ENERGY  ROMANIA S.R.L.",
        "pret_final": "1.93",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta Standard- clienti casnici  JT - E-Distribuție Dobrogea 0-100",
        "nume_furnizor": "INGKA INVESTMENTS RENEWABLE ENERGY  ROMANIA S.R.L.",
        "pret_final": "1.93",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica perioada 01.07.2025 - 30.06.2026",
        "nume_furnizor": "PHOTOVOLTAIC GREEN PROJECT S.R.L.",
        "pret_final": "1.93",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica perioada 01.07.2025 - 30.06.2026",
        "nume_furnizor": "Transenergo Microhidro SRL",
        "pret_final": "1.93",
        "perioada_contract": "1 an"
      },
      {
        "denumire_oferta": "Oferta furnizare energie electrica client casnic ",
        "nume_furnizor": "TRANSENERGO COM S.A.",
        "pret_final": "1.93",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Flexi consumator casnic_RED_JT",
        "nume_furnizor": "COOPERATIVADEENERGIE FURNIZARE",
        "pret_final": "2.20",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "Flexi consumator casnic_RED_JT",
        "nume_furnizor": "COOPERATIVADEENERGIE FURNIZARE",
        "pret_final": "2.20",
        "perioada_contract": "a.\tmai mica de 1 an"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic DG JT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "2.29",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "2025.2 Oferta tip casnic DG MT",
        "nume_furnizor": "HERMES ENERGY INTERNATIONAL",
        "pret_final": "2.29",
        "perioada_contract": "nedeterminata"
      },
      {
        "denumire_oferta": "Oferta Werk Casnic Dobrogea JT",
        "nume_furnizor": "WERK ENERGY SRL",
        "pret_final": "2.29",
        "perioada_contract": "1 an"
      }
    ]
  }
};

const countyToZoneMapping = {
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
};

// Helper function to get sorted counties
const getCounties = () => {
    return Object.keys(countyToZoneMapping).sort();
};

// Helper function to get zone data by ID
const getZoneData = (zoneId) => {
    return zonesData[zoneId.toString()];
};

// Helper function to get zone for a county
const getZoneForCounty = (county) => {
    return countyToZoneMapping[county];
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    // Node.js environment
    module.exports = {
        zonesData,
        countyToZoneMapping,
        getCounties,
        getZoneData,
        getZoneForCounty
    };
} else {
    // Browser environment
    window.ZonesData = {
        zonesData,
        countyToZoneMapping,
        getCounties,
        getZoneData,
        getZoneForCounty
    };
}
