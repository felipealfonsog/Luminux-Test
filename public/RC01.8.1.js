var a = [10,2,4,12,14,12,15,9,7];
var resp = [];
var x = 22;
var myAlgoritmo = (a,x,cb)=>{
	a.map((num1)=>{
      a.map(function(num2){
        var ar = []
        if( num1 + num2 === x) { ar = [ num1 , num2] ; resp.push(ar)}
      });
    })
	cb(resp)
}
myAlgoritmo(a,x,(resp)=>{
console.log(resp);
})