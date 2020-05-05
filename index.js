// Add your Circle class here
// correctly returns the radius property of a Circle instance using `circle.radius'
const pi = Math.PI

class Circle {
    constructor(radius){
        this.radius = radius;
    }
    get diametat() {
        return this.radius
    }
    get diameter() {
        return this.radius * 2
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    get circumference() {    
        return pi * this.diameter
    }

    set circumference(circumference) {
        this.radius = circumference / ( pi * 2 )
    }

    get area() {    
        return pi * (this.radius * this.radius)
    }

    set area(area) {
        this.radius = Math.sqrt( area / pi )
    }
}