# DSS Ambulance Service

**Official Website:** [https://dssambulanceservice.in](https://dssambulanceservice.in)  
**24/7 Emergency Helpline:** [+91 7840089777](tel:7840089777) / [+91 7678514315](tel:7678514315)  
**WhatsApp:** [Chat on WhatsApp](https://wa.me/917840089777?text=Hello%20DSS%20Ambulance,%20I%20need%20ambulance%20assistance)  
**Operating Base:** Pocket 6, 137A, Tower 16, Mayur Vihar Phase 3, Near Mother Dairy, Delhi - 110096, India  

---

## Overview

DSS Ambulance Service provides dependable, 24/7 medical transportation for emergency and non-emergency patients across Delhi NCR and on long-distance outstation routes across North India. Our fleet includes Normal Stretcher Ambulances, ICU Ventilator Ambulances with trained paramedics, and Mortuary Hearse Ambulances with dead body freezer box facilities.

---

## 24/7 Emergency Helplines

For instant ambulance dispatch and booking coordination:
- **Primary 24/7 Helpline:** `+91 7840089777`
- **Secondary 24/7 Helpline:** `+91 7678514315`
- **WhatsApp Support:** `+91 7840089777` (Send live location and patient requirements)
- **Base Location:** Mayur Vihar Phase 3, Delhi (strategic access to East Delhi, Noida, South Delhi, and Ghaziabad)

---

## Ambulance Services Offered

### 1. Normal Ambulance Service
- Safe and comfortable transportation for non-critical patients.
- Equipped with standard stretcher bed, wheelchair access, safety harness, and basic first aid.
- Ideal for hospital discharges, routine OPD consultations, dialysis sessions, radiation therapy, and physiotherapy.
- Spacious cabin for family attendants.

### 2. Ventilator & ICU Ambulance Service
- Mobile intensive care unit for critically ill and unstable patients.
- Hospital-grade portable ventilators (invasive and non-invasive modes).
- Multiparameter monitors (ECG, SpO2, NIBP, pulse rate, temperature).
- Continuous oxygen cylinder delivery system, motorized suction machines, and syringe infusion pumps.
- Accompanied by trained critical care paramedics and emergency medical technicians.

### 3. Mortuary Ambulance Service (Hearse Van)
- Dignified and respectful transportation of deceased loved ones.
- Clean, sanitized, and dedicated mortuary vehicles.
- Dead body freezer box arrangement available for preservation during long distance or delayed funeral rites.
- Local transit to cremation grounds/burial sites or outstation transit to hometowns.

### 4. Hospital & Inter-Hospital Transfers
- Coordinated patient transit between hospitals, nursing homes, and diagnostic centers.
- Bed-to-bed transfer management ensuring continuous patient monitoring.
- Rapid referral transfers to AIIMS, Safdarjung, Max, Fortis, Apollo, and other tertiary hospitals.

### 5. Local Ambulance Service (Delhi NCR)
- Prompt coverage across all sectors and districts of Delhi NCR:
  - **East Delhi & Central:** Mayur Vihar, Laxmi Nagar, Preet Vihar, Patparganj, Connaught Place.
  - **Noida & Greater Noida:** Sector 18, Sector 62, Expressway, Pari Chowk, Knowledge Park.
  - **Ghaziabad:** Indirapuram, Vaishali, Kaushambi, Sahibabad, Raj Nagar.
  - **South Delhi:** Saket, Hauz Khas, Greater Kailash, Lajpat Nagar, AIIMS.
  - **West & North Delhi:** Dwarka, Janakpuri, Rajouri Garden, Rohini, Pitampura.

### 6. Outstation Ambulance Service
- Long-distance patient and mortuary transportation connecting Delhi NCR to:
  - **Uttar Pradesh:** Meerut, Agra, Aligarh, Bareilly, Moradabad, Lucknow, Kanpur, Varanasi.
  - **Haryana & Punjab:** Panipat, Karnal, Ambala, Chandigarh, Ludhiana, Rohtak, Hisar.
  - **Rajasthan:** Alwar, Bharatpur, Jaipur, Kota, Ajmer.
  - **Uttarakhand:** Haridwar, Rishikesh, Dehradun, Haldwani.
  - **Bihar:** Patna, Gaya, Muzaffarpur, Bhagalpur.

---

## SEO & Discoverability Architecture

The website is engineered with strict search engine optimization (SEO) standards to rank on Google for high-intent search queries:

1. **Custom Domain & Canonical Setup:**
   - Primary domain: `https://dssambulanceservice.in`
   - GitHub Pages `CNAME` configured for seamless domain routing.
   - Canonical URL tags prevent duplicate content penalties.

2. **Schema.org JSON-LD Structured Data:**
   - `EmergencyService`, `MedicalBusiness`, and `LocalBusiness` schemas.
   - 24/7 opening hours specification (`OpeningHoursSpecification`).
   - GeoCoordinates (`latitude: 28.6083`, `longitude: 77.3343`).
   - Detailed `hasOfferCatalog` with service descriptions.
   - `BreadcrumbList` on all secondary pages for clear navigation trails.
   - `FAQPage` schema on services page to capture Google rich snippet accordions.

3. **Search Indexing & Crawling:**
   - `sitemap.xml`: Complete URL map with daily/weekly change frequencies.
   - `robots.txt`: Directs search engine crawlers with explicit sitemap link.

4. **Social Sharing & Click-Through Optimization:**
   - OpenGraph metadata (`og:title`, `og:description`, `og:image`, `og:url`, `og:locale`).
   - High-contrast WhatsApp link previews for urgent family shares.
   - Twitter Card `summary_large_image` configuration.
   - High-resolution SVG favicon (`favicon.svg`) displayed in Google Search snippets.

5. **Local SEO Geo Tags:**
   - `geo.region`: `IN-DL`
   - `geo.placename`: `Mayur Vihar Phase 3, Delhi`
   - `geo.position`: `28.6083;77.3343`

---

## Technology Stack

- **Markup:** HTML5 (Semantic, fully accessible, screen-reader friendly)
- **Styling:** Vanilla CSS3 (Custom design system, mobile-first responsive layout, CSS variables)
- **Scripting:** Vanilla JavaScript ES6+ (Mobile navigation toggle, booking modal, notification alerts)
- **Icons & Typography:** FontAwesome 6, Google Fonts (Inter & Poppins)
- **Hosting:** GitHub Pages with custom domain DNS mapping

---

## Project Structure

```text
├── CNAME             # Custom domain configuration (dssambulanceservice.in)
├── README.md         # Documentation and service specifications
├── favicon.svg       # Medical cross SVG favicon for browser and search engine snippets
├── robots.txt        # Search engine crawler instructions and sitemap directive
├── sitemap.xml       # XML sitemap for Google and Bing search indexation
├── index.html        # Homepage: Hero booking, services overview, quick dispatch
├── services.html     # Dedicated services page with detailed fleet specs and FAQ
├── about.html        # About page: Infrastructure, standards, team, operating base
├── contact.html      # Contact page: Direct phone lines, booking enquiry form, map
├── style.css         # Responsive styling, color tokens, layout, card designs
└── main.js           # Interactive components (mobile menu, modals, toast messages)
```

---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/dssambulanceservices/dssambulanceservices.github.io.git
   cd dssambulanceservices.github.io
   ```

2. Serve locally with any static web server:
   - Using Python 3:
     ```bash
     python -m http.server 8000
     ```
   - Using Node.js (npx):
     ```bash
     npx serve .
     ```

3. Open `http://localhost:8000` in your web browser.

---

## Contact & Dispatch Desk

- **Operating Address:** Pocket 6, 137A, Tower 16, Mayur Vihar Phase 3, Near Mother Dairy, Delhi - 110096
- **Emergency Helpline:** +91 7840089777 / +91 7678514315
- **Official Website:** [https://dssambulanceservice.in](https://dssambulanceservice.in)

Copyright 2026 DSS Ambulance Service. All Rights Reserved.
