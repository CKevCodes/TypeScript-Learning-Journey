TypeScript Objects

Objects in TypeScript allow you to group related data and functionality together using defined structures. By explicitly typing object properties, optional fields, and read-only attributes, you ensure strong type safety across real-world web applications like dynamic forms, dynamic product catalogs, and data-processing pipelines.

What You Will Learn

    Defining dynamic key-value types using Record and index signatures.

    Modeling real-world nested structures for e-commerce and POS systems.

    Managing state mutability with readonly and optional (?) fields.

    Building modular data interfaces that chain directly into complex, hard-level challenges.

Problem 1: Easy — POS Item Calculator
Create an interface CartItem representing an item in a Point of Sale (POS) system with properties: id (string), name (string), price (number), and quantity (number). Write a function calculateItemTotal(item: CartItem): number that returns the total price for that item (price * quantity).

Practical Application: Calculating line-item totals in checkout counters or invoice generators.

Problem 2: Easy — E-Commerce Product Mapper
Create a type ProductStock using a TypeScript Record type or index signature where keys are product IDs (string) and values are their available stock counts (number). Write a function isInStock(stockMap: ProductStock, productId: string): boolean that checks if a product exists and has a quantity greater than 0.

Practical Application: Quick inventory lookup during online store user sessions.

Problem 3: Medium — Dynamic User Profile Updates
Create an interface UserProfile with id (string, readonly), username (string), email (string), and optional fields phoneNumber? (string) and avatarUrl? (string). Write a function updateProfile(current: UserProfile, updates: Partial<Omit<UserProfile, 'id'>>): UserProfile that returns a new updated user profile without mutating the original id.

Practical Application: Managing editable user profile settings in modern CRUD applications.

Problem 4: Medium — Order Summary Aggregator
Using the CartItem interface from Problem 1, write a function summarizeOrder(items: CartItem[]) that returns an object containing:

    totalAmount: sum of all item totals (using calculateItemTotal).

    totalQuantity: sum of all quantities.

    itemCount: total number of unique items.

Practical Application: Order processing pipelines and invoice creation in online stores.

Problem 5: Hard — Multi-Store POS Inventory Sync System
Combine concepts from Problem 1, 2, 3, and 4. Create a multi-store checkout processor.

    Define a StoreInventory object where keys are store IDs and values are ProductStock maps (from Problem 2).

    Create a function processMultiStoreOrder:

        Parameters: storeId (string), orderItems (CartItem[]), inventory (StoreInventory), and user (UserProfile).

        Logic:

            Verify the store exists in inventory.

            Use isInStock logic to ensure every item in orderItems is available in that specific store's stock.

            If valid, return an object containing the user's username and email (from Problem 3), the aggregated total via summarizeOrder (from Problem 4), and an updated StoreInventory object with decremented stock levels. If stock is insufficient or the store does not exist, throw an explicit error.

Practical Application: Distributed enterprise e-commerce inventory sync across physical branch locations.