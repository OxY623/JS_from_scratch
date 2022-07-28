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

    sum = function(array) {
        ...     return (array.length === 0) ? 0 : array[0] + sum(array.slice(1));
        ... }
    
    countIndex = function(array){
        if (array.length==0){return 0} else{ return 1+countIndex(array.slice(1);)}
    }
    
    max = function(array){
        if (array.length==2){
            if(array[0]>array[1]){
                return array[0];
            } else { return array[1];}
    
        let sub_max=max(array.slice(1));
        if (array[0]>sub_max){
            retutn array[0];
        } else { return sub_max;}
        }
    }
}

