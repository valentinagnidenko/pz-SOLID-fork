import { Order } from "./Order";
import { DiscountService } from "./DiscountService";
import { EmailService } from "./EmailService";

export class OrderService {
  constructor(
    private discountService: DiscountService,
    private emailService: EmailService
  ) {}

  process(order: Order) {
    const finalPrice = this.discountService.calculate(order.total);
    console.log("Final price:", finalPrice);

    this.emailService.send();
  }
}