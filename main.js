const data = {
  position: 'east',
  stopOrGo: false,
  steering: { horizontal: 0, vertical: 0 }
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
    } else {
      clearInterval(intervalSet);
      data.stopOrGo = false;
    }
  }
});

let speedLeftRight = 0;
let speedUpDown = 0;
function movement() {
  if (data.position === 'east') {
    car.style.left = speedLeftRight + 'px';
    speedLeftRight = speedLeftRight + 10;
    data.steering.horizontal = speedLeftRight;
  } else if (data.position === 'west') {
    car.style.left = speedLeftRight + 'px';
    speedLeftRight = speedLeftRight - 10;
    data.steering.horizontal = speedLeftRight;
  } else if (data.position === 'south') {
    car.style.top = speedUpDown + 'px';
    speedUpDown = speedUpDown + 10;
    data.steering.vertical = speedUpDown;
  } else if (data.position === 'north') {
    car.style.top = speedUpDown + 'px';
    speedUpDown = speedUpDown - 10;
    data.steering.vertical = speedUpDown;
  }
};