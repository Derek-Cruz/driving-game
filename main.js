const data = {
  position: 'east'
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
    intervalSet = setInterval(movement, 16);
  }
});

let speed = 0;
function movement() {
  car.style.top = speed + 'px';
  speed = speed + 3;
}
