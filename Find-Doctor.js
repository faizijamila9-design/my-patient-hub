const searchInputs = document.querySelectorAll('.search-box input');


const doctorSearch = searchInputs[0];


const zipCode = searchInputs[1];



const searchButtons = document.querySelectorAll('.search-buttons button');


const searchButton = searchButtons[1];



searchButton.addEventListener('click', function () {

    
    const doctorValue = doctorSearch.value.trim();

    
    const zipValue = zipCode.value.trim();


    
    if (doctorValue === '' && zipValue === '') {

        alert('Please enter a doctor name, speciality or zip code.');

        return;
    }


    
    let result = 'Search Result:\n';


    
    if (doctorValue !== '') {

        result += 'Doctor / Speciality: ' + doctorValue + '\n';
    }


    
    if (zipValue !== '') {

        result += 'Zip Code / Neighborhood: ' + zipValue;
    }
    
    alert(result);

});