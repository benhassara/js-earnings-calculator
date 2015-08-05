// add scripts

$(document).on('ready', function() {
  // console.log('sanity check!');

  $('form[name="mealForm"]').on('submit', function(e){
    e.preventDefault();
    var price = $('input[name="meal-price"').val();
    var taxRate = $('input[name="meal-taxrate"]').val();
    var tipRate = $('input[name="meal-tiprate"]').val();

    console.log(price, taxRate, tipRate);
  });
});
