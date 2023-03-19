import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import fetchCountries from './modules/apiCountries';
import { listMarkupCountries, infoMarkupCountries } from './modules/markups';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const inputElem = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const container = document.querySelector('.country-info');

inputElem.addEventListener('input', debounce(handleInputForm, DEBOUNCE_DELAY));

function handleInputForm(e) {
  e.preventDefault();
  const query = e.target.value.trim().toLowerCase();
  if (!query) {
    container.innerHTML = '';
    countryList.innerHTML = '';
    return;
  }

  fetchCountries(query)
    .then(countries => {
      if (countries.length > 10) {
        return Notify.info(
          'Too many matches found. Please enter a more specific name'
        );
      }
      if (countries.length >= 1 && countries.length <= 10) {
        countryList.innerHTML = listMarkupCountries(countries);
        container.innerHTML = '';
      }
      if (countries.length === 1) {
        countryList.innerHTML = '';
        container.innerHTML = infoMarkupCountries(countries);
      }
    })
    .catch(error => {
      Notify.failure('Oops, there is no country with that name');
    });
}
