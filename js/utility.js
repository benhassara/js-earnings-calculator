
//Bill class
function Bill(price, taxRate, tipRate) {
  this.taxRate = taxRate * 0.01;
  this.tipRate = tipRate * 0.01;
  this.price = price;
  this.labels = ['Subtotal: ', 'Tip: ', 'Total: '];
}

//Bill methods
Bill.prototype.calcTax = function() {
  //calculate dollar amount for tax
  return this.price * this.taxRate;
};

Bill.prototype.calcTip = function() {
  //calculate dollar amount for tip
  return this.price * this.tipRate;
};

Bill.prototype.calcTotal = function() {
  //calculate total
  return this.price + this.calcTax() + this.calcTip();
};

Bill.prototype.calcSub = function() {
  //calculate subtotal
  return this.price + this.calcTax();
};

Bill.prototype.toArray = function() {
  //return array with: [subtotal, tip, total]
  return [this.calcSub(), this.calcTip(), this.calcTotal()];
};

Bill.prototype.append = function(elems) {
  //modify DOM to insert data for 1 Bill
  var labels = this.labels;
  var vals = this.toArray();

  elems.each(function(i){
    $(this).html('<p class="bill">' + labels[i] + ' $' + vals[i].toFixed(2) + '</p>');
  });

  return elems;
};

//Earnings class
//hold running total for tips and num meals
function Earnings() {
  this.tips = 0;
  this.meals = 0;
  this.labels = ['Total Tips: ', 'Meal count: ', 'Average tip: '];
}

Earnings.prototype.avgTip = function() {
  //calculate avg tip per bill
  return this.tips / this.meals;
};

Earnings.prototype.toArray = function() {
  //represent values in array
  return [this.tips, this.meals, this.avgTip()];
};

Earnings.prototype.append = function(elems) {
  //modify DOM to update running totals
  var labels = this.labels;
  var vals = this.toArray();

  elems.each(function(i){
    if (i === 1) {
      $(this).html('<p class="earn">' + labels[i] + ' ' + vals[i] + '</p>');
    }
    else {
      $(this).html('<p class="earn">' + labels[i] + ' $' + vals[i].toFixed(2) + '</p>');
    }
  });
};

//general utility funcs
function reset(elems, labels) {
  //reset the elems with the labels
  //elems is jQuery selection
  //labels is array of strings

  elems.each(function(i){
    $(this).html('<p>' + labels[i] + '</p>');
  });
}
