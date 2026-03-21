import type { ValidatePerson, MakeCar } from "./exportTypes";



type MakeCarModel = string;

const makeCarString:MakeCar = function(brandA) {
    return `Licensed ${brandA}`;
}

// Import from an export Types
type ownACar = (carBrand:MakeCar, carModel:MakeCarModel) => string;



const modelCar = "Supra 1800SPX";

const boughtCar:ownACar = function(makeCarString("Nissan"), modelCar) {
    return `You just bought your dream car: ${makeCarString} model ${modelCar}`;
}

console.log(boughtCar(makeCarString("brandCar"), modelCar));


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


console.log(processPayment({method: payMethMock, amount: amountMock}));
