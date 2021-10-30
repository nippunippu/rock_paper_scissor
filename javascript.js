let player_score = 0
let computer_score = 0
let announce = ""
let round = []

let plays = ['rock', 'paper', 'scissors']

let computerPlay = () => {
	return plays[Math.floor(Math.random() * 3)]
};

let playerPlay = () => {
	let player_play = prompt("Type your play").toLowerCase()
	return player_play
}

let playRound = (playerSelection, computerSelection) => {

	if (playerSelection == "rock") {
		if (computerSelection == "scissors") {
			player_score = player_score + 1
			announce = "Player's " + playerSelection + " wins Computer's " + computerSelection
		}
		if (computerSelection == "paper") {
			computer_score = computer_score + 1
			announce = "Player's " + playerSelection + " loses to Computer's " + computerSelection
		}
		if (computerSelection == "rock") {
			announce = "Player's " + playerSelection + " ties to Computer's " + computerSelection
		}
	}
	if (playerSelection == "scissors") {
		if (computerSelection == "paper") {
			player_score = player_score + 1
			announce = "Player's " + playerSelection + " wins Computer's " + computerSelection
		}
		if (computerSelection == "rock") {
			computer_score = computer_score + 1
			announce = "Player's " + playerSelection + " loses to Computer's " + computerSelection
		}
		if (computerSelection == "scissors") {
			announce = "Player's " + playerSelection + " ties to Computer's " + computerSelection
		}
	}
	if (playerSelection == "paper") {
		if (computerSelection == "rock") {
			player_score = player_score + 1
			announce = "Player's " + playerSelection + " wins Computer's " + computerSelection
		}
		if (computerSelection == "scissors") {
			computer_score = computer_score + 1
			announce = "Player's " + playerSelection + " loses to Computer's " + computerSelection
		}
		if (computerSelection == "paper") {
			announce = "Player's " + playerSelection + " ties to Computer's " + computerSelection
		}
	}

	console.log(announce)

	return [player_score, computer_score, announce]
}

let game = () => {
	for (i = 1; i < 6;i++) {
		round = playRound(playerPlay(), computerPlay())
		console.log(round[0], round[1])
	}
	if (round[0] > round[1]) {
		return "Player WIN: " + round[0] + " Computer LOSE: " + round[1]
	}
	if (round[0] < round[1]) {
		return "Player LOSE: " + round[0] + " Computer WIN: " + round[1]
	}

	if (round[0] == round[1]) {
		return "Player TIE: " + round[0] + " Computer TIE: " + round[1]
	}
}


console.log(game())
