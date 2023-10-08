class Spaceship {
    constructor(name, crew) { // getChoose Está recebendo o valor para determinar 'true' ou 'false' para o engate
        this.name = name
        this.crew = crew
        this.velocity = 0
        this.floodgates = false
        this.hitched = false //this.hitched = getChoose == 1 Um meio de definir True ou False de modo direto

    }

    speedUp(acceleration) {
        this.velocity += acceleration
    }

    hitchedSpaceship() {
        this.floodgates = true
        this.hitched = true
        return `Spaceship ${this.name} hitched. Floodgates open!`
    }
}

let array = []

let click = document.querySelector('#register')
click.addEventListener('click', register)

function register() {
    do{

        let getName = prompt("Spaceship's name:")
        let getCrew = Number(prompt('Crew:'))

        array.push(new Spaceship(getName, getCrew))

        if(getName === null || getCrew === null) {
            array.pop()
            alert("Don't leave the inputs empty!") //Não deixe os campos vazios!
            doIt = Number(prompt("Do you want to try again? \nYes(1)\nNo(2)")) //Deseja tentar novamente
        } else {
            doIt = Number(prompt("Register another spaceship? \nYes(1)\nNo(2)")) //Realizar o cadastro de mais uma nave
        }

    } while(doIt === 1)

    showSpaceships(array)    
}

function inLista(array, choose) {
    return typeof array[choose] !== 'undefined'
    //return array.find((a) => a.name === choose)
}

function hitched(array, number) {
    if(array[number].floodgates === true) {
        return true
    } else {
        return false
    }
}

function chooseHitched() {
    let choose
    choose = Number(prompt('Spaceship position: ') - 1) //Nº pronto para o índice

    //ADD UM VERIFICADOR DE SE, A NAVE JÁ ESTIVER ENGATADA
    //RETORNAR UMA MENSAGEM

    if(inLista(array, choose) && !hitched(array, choose)) {
        alert(array[choose].hitchedSpaceship())
    } else {
        alert("SPACESHIP HITCHED OR NOT FOUND!")  //NAVE JÁ ENGATADA OU NÃO ENCONTRADA
    }
}

function showSpaceships(naves) {

    let selSelect = document.querySelector('#selSelect')
    let c = 0
    selSelect.innerHTML = ``

    naves.filter(element => {
        let selOptions = document.createElement('option')
        selOptions.text = `${c + 1}ª Ship: ${element.name} - [Crew: ${element.crew}]`
        selSelect.appendChild(selOptions)
        c++
    })
}

function resetAll() {
    array = []
    selSelect.innerHTML = ``
}
