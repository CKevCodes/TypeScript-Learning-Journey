type CarModel = {
    id: number,
    tires: string,
    serialEngineNumber: number,
    maxSpeed: number,
    color: "red"|"blue"|"black",
    numberOfSeats?: 1|2|4|6;
};

const lamborghiniCar: CarModel = {
    id: 123,
    tires: "BridgeStone Tires",
    serialEngineNumber: 55512345,
    maxSpeed: 150,
    color: "black",
    numberOfSeats: 1,
}

const mazdaCar: CarModel = {
    id: 453,
    tires: "Performance Tires",
    serialEngineNumber: 123001,
    maxSpeed: 250,
    color: "blue"
}

console.log(lamborghiniCar);
console.log(mazdaCar);

