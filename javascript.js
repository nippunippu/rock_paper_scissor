let player_score = 0
let computer_score = 0
let announce = ""
let final_announce = ""
let round = []

let plays = ['rock', 'paper', 'scissors']

let playRound = (playerSelection, computerSelection) => {

	if (playerSelection == "rock") {
		if (computerSelection == "scissors") {
			player_score = player_score + 1
			announce = "You WIN! PLAYER: " + playerSelection + " WINS CPU: " + computerSelection
		}
		if (computerSelection == "paper") {
			computer_score = computer_score + 1
			announce = "You LOSE! CPU: " + computerSelection + " WINS PLAYER: " + playerSelection
		}
		if (computerSelection == "rock") {
			announce = "TIE! PLAYER: " + playerSelection + " CPU: " + computerSelection
		}
	}
	if (playerSelection == "scissors") {
		if (computerSelection == "paper") {
			player_score = player_score + 1
			announce = "You WIN! PLAYER: " + playerSelection + " WINS CPU: " + computerSelection
		}
		if (computerSelection == "rock") {
			computer_score = computer_score + 1
			announce = "You LOSE! CPU: " + computerSelection + " WINS PLAYER: " + playerSelection
		}
		if (computerSelection == "scissors") {
			announce = "TIE! PLAYER: " + playerSelection + " CPU: " + computerSelection
		}
	}
	if (playerSelection == "paper") {
		if (computerSelection == "rock") {
			player_score = player_score + 1
			announce = "You WIN! PLAYER: " + playerSelection + " WINS CPU: " + computerSelection
		}
		if (computerSelection == "scissors") {
			computer_score = computer_score + 1
			announce = "You LOSE! CPU: " + computerSelection + " WINS PLAYER: " + playerSelection
		}
		if (computerSelection == "paper") {
			announce = "TIE! PLAYER: " + playerSelection + " CPU: " + computerSelection
		}
	}

	if (player_score > 4) {
		final_announce = "PLAYER WINS " + player_score + " TO CPU " + computer_score
	}

	if (computer_score > 4) {
		final_announce = "PLAYER LOSES " + player_score + " TO CPU " + computer_score
	}

	return [player_score, computer_score, announce, final_announce]

}

let computerPlay = () => {
	return plays[Math.floor(Math.random() * 3)]
};

const rock_button = document.querySelector('#rock_button')
const paper_button = document.querySelector('#paper_button')
const scissors_button = document.querySelector('#scissors_button')

const display_results = document.querySelector('#display_results')

rock_button.addEventListener('click', function () {
	round = playRound('rock', computerPlay())
	display_results.innerHTML = round
})

paper_button.addEventListener('click', function () {
	round = playRound('paper', computerPlay())
	display_results.innerHTML = round
})

scissors_button.addEventListener('click', function () {
	round = playRound('scissors', computerPlay())
	display_results.innerHTML = round
})