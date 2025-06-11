class Vehicle{
    constructor(name,color,model,gear){
        this.name=name;
        this.color=color;
        this.model=model;
        this.gear=gear;
    }

    makeEngine(){
        console.log(`This is my ${this.name} of color ${this.color} model ${this.model} with gears ${this.gear}`);
    }

    static startEngine(){
        console.log(`The engine of my ${this.name} is started`);
    }
}

class Bike extends Vehicle{
    constructor(name,color,model,gear){
        this.name=name;
        this.color=color;
        this.model=model;
        this.gear=gear;
    }

    makeEngine(){
        console.log(`This is my ${this.name} of color ${this.color} model ${this.model} with gears ${this.gear}`);
    }
}

class SportsCar extends Vehicle{
    constructor(name,color,model,gear,enginePower){
        super(name,color,model,gear)
        this.name = name
        this.color = color
        this.model = model
        this.gear = gear
        this.enginePower = enginePower
    }
}

const vechile = new Vehicle("AUDI","Black",2025,5)
vechile.makeEngine()
const sportsCar = new SportsCar("Lamborgini","Black",2025,6,"720HP")
sportsCar.makeEngine()

Vehicle.startEngine()