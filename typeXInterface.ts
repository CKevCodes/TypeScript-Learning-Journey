interface Dimensions {
  width: number;
  height: number;
}

// Type alias intersecting an interface and adding a literal value
type Graphic = Dimensions & {
  color: string;
};


const monitor: Graphic = {
    width: 1920,
    height: 1080,
    color: "Blue",
}

console.log(monitor);