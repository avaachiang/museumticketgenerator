function getPrice(){

  var basePrice = 10
  var finalPrice = basePrice // we will start with the final price being equal to base price
  var promoCode = "C3POR2D2"

  var customerAge = document.getElementById('age').value; // store the input value for age
  var dayOfTheWeek = document.getElementById('day').value.toLowerCase(); // Saturday, SATurDAY, SaturDay, saturday => saturday
  var coupon = document.getElementById('coupon').value;
  var finalPriceElement = document.getElementById('finalPrice'); // get the element that we can use to show the final price

  // if the day is a weekend, then final price is 15
  if (dayOfTheWeek == "saturday" || dayOfTheWeek == "sunday") {
    finalPrice = 15;
  }
  // if the day is not a weekend or customer age is <= 5 or customer age >= 65, then final price is 5
  if (dayOfTheWeek == "monday" || customerAge<=5 || customerAge>=65){
    finalPrice = 5;
  }

  // assume coupon is not applied by default
  var couponApplied = false;

  // if final price is <= $5, then we don't apply promo Code
  if (coupon == promoCode && finalPrice > 5 && dayOfTheWeek!="tuesday") {
    finalPrice -= 5;
    couponApplied = true;
  }
// aknowledgement statements - notifies user of any errors or if the promo code doesn't work 
  var finalMessage = '';
  if (customerAge == 0) {
    finalMessage = 'Error: Please enter age.'
  } else if (dayOfTheWeek == '') {
    finalMessage = 'Error: Please enter day of the week.'
  } else {
    finalMessage = 'Final Price: $' + finalPrice;
    if (couponApplied) {
      finalMessage += ' ($5 coupon applied!)'
    } else if (coupon != '') {
      finalMessage += ' (coupon was not applied)'
    }
  }

  finalPriceElement.innerHTML = finalMessage;
}
