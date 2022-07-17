$(document).ready(function(){
/* let num = 1;
let list1= list(0, 1000000 );
let search1 = binary_search(list1,num);
alert(search1);
 */
factorial = function(n,result){
    alert(n);
    alert(result);
    result = result || 1;
   
    if (!n){ alert(result);
        return result;}
    else  alert(result); return factorial(n-1,result*n);
}
let a = factorial(5);
alert(a)
});

function list(min,max){
    let list=[];
    for(let i=0;min<=max; i++,min++){
        list[i]=min;
     }
    
    //  alert(list);
     return list;
}
function binary_search(list,item){
    let hight=list.length-1;
    let low=0;
    let i=0;

    while (low <= hight){
        let mid =Math.floor((low+hight)/2) ;
        let quess = list[mid];
        if (quess === item){
            alert(i);
        
            return quess;
        }
        else if (quess > item ){
            hight = mid - 1;
        } else low = mid +1;
        i++;
        
   
    }
}