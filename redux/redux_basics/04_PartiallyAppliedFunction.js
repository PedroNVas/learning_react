function plate (vegetables) {
  return function fruitFunc (fruit) {
    return `I ate a plate of ${vegetables} and ${fruit}!`
  }
}

const fruitFunc = plate('corn')

function plate2 (vegetables) {
  return function fruitFunc (fruit) {
    return `I ate a plate of ${vegetables} and ${fruit}!`
  }
}

const sentence = plate2('corn')('apples')

function houseBuilder (floors) {
  return function houseColor (color) {
    return `building a ${floors}-story, ${color} house`
  }
}