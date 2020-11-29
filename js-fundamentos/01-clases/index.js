class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar(fn) {
    var {nombre, apellido} = this
    console.log(`Hola, me llamo ${nombre} ${apellido}`);
    if (fn) {
      fn(nombre, apellido)
    }
  }

  soyAlto() {
    return this.altura > 1.8
  }
}

// Hereda de Persona con extends
class Desarrollador extends Persona {
  constructor(nombre, apellido, altura) {
    super(nombre, apellido, altura)
  }

  saludar(fn) {
    var {nombre , apellido} = this
    console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`);

    if (fn) {
      fn(nombre, apellido, true)
    }
  }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen día ${nombre} ${apellido}`);

  if (esDev) {
    console.log('No sabía que eres desarrollador');
  }
}

var alex = new Persona('Alex', 'Ballera', 1.81)
var jose = new Persona('Jose', 'Lugo', 1.71)
var pedro = new Desarrollador('Pedro', 'Bolivar', 1.91)

alex.saludar()
jose.saludar(responderSaludo)
pedro.saludar(responderSaludo)
