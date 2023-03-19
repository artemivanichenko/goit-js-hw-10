const BASE_URL = 'https://restcountries.com/v3.1/name/';
const END_POINTS = ['name', 'capital', 'population', 'flags', 'languages'];

export default function fetchCountries(inputCountry) {
  return fetch(
    `${BASE_URL}${inputCountry}?fields=${END_POINTS.join(',')}`
  ).then(response => {
    // if (response.status === 404) {
    //   Notify.failure('Oops, !!!!!!!!h that name');
    // }
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
