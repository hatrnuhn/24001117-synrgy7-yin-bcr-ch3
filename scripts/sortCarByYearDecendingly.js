function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  const result = [...cars];

  return result.sort((a, b) => {
    return b['year'] - a['year'];
  });
}