// function lightsOn(switchCount) {
//   for (let i = 1; i <= switches; i++) {
//     if ()
//   }
// }

function initializeLights(count) {
  let lights = [];
  
  for (let i = 1; i <= count; i++) {
    lights.push(i);
  }
  
  return lights;
}

function toggleLights(lights, round) {
  return lights.map((light, index) => {
    return (index + 1) % round === 0 ? !light : light
  })
}

function lightsOn(count) {
  let lights = initializeLights(count);

  for (let switchNum = 1; switchNum <= count; switchNum += 1) {
    // rounds: 1..count
    lights = toggleLights(lights, switchNum);
  }

  let result = [];
  for (let idx = 0; idx < count; idx += 1) {
    // indices: 0..count-1
    if (lights[idx]) {
      result.push(idx + 1);
    }
  }

  return result;
}