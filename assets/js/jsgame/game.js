
    // 
    let player_score = document.querySelector('.player-score');
    let com_score = document.querySelector('.com-score');
    let message = document.querySelector('.result');
    let button = document.querySelectorAll('.btn-game');
    let winner = [0,0];
    let comOptions = ["rock", "paper", "scissors"];

    // on btn-game click
    for (let index = 0; index < button.length; index++) {
        button[index].addEventListener('click', startGame);
    }

    // startGame on player select hand button 
    function startGame(e) {
        // get value from img value
        let playerSelected = e.target.getAttribute('value');
        // run random for compute select hand image
        let comSelected = Math.floor(Math.random() * comOptions.length);
        
        // winner game
        let result = theWinnerIs(playerSelected, comOptions[comSelected]); 


        if (result === "Player") {
            winner[0]++;
            result += ' 1 Wins';
        }
        if (result === "Com") {
            winner[1]++;
            result += ' Wins';
        }
        if (result === "Draw") {
            result += ' Draw';
        }

        console.log(result)
        console.log(winner);
        player_score.innerHTML = winner[0];
        com_score.innerHTML = winner[1];
        setMessage(result);
    }

    // create message for result game
    function setMessage(selectMsg) {
        message.style.background = '#4C9654';
        message.style.fontsize = '28px';
        message.style.color = '#FFFFFF';
        message.style.padding = '10px 0';
        message.style.margin = '20px';
        message.innerHTML = selectMsg;
    }

    // whoIsTheWinner game
    function theWinnerIs(player, com) {
        console.log('player selected '+player)
        console.log('com selected '+com)
        // document.getElementById("playerSelect").innerHTML = "Player selected "+player
        // document.getElementById("comSelect").innerHTML = "Com selected "+com
        
        let com_img_selected = document.getElementById("img-game-com").getAttribute('value')  
        console.log('com pilih ',com_img_selected)
        
        // show computer selected
        if (com === "paper") {
            document.getElementById("img-game-com").style.background = "#C4C4C4"
        }else if(com === "rock"){
            document.getElementById("img-game-com").style.background = "#C4C4C4"
        }else if(com === "scissors"){
            document.getElementById("img-game-com").style.background = "#C4C4C4"
        }
        

        if (player === com) {
            return 'Draw';
        }

        if (player === "rock") {
            if (com === "scissors") {
                return "Player";
            } else {
                return "Com";
            }
        }

        if (player === "scissors") {
            if (com === "paper") {
                return "Player";
            } else {
                return "Com";
            }
        }

        if (player === "paper") {
            if (com === "rock") {
                return "Player";
            } else {
                return "Com";
            }
        }
    }
