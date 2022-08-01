$(document).ready(function(){
    let quickSort=function(arr){
      if (arr.length<2){
        return arr;}
      else{
        let pivot=arr[0];
        let less = [];
        let greater = [];
        /* for (let x of arr.slice(1)){
            if ( x <= pivot){
              less.unshift(x);
            } else{
             greater.unshift(x);
            }
            console.log(less);
          
        } */
        for (let i=1; i<arr.length-1;i++){
           if (arr[i]<pivot){
            less.unshift(arr[i]);
           } else {greater.unshift(x);
          }
        }
       
       
      }
      let total=less+pivot+greater;
        return total;
      }
      let x=[23,2,56,76,1,0,2,564];
      
      console.log(quickSort(x));

    });
    