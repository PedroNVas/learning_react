/*
  Pure functions always return the same result given the same arguments.
  Pure function's execution doesn't depend on the state of the application
  Pure functions don't modify the variable outside of their scope
 */

function add (x, y) {
  return x + y
}

const iceCreamStats = [
  {name: 'Amanda', gallonsEaten: 3.8},
  {name: 'Geoff', gallonsEaten: 5.2},
  {name: 'Tyles', gallonsEaten: 1.9},
  {name: 'Richard', gallonsEaten: 7923},
]

iceCreamStats.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.gallonsEaten
}, 0)

const musicData = [
  {artist: 'Adele', name: '25', sales: 1731000},
  {artist: 'Drake', name: 'Views', sales: 1608000},
  {artist: 'Beyonce', name: 'Lemonade', sales: 1554000},
  {artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000},
  {artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000},
  {
    artist: 'Original Broadway Cast Recording',
    name: 'Hamilton: An American Musical',
    sales: 820000
  },
  {artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000},
  {artist: 'Prince', name: 'The Very Best of Prince', sales: 668000},
  {artist: 'Rihanna', name: 'Anti', sales: 603000},
  {artist: 'Justin Bieber', name: 'Purpose', sales: 554000}
]

let totalAlbumSales = musicData.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.sales
}, 0)

totalAlbumSales = musicData
  .filter(data => data.artist.length + data.name.length <= 25)
  .reduce((accumulator, currentValue) => {
    return accumulator + currentValue.sales
  }, 0)

const data = [
  { name: 'Tyler', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
  { name: 'Richard', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
  { name: 'Amanda', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
  { name: 'Andrew', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
  { name: 'David', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
  { name: 'Karl', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
];

iceCreamTotals = data.reduce((accumulator, currentValue) => {

  currentValue.favoriteIceCreams.forEach(name => {
    if (name in accumulator) {
      accumulator[name]++
    } else {
      accumulator[name] = 1
    }
  })
  return accumulator
}, {})