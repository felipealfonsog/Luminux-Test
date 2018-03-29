
/**
 * @param {Array} arr - Array of numbers.
 * @param {number} x - Value to be compared.
 * @returns {Array} Array of pairs that add up to `x`
 * @example
 * pairsThatSumX([2, 6, 7, 1, 5, 6, 1, 8], 8) -> [[2, 6], [7, 1]]
 */
const pairsThatSumX = (arr, x) => {
    const lessThanX = Array.from(new Set(arr.filter(e => e < x)))
    const pairs = []
  
    lessThanX.forEach((e, index) => {
      const slicedArray = lessThanX.slice(index + 1)
      for (let i = 0; i < slicedArray.length; i++) {
        const number = slicedArray[i];
  
        if ((e + number) === x) {
          pairs.push([e, number])
  
          break
        }
      }
    })
  
    return pairs
  }