const flourPrice = 1;
const sugarPrice = 1.5;
const eggPrice = 3;
const milkPrice = 2.5;
const chocolatePrice = 10;
const decorationPrice = 3.5;
const fruitsPrice = 5;

chocolateCakePrice =
  flourPrice +
  sugarPrice * 2 +
  eggPrice * 2 +
  chocolatePrice * 2 +
  milkPrice / 2 +
  decorationPrice * 5;

console.log(chocolateCakePrice);

strawberryCakePrice =
  fruitsPrice * 2 +
  flourPrice / 2 +
  sugarPrice / 2 +
  eggPrice / 2 +
  milkPrice / 2 +
  chocolatePrice / 2 +
  decorationPrice * 2;

console.log(strawberryCakePrice);

const ratioMargin = prompt(' Please add desired ratio margin:');

const finalPriceChocolateCake = ratioMargin * chocolatePrice;
const finalPriceStrawberryCake = ratioMargin * strawberryCakePrice;

console.log(chocolateCakePrice + ' € ' + finalPriceChocolateCake + ' € ');
console.log(strawberryCakePrice + ' € ' + finalPriceStrawberryCake + ' € ');

const totalTreasury = 6 * (chocolateCakePrice + strawberryCakePrice) * 5;

console.log(totalTreasury);

const totalRevenue = totalTreasury * 0.9 * ratioMargin;
console.log(totalRevenue);

const totalBenefits = totalRevenue - totalTreasury;
console.log(totalBenefits);

const isEven = totalBenefits % 2 === 0;

isEven && console.log('Bim...');
!isEven && console.log('Bam...');
