
//Bill class
function Bill(subtotal, taxRate, tipRate) {
  this.subtotal = subtotal;
  this.taxRate = taxRate;
  this.tipRate = tipRate;
}

Bill.prototype.calcTax = function() {
  //calculate dollar amount for tax
  return this.subtotal * this.taxRate;
};

Bill.prototype.calcTip = function() {
  //calculate dollar amount for tip
  return  this.subtotal * this.tipRate;
};
