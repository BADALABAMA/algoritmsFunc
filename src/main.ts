import './style.css';
const Trains = [
  {
    driver: 'John',
    carriages: [
      { color: 'darkmagenta', id: 1 },
      { color: 'blue', id: 2 },
      { color: 'yellow', id: 3 },
    ],
  },
  { driver: 'Jim', carriages: [{ color: 'green', id: 4 }] },
  { driver: 'Mike', carriages: [{ color: 'red', id: 5 }] },
  { driver: 'Tyson', carriages: [{ color: 'grey', id: 6 }] },
];

function findCarriage(options: { color?: string; id?: number } = {}) {
  const { color, id } = options;
  let foundCarriage;
  if (color) {
    foundCarriage = Trains.find((train) =>
      train.carriages.some((carriage) => carriage.color === color)
    );
  } else if (id) {
    foundCarriage = Trains.find((train) =>
      train.carriages.some((carriage) => carriage.id === id)
    );
  }
  if (foundCarriage) {
    let carriages;

    if (color) {
      carriages = foundCarriage.carriages.filter(
        (carriage) => carriage.color === color
      );
      console.log(
        ` Found carriages with color:
      ${color},
      for driver:
      ${foundCarriage.driver}
      :
     `,
        carriages
      );
    } else if (id) {
      carriages = foundCarriage.carriages.filter(
        (carriage) => carriage.id === id
      );
      console.log(
        `Found carriages with id:${id} for driver: ${foundCarriage.driver}:`,
        carriages
      );
    }
  }
}

findCarriage({ color: 'blue' });
console.log('____________');
findCarriage({ id: 1 });
console.log('____________');
findCarriage({ color: 'red', id: 5 });
