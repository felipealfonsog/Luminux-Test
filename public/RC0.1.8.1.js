function test(array, n){

    var pares = [];
    
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        
        let sumaPar = array[i] + array[j];
        
        if (sumaPar === n) {
          pares.push({"numero1": array[i], "numero2": array[j]});        
        }      
      }    
    }
  
    console.log(pares);
  }