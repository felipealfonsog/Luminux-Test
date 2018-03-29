document.body.onload = function(){
    a=[1,2,3,4,5,6,7,8,9,10];
    x=5;
    alert(pares(a,x));
    function pares(a,x){
        acum='';
        for(i=0;i<a.length;i++){
            for(j=0;j<a.length;j++){
                if(a[i]+a[j]==x){
                    if(acum==''){
                        acum = acum+a[i]+'+'+a[j];
                    }else{
                        acum = acum+' '+a[i]+'+'+a[j];
                    }
                }
            }
        }
        return acum
    }			    
 }