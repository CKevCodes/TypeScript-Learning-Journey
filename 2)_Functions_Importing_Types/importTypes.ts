import type { ValidatePerson, MakeCar } from "./exportTypes";
import type * as xpT from "./exportTypes";


// Import from an export Types
type ownACar = (carBrand:MakeCar, carModel:MakeCarModel) => string;

type MakeCarModel = string;
type OwnACar = (carBrand: string, carModel: MakeCarModel) => string;

function Myname(fName:xpT.name) {
    return `Hi my name is ${fName}. It is so nice to meet you.`;
}

const makeCarString: MakeCar = function(brandA) {
    return `Licensed ${brandA}`;
};

const boughtCar: OwnACar = (carBrand, carModel) => {
    return `You just bought your dream car: ${makeCarString(carBrand)} model ${carModel}`;
};

const modelCar = "Supra 1800SPX";

console.log(boughtCar("Nissan", modelCar));


//
type PaymentMethod = "creditCard"|"paypal"|"bankTransfer";

interface Payment {
    method: PaymentMethod;
    amount: number;
}

type PaymentRespond = {
    success: boolean;
    message: string;
}

const processPayment = (payment: Payment): PaymentRespond => {
    return {
        success: true,
        message: "Payment Successful!"
    };
};

const payMethMock = "creditCard";
const amountMock = 500;

interface ExtendedUser extends User {
    age: number;
}

type TypeExtendedUser = User & { age: number; }

console.log(processPayment({method: payMethMock, amount: amountMock}));
