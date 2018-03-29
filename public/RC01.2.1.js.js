const paresQueSumanX = (array, x) => {
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      let valor = arreglo[i] + arreglo[j];
      if (valor == x) {
        let result = []
        result.push(arreglo[i], arreglo[j]);
        console.log(result);
      }
    }
  }
}