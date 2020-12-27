const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const ULTIMO_NIVEL = 10


class Juego{
    constructor(){
        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
    }
    inicializar(){
        this.elegirColor = this.elegirColor.bind(this)
        this.siguienteNivel = this.siguienteNivel.bind(this)
        //this.
        btnEmpezar.classList.add('hide')
        this.nivel = 1
        this.colores={
            celeste,
            violeta,
            naranja,
            verde
        }
    }
    generarSecuencia(){
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n=>Math.floor(Math.random()*4))
    }
    siguienteNivel(){
        this.subnivel = 0
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }
    transformarNuemeroAColor(numero){
        switch(numero){
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2: 
                return 'naranja'
            case 3:
                return 'verde'
        }
    }transformarColorANumero(color){
        switch(color){
            case 'celeste':
                return 0 
            case 'violeta':
                return 1
            case 'naranja': 
                return 2
            case 'verde':
                return 3
        }
    }
    iluminarSecuencia(){
        for(let i=0; i<this.nivel; i++){
            let color = this.transformarNuemeroAColor(this.secuencia[i])
            setTimeout(()=>this.iluminarColor(color),1000*i) 
        }
    }
    iluminarColor(color){
        this.colores[color].classList.add('light')
        setTimeout(()=>this.apagarColor(color),350)
    }
    apagarColor(color){
        this.colores[color].classList.remove('light')
    }
    agregarEventosClick(){
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
    }
    elegirColor(ev){

        const nombreColor = ev.target.dataset.color
        const numeroColor =this.transformarColorANumero(nombreColor) 
        this.iluminarColor(nombreColor)
        if(numeroColor === this.secuencia[this.subnivel]){
            this.subnivel++

            if(this.subnivel === this.nivel){
                this.nivel++
                
                if(this.nivel ===(ULTIMO_NIVEL+1)){

                }else{
                    setTimeout(this.siguienteNivel,1500)
                }
            }
            
        }else{
            console.log("Perdiste!!!")
        }
    }
}

function empezarJuego(){
     window.juego = new Juego
}