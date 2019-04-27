// Let's play! You have to return which player won! In case of a draw return Draw!.
// Example
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!


const rps = (p1, p2) => {
    let g1 = ['rock', 'scissors', 'paper'];
    let g2 = ['scissors', 'paper', 'rock'];
    
    if(p1 === p2) {
      return "Draw!"
    } else {
      for(let i = 0; i < g1.length; i++){
        for(let j = 0; j < g2.length; j++){
          if( p1 === g1[i] && p2 === g2[i] ){
            return "Player 1 won!"
          } 
        }
      }
    }
  return "Player 2 won!"
  };