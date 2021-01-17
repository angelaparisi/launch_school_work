
let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

let munstersArray = Object.entries(munsters); 

munstersArray.forEach(member => {
  console.log(`${member[0][0].toUpperCase() + member[0].substring(1)} is a ${member[1]['age']}-year-old ${member[1]['gender']}.`)
}
)

