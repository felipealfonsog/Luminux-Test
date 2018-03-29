function sumArray(){
    var array=[1,2,3,4,5,6,7,8,9,0];
    var x=7
    var result = [];
    array.map((obj1, pos1)=>{
      let newArray= array;
      newArray.splice(pos1,1);
      newArray.map((obj2, pos2)=>{
        if(obj1+obj2 == x){
          //La siguiente linea de codigo descomentar para ver cuanddo encuentre cada pareja
          //console.log("R:"+obj1+"y"+obj2 )
          result.push([obj1,obj2])
        }
      })
    })
    console.log(result)
  }
  sumArray()