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
# Практична робота: SOLID принципи

## Мета
Ознайомлення з принципами SOLID та їх практичне застосування через рефакторинг коду.

## Опис

Було створено код з порушенням принципів SOLID (папка `original`), після чого проведено рефакторинг (папка `refactored`).

## Порушення в original

- SRP (Single Responsibility Principle) — клас Order виконує кілька задач (логіка, email, база даних)
- OCP (Open/Closed Principle) — для зміни логіки потрібно змінювати код
- DIP (Dependency Inversion Principle) — залежність від конкретних реалізацій

## Після рефакторингу

- Кожен клас має одну відповідальність (SRP)
- Логіка розширюється без зміни існуючого коду (OCP)
- Використано залежності через сервіси (DIP)

## Структура проекту