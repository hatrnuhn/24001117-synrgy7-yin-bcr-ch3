function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);
  // Tempat penampungan hasil
  const result = [];

  cars.forEach((car) => {
    (car['available'] === true) ? result.push(car) : null;
  });

  return result;
}