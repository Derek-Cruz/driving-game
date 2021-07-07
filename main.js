const data = {
  position: 'east',
  stopOrGo: false
};

const car = document.querySelector('.car');
let intervalSet = null;

document.addEventListener('keydown', function () {
  if (event.key === 'ArrowRight') {
    car.className = 'car rotate-right';
    data.position = 'east';
  } else if (event.key === 'ArrowLeft') {
    car.className = 'car rotate-left';
    data.position = 'west';
  } else if (event.key === 'ArrowDown') {
    car.className = 'car rotate-down';
    data.position = 'south';
  } else if (event.key === 'ArrowUp') {
    car.className = 'car rotate-up';
    data.position = 'north';
  } else if (event.key === ' ') {
    if (data.stopOrGo === false) {
      intervalSet = setInterval(movement, 16);
      data.stopOrGo = true;
      //console.log('stoporgo true:', data.stopOrGo)
    } else {
      clearInterval(intervalSet);
      data.stopOrGo = false;
      //console.log('stoporgo false:', data.stopOrGo)
    }
  }
});

let speed = 0;
function movement() {
  car.style.top = speed + 'px';
  speed = speed + 3;
}
