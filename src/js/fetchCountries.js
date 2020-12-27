import countryList from "../templates/listItem.hbs";
import countryCard from '../templates/item.hbs';
import { debounce } from "debounce";
import API from '../js/api-service.js';
import refs from '../js/refs.js';
import errMsg from '../js/notifications.js';


refs.input.addEventListener('input', debounce(onFilterChange, 500));

function onFilterChange() {
    clear();
    let nameInput = refs.input.value;
    let query = '';

    if (nameInput.length > 0 && nameInput.trim() !== '') {
        query = nameInput.trim()
    } else {
        return;
    };

    API.fetchCountries(query)
    .then(renderCountryCard)
    .catch(onFetchErr)
    // .finally(() => nameInput.reset())
};


function renderCountryCard(country) {
    console.log(country.length);
    if (country.length > 10) {
        errMsg.errorMesg();
        return;
    } else if (country.length > 1 && country.length <= 10) {
        const markup = countryList(country);
        refs.cardContainer.insertAdjacentHTML("afterbegin", markup);
    } else {
        const markup = countryCard(country);
        refs.cardContainer.insertAdjacentHTML("afterbegin", markup); 
    }
}
function onFetchErr(err) {
    console.log('Not Found')
}
function clear() {
    refs.cardContainer.innerHTML = '';
}
