class Car {
  constructor(brand, model, year, engine, color, gps) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engine = engine;
    this.color = color;
    this.gps = gps;
  } 

  showConfig() {
    console.log(`
    Carro selecionado:
    Marca: ${this.brand}
    Modelo: ${this.model}
    Ano: ${this.year}
    Motor: ${this.engine}
    Cor: ${this.color}
    GPS: ${this.gps}
    `);
  }
}
// Builder
class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setBrand(brand) {
    this.car.brand = brand;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setYear(year) {
    this.car.year = year;
    return this;
  }

  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  setColor(color){
    this.car.color = color;
    return this;
  }
  
  setGPS(gps){
    this.car.gps = gps;
    return this;
  }

  build() {
    return this.car;
  }
}

// Director → monta configurações pré-definidas
class CarDirector {
  static buildDreamCar() {
    return new CarBuilder()
      .setBrand("Honda")
      .setModel("CIVIC TYPE R")
      .setYear("2025")
      .setEngine("2.0 DI DOHC VTEC Turbo")
      .setColor("Baby Blue")
      .setGPS("Honda Connect FL5")
      .build();
  }

  static buildFamilySUV() {
    return new CarBuilder()
      .setBrand("BMW")
      .setModel("X6 M Competition")
      .setYear("2025")
      .setEngine("4.4 V8 TwinPower Turbo")
      .setColor("Carbon Black")
      .setGPS("BMW iDrive 8.5")
      .build();
  }

  static buildRetroCar() {
    return new CarBuilder()
      .setBrand("Ford")
      .setModel("Mustang Fastback")
      .setYear("1969 Restomod")
      .setEngine("5.0 Coyote V8")
      .setColor("Candy Apple Red")
      .setGPS("Restomod Custom Touchscreen")
      .build();
  }

  static buildOffRoad() {
    return new CarBuilder()
      .setBrand("Jeep")
      .setModel("Wrangler Rubicon 392")
      .setYear("2025")
      .setEngine("6.4 V8 HEMI")
      .setColor("Granite Crystal")
      .setGPS("Uconnect Off-Road Navigation")
      .build();
  }

}

// Bulding the Dream Garage For a Millionary 

const dream = CarDirector.buildDreamCar();
const FamilySUV = CarDirector.buildFamilySUV();
const Retro = CarDirector.buildRetroCar();
const OffRoad = CarDirector.buildOffRoad();
const Hyper = new CarBuilder().setBrand("Bugatti").setModel("Veyron Sport").build();


console.log("*********************************")
console.log("Montando sua garagem dos sonhos:")
console.log("*********************************")

dream.showConfig();
FamilySUV.showConfig();
Retro.showConfig();
OffRoad.showConfig();
Hyper.showConfig();


    