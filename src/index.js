module.exports = function toReadable (number) {
  if (number === 0) return 'zero';

  let resultString = '';
  let oneTwenty = ['', 'one', 'two', 'three', 'four', 'five', 
    'six', 'seven', 'eight', 'nine', 'ten', 
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 
    'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let twentyNinety = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 
    'sixty', 'seventy', 'eighty', 'ninety'];
  let numberDigits = number.toString().split('').map((item, index, array) => {
    return +item * Math.pow(10, array.length - index - 1);
  });    

  for (let i = 0; i < numberDigits.length; i++) {
    let item = numberDigits[i];
    if (item >= 100) {
      resultString += `${oneTwenty[item / 100]} hundred `;
    } else if (item >= 20 && item < 100) {
      resultString += `${twentyNinety[item / 10]} `;
    } else if (item >= 10 && item < 20) {
      resultString += `${oneTwenty[item + numberDigits[i + 1]]} `;
      break;
    } else {
      resultString += `${oneTwenty[item]}`;
    }    
  }  

  return resultString.trim();
}
