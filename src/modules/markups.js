export function listMarkupCountries(countries) {
  return countries
    .map(
      ({ name, flags }) => `
        <li><img src="${flags.svg}" alt="${name.official}" width='25px' height='25px'>
       ${name.official}
        </li>
        `
    )
    .join('');
}

export function infoMarkupCountries(countries) {
  return countries
    .map(
      ({ name, capital, flags, languages, population }) => `
        <div><p><img src="${flags.svg}"  width='25px' height='25px'> ${
        name.official
      }</p>
        <p>Capital: ${capital[0]}</p>
        <p>Population: ${population}</p>
        <p>Languages: ${Object.values(languages)}</p>
        </div>
        `
    )
    .join('');
}
