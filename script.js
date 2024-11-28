let playerScore = 0
let computerScore = 0

function playGame(userChoice){
    const choices =['Piedra','Papel','Tijera']
    const computerChoice =choices[Math.floor(Math.random()*3)];

    let result = ''

    if(userChoice === computerChoice){
        result =`Empate, ambos jugadores eligieron ${userChoice}` 
    }else if(
        (userChoice === 'Piedra' && computerChoice === 'Tijera') ||
        (userChoice === 'Papel' && computerChoice === 'Piedra') ||
        (userChoice === 'Tijera' && computerChoice === 'Papel')
    ){
        result =`Ganastes. ${userChoice} gana a ${computerChoice}`
        playerScore++
    }else{
        result =`Perdistes. ${computerChoice} gana a ${userChoice}`
        computerScore++
    }
    document.getElementById('result').textContent = result
    document.getElementById('score').textContent = `jugador: ${playerScore} | computadora: ${computerScore}`
    
    if(playerScore === 3 || computerScore === 3){
        endgame()
    }

}

function endgame() {
    const finalResult = playerScore === 3 ? "Felicidades, has ganado" : "Lo siento, ha ganado el ordenador"

    document.getElementById("result").textContent = finalResult

    document.getElementById('btnPiedra').disabled = true
    document.getElementById('btnPapel').disabled = true
    document.getElementById('btnTijera').disabled = true
}



