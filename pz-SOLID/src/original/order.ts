class Order {
  constructor(public items: string[], public total: number) {}

  saveToDatabase() {
    console.log("Saving order to database...");
  }

  sendEmail() {
    console.log("Sending email...");
  }

  calculateDiscount() {
    if (this.total > 100) {
      return this.total * 0.9;
    }
    return this.total;
  }
}

const order = new Order(["item1", "item2"], 150);

order.saveToDatabase();
order.sendEmail();
console.log(order.calculateDiscount());