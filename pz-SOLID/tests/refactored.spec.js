const { Order } = require("../src/refactored/Order");
const { OrderService } = require("../src/refactored/OrderService");
const { DiscountService } = require("../src/refactored/DiscountService");
const { EmailService } = require("../src/refactored/EmailService");

test("Order processing works correctly", () => {
  const order = new Order(["item1"], 200);

  const discountService = new DiscountService();
  const emailService = new EmailService();

  const orderService = new OrderService(discountService, emailService);

  orderService.process(order);

  expect(order.total).toBe(200);
});