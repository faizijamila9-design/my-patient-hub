// ================================
// FIND CLINIC JAVASCRIPT
// ================================


// LOCATION ELEMENTS

const locationButton =
    document.getElementById("locationButton");

const locationDropdown =
    document.getElementById("locationDropdown");

const locationInput =
    document.getElementById("locationInput");


// OPEN / CLOSE LOCATION DROPDOWN

locationButton.addEventListener("click", function () {

    locationDropdown.classList.toggle("show");

});


// SELECT LOCATION

const locationOptions =
    document.querySelectorAll(".location-option");


locationOptions.forEach(function(option) {

    option.addEventListener("click", function() {

        const selectedLocation =
            this.getAttribute("data-location");

        locationInput.value =
            selectedLocation;

        locationDropdown.classList.remove("show");

    });

});


// CLOSE DROPDOWN WHEN CLICKING OUTSIDE

document.addEventListener("click", function(event) {

    if (
        !event.target.closest(".location-wrapper")
    ) {

        locationDropdown.classList.remove("show");

    }

});


// SEARCH

const searchButton =
    document.getElementById("searchButton");

const clinicSearch =
    document.getElementById("clinicSearch");

const clinicContainer =
    document.getElementById("clinicContainer");

const clinicCards =
    document.querySelectorAll(".clinic-card");

const clinicCount =
    document.getElementById("clinicCount");

const resultText =
    document.getElementById("resultText");


searchButton.addEventListener("click", function() {

    const searchValue =
        clinicSearch.value.toLowerCase().trim();

    const selectedLocation =
        locationInput.value.toLowerCase().trim();


    let visibleClinics = 0;


    clinicCards.forEach(function(card) {

        const clinicName =
            card.getAttribute("data-name")
            .toLowerCase();

        const clinicLocation =
            card.getAttribute("data-location")
            .toLowerCase();


        const nameMatches =
            clinicName.includes(searchValue);


        const locationMatches =
            selectedLocation === "" ||
            clinicLocation === selectedLocation;


        if (
            nameMatches &&
            locationMatches
        ) {

            card.style.display = "flex";

            visibleClinics++;

        } else {

            card.style.display = "none";

        }

    });


    clinicCount.textContent =
        visibleClinics + " Clinics";


    resultText.textContent =
        visibleClinics +
        " clinics found for your search";

});


// SEARCH WHEN PRESSING ENTER

clinicSearch.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            searchButton.click();

        }

    }
);


// CURRENT LOCATION BUTTON

const currentLocation =
    document.getElementById("currentLocation");


currentLocation.addEventListener("click", function() {

    locationInput.value = "Current Location";

    resultText.textContent =
        "Showing clinics near your current location";

});


// VIEW DETAILS BUTTONS

const detailsButtons =
    document.querySelectorAll(".details-button");


detailsButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const clinicCard =
            this.closest(".clinic-card");

        const clinicName =
            clinicCard.querySelector("h3").textContent;

        alert(
            "Clinic Details\n\n" +
            clinicName
        );

    });

});
const locationButton =
    document.getElementById("locationButton");

const locationDropdown =
    document.getElementById("locationDropdown");

const locationText =
    document.getElementById("locationText");


locationButton.addEventListener("click", function() {

    locationDropdown.classList.toggle("show");

});
const locationOptions =
    document.querySelectorAll(
        "#locationDropdown .dropdown-option"
    );


locationOptions.forEach(function(option) {

    option.addEventListener("click", function() {

        locationText.textContent =
            this.getAttribute("data-value");

        locationDropdown.classList.remove("show");

    });

});
const specialtyButton =
    document.getElementById("specialtyButton");

const specialtyDropdown =
    document.getElementById("specialtyDropdown");

const specialtyText =
    document.getElementById("specialtyText");


specialtyButton.addEventListener("click", function() {

    specialtyDropdown.classList.toggle("show");

});
const specialtyOptions =
    document.querySelectorAll(
        "#specialtyDropdown .dropdown-option"
    );


specialtyOptions.forEach(function(option) {

    option.addEventListener("click", function() {

        specialtyText.textContent =
            this.getAttribute("data-value");

        specialtyDropdown.classList.remove("show");

    });

});