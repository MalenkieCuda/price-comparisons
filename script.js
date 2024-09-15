function comparePrices() {
    const productName = document.getElementById('product').value;

    // Generowanie URL-i wyszukiwania dla Ceneo, Allegro i Amazon
    const ceneoUrl = `https://www.ceneo.pl/;szukaj-${encodeURIComponent(productName)}`;
    const allegroUrl = `https://allegro.pl/listing?string=${encodeURIComponent(productName)}`;
    const amazonUrl = `https://www.amazon.pl/s?k=${encodeURIComponent(productName)}`;

    // Wyœwietlanie linków dla u¿ytkownika
    document.getElementById('results').innerHTML = `
        <h2>Search Results for <strong>${productName}</strong></h2>
        <ul>
            <li><a href="${ceneoUrl}" target="_blank">Ceneo</a></li>
            <li><a href="${allegroUrl}" target="_blank">Allegro</a></li>
            <li><a href="${amazonUrl}" target="_blank">Amazon</a></li>
        </ul>
    `;
}
