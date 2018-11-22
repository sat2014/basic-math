const generateDivisibleNumbers = (mNumber) => {
    let divisor_one = 2 + Math.round(Math.random() * mNumber /10)
    let divisor_two = 2 + Math.round(Math.random() * mNumber /10)
    let result = divisor_one * divisor_two
    let divisor = []
    divisor.push(result, divisor_one)
    return divisor
  }

  export default generateDivisibleNumbers