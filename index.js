// Add your Circle class here

const pi = Math.PI;

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  set diameter(d) {
    this.radius = d/2;
  }
  
  set circumference(c) {
    this.radius = c/(pi*2);
  }
  
  set area(a) {
    this.radius = Math.sqrt(a/pi);
  }
  
  get diameter() {
    return this.radius*2;
  }
  
  get circumference() {
    return (this.radius*2)*pi;
  }
  
  get area() {
    return pi*(this.radius*this.radius);
  }
}