const data = {
  position: 'east'
};

const car = document.querySelector('.car');

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
  }
});
