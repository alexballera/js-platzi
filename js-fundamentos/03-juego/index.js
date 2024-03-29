const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')

class Juego {
  constructor() {
    this.inicializar()
    this.generarSecuencia()
    this.siguienteNivel()
  }

  inicializar() {
    btnEmpezar.classList.add('hide')
    this.nivel = 1
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde
    }
  }

  generarSecuencia() {
    this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))
  }

  siguienteNivel() {
    this.iluminarSecuencia()
  }

  transformarNumeroAColor(num) {
    const color = {
      0: 'celeste',
      1: 'violeta',
      2: 'naranja',
      3: 'verde'
    }
    return color[num]
  }

  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      const color = this.transformarNumeroAColor(this.secuencia[i])
      setTimeout(() => this.iluminarColor(color), 1000 * i)
    }
  }

  iluminarColor(color) {
    this.colores[color].classList.add('light')

    setTimeout(() => this.apagarColor(color), 1000 / 3)
  }

  apagarColor(color) {
    this.colores[color].classList.remove('light')
  }

}

function empezarJuego() {
  window.juego = new Juego()
}
