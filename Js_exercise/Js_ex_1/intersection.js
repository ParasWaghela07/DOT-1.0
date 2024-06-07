// function findCommon(a,b){
//     let c=[];
//     for(let i=0;i<a.length;i++){
//         if(c.length>0 && a[i]===c[c.length-1]) continue;
//         for(let j=0;j<b.length;j++){
//             if(a[i]===b[j]){
//                 c.push(a[i]);
//                 break;
//             }
//         }
//     }

//     return c;
// }

function findCommon(a,b){
    let c=[];
    let i=0
    let j=0;
    while(i<a.length && j<b.length){
        if(a[i]==b[j]){
            
            if(c.length===0 || c[c.length-1]!=a[i]){
                c.push(a[i]);
            }
            i++;
            j++;
        }
        else if(a[i]<b[j]){
            i++;
        }
        else{
            j++;
        }
    }
    return c;
}

let a=[1, 1,2, 3, 4, 5,5];
let b=[1,1,2,3, 4, 5, 5,6, 7];

let c=findCommon(a,b);
console.log(c)


//solution
function findCommonElements(arr1, arr2) {
    // Create an empty array to hold the common elements
    let commonElements = [];
  
    // Loop through each element in arr1
    for (let i = 0; i < arr1.length; i++) {
      // Check if the current element is in arr2
      if (arr2.includes(arr1[i])) {
        // If the element is in arr2 and not already in commonElements array, add it
        if (!commonElements.includes(arr1[i])) {
          commonElements.push(arr1[i]);
        }
      }
    }
  
    // Sort the commonElements array in ascending order
    commonElements.sort((a, b) => a - b);
  
    // Return the commonElements array
    return commonElements;
  }
  
  // Example usage
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [3, 4, 5, 6, 7];
  const commonElements = findCommonElements(arr1, arr2);
  console.log(commonElements); // Outputs: [3, 4, 5]