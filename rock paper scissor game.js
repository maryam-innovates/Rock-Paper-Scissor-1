const score = {
    Win : 0,
    Tie : 0,
    Losses : 0
  };
  
  function playgame(playermove){
  
    const computermove = computerpickmove();
    let result = '';
 
  if(playermove === 'Paper'){
  if(computermove === 'Paper'){
  result = 'Tie';
  }
  else if(computermove === 'Rock'){
  result = 'Win';
  }
  else if(computermove === 'Scissors'){
  result = 'Losses';                                                                                     
  }
  }
  
  if(playermove === 'Rock'){
    if(computermove === 'Rock'){
    result = 'Tie';
    }
    else if(computermove === 'Paper'){
    result = 'Losses';
    }
    else if(computermove === 'Scissors'){
    result = 'Win';
    }
    }
  
    if(playermove === 'Scissor'){
      if(computermove === 'Rock'){
      result = 'Losses';
      }
      else if(computermove === 'Paper'){
      result = 'Win';
      }
      else if(computermove === 'Scissors'){
      result = 'Tie';
      }
      }
  
     if(result === 'Win'){
      score.Win+=1;
     }
     else if(result === 'Tie'){
      score.Tie+=1;
     }
     else if(result === 'Losses'){
      score.Losses += 1;
     }
  
    return alert(`You Picked ${playermove}.Computer Picked ${computermove}.You ${result}.Wins: ${score.Win}.Losses: ${ score.Losses}.Ties: ${score.Tie}`);
  }
  
  
  function computerpickmove() {
    let computermove = '';
    let randomNum = Math.random();
  
    if(randomNum >= 0 && randomNum < 1 / 3){
      computermove = 'Rock';
        }
  
        else if(randomNum >= 1 / 3 && randomNum < 2 / 3){
          computermove = 'Paper';
        }
  
        else if(randomNum >= 2 / 3 && randomNum < 1) {
          computermove = 'Scissors';
        }
        return computermove;
      }
    