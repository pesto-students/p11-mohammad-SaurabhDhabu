// Polymorphism - extends and use already defined classes

class Shape {
  calculateArea() {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.calculateArea());

const triangle = new Triangle(4, 6);
console.log(triangle.calculateArea());

const circle = new Circle(3);
console.log(circle.calculateArea());
