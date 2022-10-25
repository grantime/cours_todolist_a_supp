async function fetchData() {



const res = await fetch('https://hubeau.eaufrance.fr/api/v1/etat_piscicole/observations?bbox=4.588399428434258&bbox=43.64797430851655&bbox=5.814415511670035&bbox=44.418966090526084&code_taxon=2212%2C2220%2C2222%2C2223%2C2224%2C43698%2C2221%2C57193%2C57195%2C57682%2C57683%2C57685%2C57686%2C57690&size=200&sort=desc')
const record = await res.json()

console.log('record', record)
}
fetchDate();