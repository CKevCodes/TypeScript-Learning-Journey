/*
  Problem 2: Easy — E-Commerce Product Mapper
    Create a type ProductStock using a TypeScript Record type or index 
    signature where keys are product IDs (string) and values are their 
    available stock counts (number). Write a function isInStock(stockMap: 
    ProductStock, productId: string): boolean that checks if a product exists 
    and has a quantity greater than 0.

    Practical Application: Quick inventory lookup during online store user 
    sessions.
*/

export type ProductStock = Record<string, number>;

export const isInStock = (stockMap: ProductStock, productId: string): boolean => {
  return (!(productId in stockMap) && !(product));
}

isInStock({"markov", }, "playa")
