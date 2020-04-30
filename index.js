// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius 
    }
    get pi() {
        return Math.PI;
    }  

    get diameter() {
        return this.radius * 2
    }

    get circumference() {
        return this.diameter * this.pi
    }

    get area() {
        return this.radius ** 2 * this.pi 
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    set circumference(circumference) {
        this.radius = circumference / (this.pi * 2)
    }



}