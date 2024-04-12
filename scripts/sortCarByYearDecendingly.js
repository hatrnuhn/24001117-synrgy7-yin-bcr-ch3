function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  const result = [...cars];

  // update setelah submit form
  // merge sort source: en.wikipedia
  function sortDesc(array) {
    const arrayWork = [...array], arrayCopy = [...array];
    splitMerge(arrayWork, 0, arrayCopy.length, arrayCopy);
    return arrayWork;
  }
  
  function splitMerge(B, iBegin, iEnd, A) {
    if (iEnd - iBegin <= 1) {
      return;
    }
  
    const iMid = Math.floor((iEnd + iBegin) / 2);
  
    splitMerge(A, iBegin, iMid, B);
    splitMerge(A, iMid, iEnd, B);
  
    merge(B, iBegin, iMid, iEnd, A);
  }
  
  function merge(B, iBegin, iMid, iEnd, A) {
    let i = iBegin, j = iMid;
    for (let k = iBegin; k < iEnd; k++) {
      if (i < iMid && (j >= iEnd || A[i]['year'] >= A[j]['year'])) {
        B[k] = A[i];
        i = i + 1;
      } else {
        B[k] = A[j];
        j = j + 1;
      }
    }
  }

  return sortDesc(result);

  /*
  return result.sort((a, b) => {
    return b['year'] - a['year'];
  });
  */
}