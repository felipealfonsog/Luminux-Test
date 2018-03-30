
//  O(nlog(n))

// 

const ToNum = (A, X) => {
    const pairs = A.filter(Nr => {
      return Nr % 2 === 0;
    });

    
    let left = 0;
    let right = pairs.length - 1;
    let arr = [];
    while (left < right) {
      const sum = pairs[left] + pairs[right];
  
      if (sum !== X) {
        arr.push(pairs[left], pairs[right]);
        left++;
        right--;
      } else if (sum < X) {
        left++;
      } else {
        right--;
      }
    }
    return arr;
  };
  
  const A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 70, 111, 120];
  const X = 12;
  
  ToNum(A, X); // return: [ 2, 120, 4, 70, 6, 10 ] 
  