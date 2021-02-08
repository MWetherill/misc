// TASK
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

// For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.

class Rectangle {
  constructor(sideA, sideB) {
    this.sideA = sideA
    this.sideB = sideB
  }
  getArea(){return this.sideA*this.sideB}
  getPerimeter(){return (this.sideA + this.sideB) *2}
}

// EXAMPLES

// let circy = new Circle(11)
// circy.getArea()
// Should return 380.132711084365

// let circy = new Circle(4.44)
// circy.getPerimeter()
// Should return 27.897342763877365

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return 3.14 * (this.radius * this.radius);
  }

  get perimeter() {
    return this.calcPerimeter();
  }

  calcPerimeter() {
    return 2 * 3.14 * this.radius;
  }
}

let circle1 = new Circle(11)
console.log(circle1.area);

let circle2 = new Circle(4.44)
console.log(circle2.perimeter);