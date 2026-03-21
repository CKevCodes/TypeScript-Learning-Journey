/**
 * Sample TypeScript file demonstrating 5 real-world applications of type aliases
 * 
 * Type aliases allow us to give a name to a type, making our code more readable,
 * maintainable, and easier to refactor. They are especially useful for complex types
 * that are used in multiple places.
 */

// 1. API Response Types
// Real-world use case: Defining the structure of data returned from REST APIs
type ApiResponse<T> = {
  data: T;
  status: 'success' | 'error';
  message: string;
  timestamp: Date;
};

type User = {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
};

// Usage example:
const userApiResponse: ApiResponse<User> = {
  data: {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    role: 'admin'
  },
  status: 'success',
  message: 'User retrieved successfully',
  timestamp: new Date()
};

// 2. Configuration Objects
// Real-world use case: Defining application configuration with nested structures
type DatabaseConfig = {
  host: string;
  port: number;
  database: string;
  username: string;
  password: string;
  ssl?: boolean;
  maxConnections?: number;
};

type AppConfig = {
  port: number;
  env: 'development' | 'staging' | 'production';
  database: DatabaseConfig;
  logging: {
    level: 'debug' | 'info' | 'warn' | 'error';
    enabled: boolean;
  };
  features: {
    authentication: boolean;
    caching: boolean;
    rateLimiting: boolean;
  };
};

// Usage example:
const config: AppConfig = {
  port: 3000,
  env: 'development',
  database: {
    host: 'localhost',
    port: 5432,
    database: 'myapp',
    username: 'admin',
    password: 'secret',
    ssl: false,
    maxConnections: 10
  },
  logging: {
    level: 'debug',
    enabled: true
  },
  features: {
    authentication: true,
    caching: true,
    rateLimiting: false
  }
};

// 3. Event Handler Types
// Real-world use case: Defining types for event-driven architectures
type EventHandler<T = any> = (event: T) => void;

type UserEvent = {
  type: 'user_created' | 'user_updated' | 'user_deleted';
  userId: string;
  timestamp: Date;
  metadata?: Record<string, any>;
};

type PaymentEvent = {
  type: 'payment_processed' | 'payment_failed' | 'payment_refunded';
  paymentId: string;
  amount: number;
  currency: string;
  timestamp: Date;
};

// Usage example:
const handleUserEvent: EventHandler<UserEvent> = (event) => {
  console.log(`User event: ${event.type} for user ${event.userId}`);
};

const handlePaymentEvent: EventHandler<PaymentEvent> = (event) => {
  console.log(`Payment event: ${event.type} for amount ${event.amount} ${event.currency}`);
};

// 4. Database Model/Entity Types
// Real-world use case: Defining database schema types for ORM or database operations
type BaseEntity = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
};

type Product = BaseEntity & {
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  tags: string[];
  images: string[];
};

type Order = BaseEntity & {
  userId: string;
  products: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  totalAmount: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
};

// Usage example:
const sampleProduct: Product = {
  id: 'prod_123',
  createdAt: new Date(),
  updatedAt: new Date(),
  name: 'Wireless Headphones',
  description: 'High-quality noise-cancelling wireless headphones',
  price: 299.99,
  category: 'Electronics',
  inStock: true,
  tags: ['audio', 'wireless', 'electronics'],
  images: ['image1.jpg', 'image2.jpg']
};

// 5. Form Validation Types
// Real-world use case: Defining form field types and validation rules
type FormField<T> = {
  value: T;
  error?: string;
  touched: boolean;
  dirty: boolean;
  validationRules: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (value: T) => string | null;
  };
};

type LoginForm = {
  email: FormField<string>;
  password: FormField<string>;
  rememberMe: FormField<boolean>;
};

type RegistrationForm = {
  username: FormField<string>;
  email: FormField<string>;
  password: FormField<string>;
  confirmPassword: FormField<string>;
  termsAccepted: FormField<boolean>;
};

// Usage example:
const loginForm: LoginForm = {
  email: {
    value: '',
    error: undefined,
    touched: false,
    dirty: false,
    validationRules: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    }
  },
  password: {
    value: '',
    error: undefined,
    touched: false,
    dirty: false,
    validationRules: {
      required: true,
      minLength: 8
    }
  },
  rememberMe: {
    value: false,
    error: undefined,
    touched: false,
    dirty: false,
    validationRules: {}
  }
};

/**
 * Benefits of using type aliases in these examples:
 * 
 * 1. Reusability: ApiResponse<T> can be used for any API response
 * 2. Readability: Complex nested types are given meaningful names
 * 3. Maintainability: Changes to a type definition automatically update all usages
 * 4. Type Safety: TypeScript can catch errors at compile time
 * 5. Documentation: Type names serve as inline documentation
 * 6. Refactoring: Easy to update types across the entire codebase
 * 7. Generics: Can create flexible, reusable types like ApiResponse<T>
 * 8. Composition: Can combine multiple types using intersection (&) and union (|) operators
 */