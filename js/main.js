// add scripts

$(document).on('ready', function() {
  // console.log('sanity check!');
  var totalEarnings = new Earnings();

  $('form input').first().trigger('focus');

  //submit form listener
  $('form[name="mealForm"]').on('submit', function(e){
    e.preventDefault();

    //grab values
    var price = Number($('input[name="meal-price"').val());
    var taxRate = Number($('input[name="meal-taxrate"]').val());
    var tipRate = Number($('input[name="meal-tiprate"]').val());
    //new Bill obj
    var bill = new Bill(price, taxRate, tipRate);
    //cache dom locations
    var perCust = $('.totals:eq(0)').children();
    var earnings = $('.totals:eq(1)').children();

    //update tallys
    totalEarnings.tips += bill.calcTip();
    totalEarnings.meals++;

    //add vals for bill to Total Charges
    bill.append(perCust);

    //update Total Earnings
    totalEarnings.append(earnings);

    //clear inputs and return focus to first input
    $('form input[value="Clear"]').trigger('click');
  });

  //listener for Clear btn on form
  $('form input[value="Clear"]').on('click', function(e){
    e.preventDefault();
    var inputs = $('form .form-input');

    inputs.each(function(){
      $(this).val('');
    });

    $('form input').first().trigger('focus');
  });

  //listener for Reset btn
  //resets running totals
  $('.text-center input').on('click', function(e){
    e.preventDefault();
    var tmpBill = new Bill();

    reset($('.earn'), totalEarnings.labels);
    reset($('.bill'), tmpBill.labels);

    totalEarnings.tips = 0;
    totalEarnings.meals = 0;

    $('form input[value="Clear"]').trigger('click');
  });
});
