const countryTimeZones = {
    "India": "Asia/Kolkata",
    "USA": "America/New_York",
    "Canada": "America/Toronto",
    "UK": "Europe/London",
    "Germany": "Europe/Berlin",
    "France": "Europe/Paris",
    "Italy": "Europe/Rome",
    "Spain": "Europe/Madrid",
    "Russia": "Europe/Moscow",
    "China": "Asia/Shanghai",
    "Japan": "Asia/Tokyo",
    "South Korea": "Asia/Seoul",
    "Pakistan": "Asia/Karachi",
    "Bangladesh": "Asia/Dhaka",
    "Nepal": "Asia/Kathmandu",
    "Sri Lanka": "Asia/Colombo",
    "UAE": "Asia/Dubai",
    "Saudi Arabia": "Asia/Riyadh",
    "Iran": "Asia/Tehran",
    "Turkey": "Europe/Istanbul",
    "Thailand": "Asia/Bangkok",
    "Malaysia": "Asia/Kuala_Lumpur",
    "Singapore": "Asia/Singapore",
    "Indonesia": "Asia/Jakarta",
    "Australia": "Australia/Sydney",
    "New Zealand": "Pacific/Auckland",
    "South Africa": "Africa/Johannesburg",
    "Egypt": "Africa/Cairo",
    "Nigeria": "Africa/Lagos",
    "Kenya": "Africa/Nairobi",
    "Brazil": "America/Sao_Paulo",
    "Argentina": "America/Argentina/Buenos_Aires",
    "Mexico": "America/Mexico_City",
    "Chile": "America/Santiago",
    "Peru": "America/Lima",
    "Colombia": "America/Bogota",
    "Venezuela": "America/Caracas",
    "Cuba": "America/Havana",
    "Philippines": "Asia/Manila",
    "Vietnam": "Asia/Ho_Chi_Minh",
    "Myanmar": "Asia/Yangon",
    "Qatar": "Asia/Qatar",
    "Kuwait": "Asia/Kuwait",
    "Oman": "Asia/Muscat",
    "Afghanistan": "Asia/Kabul"
};

let selectedTimeZone = null;

const countryInput = document.getElementById("countryInput");
const countryList = document.getElementById("countryList");
const countryName = document.getElementById("countryName");
const countryClock = document.getElementById("countryClock");

// -----------------------------
// Show full list when input focused
// -----------------------------
function showList() {
    countryList.innerHTML = "";
    Object.keys(countryTimeZones).forEach(country => {
        let div = document.createElement("div");
        div.innerText = country;
        div.onclick = () => selectCountry(country);
        countryList.appendChild(div);
    });
    countryList.style.display = "block";
}

// -----------------------------
// Filter list as user types
// -----------------------------
function filterCountries() {
    let input = countryInput.value.toLowerCase();
    countryList.innerHTML = "";
    Object.keys(countryTimeZones).forEach(country => {
        if (country.toLowerCase().includes(input)) {
            let div = document.createElement("div");
            div.innerText = country;
            div.onclick = () => selectCountry(country);
            countryList.appendChild(div);
        }
    });
    countryList.style.display = "block";
}

// -----------------------------
// When a country is selected
// -----------------------------
function selectCountry(country) {
    countryInput.value = country;
    countryName.innerText = country;
    countryList.style.display = "none";
    selectedTimeZone = countryTimeZones[country];
}

// -----------------------------
// Close dropdown if clicked outside
// -----------------------------
document.addEventListener("click", function(event) {
    if (!countryInput.contains(event.target) && !countryList.contains(event.target)) {
        countryList.style.display = "none";
    }
});

// -----------------------------
// Update clocks
// -----------------------------
function updateClocks() {
    // USA 24h
    document.getElementById("usaClock").innerText =
        new Date().toLocaleString("en-US", {
            timeZone: "America/New_York",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        });

    // India 12h
    document.getElementById("indiaClock").innerText =
        new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour: "numeric",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        });

    // Selected country clock
    if (selectedTimeZone) {
        countryClock.innerText =
            new Date().toLocaleString("en-US", {
                timeZone: selectedTimeZone,
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: false
            });
    }
}

setInterval(updateClocks, 1000);
updateClocks();
