/*
  Problem 1: Easy — POS Item Calculator
    Create an interface CartItem representing an item in a Point of Sale (POS) 
    system with properties: id (string), name (string), price (number), and 
    quantity (number). Write a function calculateItemTotal(item: CartItem): 
    number that returns the total price for that item (price * quantity).

    Practical Application: Calculating line-item totals in checkout counters or 
    invoice generators.
*/

export type CarItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
}
export const calculatedItemTotal = (item: CarItem): number => {
  const total = (item.price * item.quantity);
  return total;
}