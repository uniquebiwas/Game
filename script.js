function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    const result = getResult(userChoice, computerChoice);
  
    Swal.fire({
      title: 'Result',
      html: `You chose ${userChoice}. Computer chose ${computerChoice}.<br>${result}`,
      icon: getResultIcon(result),
    });
  }
  
  function getResult(user, computer) {
    if (user === computer) {
      return 'It\'s a tie!';
    } else if (
      (user === 'rock' && computer === 'scissors') ||
      (user === 'paper' && computer === 'rock') ||
      (user === 'scissors' && computer === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'You lose!';
    }
  }
  
  function getResultIcon(result) {
    return result.includes('win') ? 'success' : result.includes('lose') ? 'error' : 'info';
  }
  
  function redirectToGame(gamePage) {
    window.location.href = gamePage;
  }
  