let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let result = Object.entries(obj).map(foodItem => {
  if (foodItem[1]['type'] === 'fruit') {
    return foodItem[1]['colors'].map(color => {
      return color[0].toUpperCase() + color.substring(1);
    })
  } else {
    return foodItem[1]['size'].toUpperCase();
  }
  
})

console.log(result)