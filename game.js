document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("game-board");
    const newGameBtn = document.getElementById("new-game-btn");
    const turnIndicator = document.getElementById("turn-indicator");
    let currentPlayer = "X";
    let gameBoard = ["", "", "", "", "", "", "", "", ""];
  
    // Create the game board
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.setAttribute("data-index", i);
      cell.addEventListener("click", () => handleCellClick(i));
      board.appendChild(cell);
    }
  
    // Handle cell click
    function handleCellClick(index) {
      if (gameBoard[index] === "" && !checkWinner()) {
        gameBoard[index] = currentPlayer;
        renderBoard();
        if (checkWinner()) {
          Swal.fire(`Player ${currentPlayer} wins!`);
          startNewGame();
        } else if (gameBoard.every(cell => cell !== "")) {
          Swal.fire("It's a draw!");
          startNewGame();
        } else {
          currentPlayer = currentPlayer === "X" ? "Y" : "X";
          updateTurnIndicator();
        }
      }
    }
  
    // Start a new game
    function startNewGame() {
      gameBoard = ["", "", "", "", "", "", "", "", ""];
      currentPlayer = "X";
      renderBoard();
      updateTurnIndicator();
    }
  
    // Update turn indicator
    function updateTurnIndicator() {
      turnIndicator.textContent = `Player ${currentPlayer}'s turn`;
    }
  
    // Render the current state of the board
    function renderBoard() {
      const cells = document.querySelectorAll(".cell");
      cells.forEach((cell, index) => {
        cell.textContent = gameBoard[index];
      });
    }
  
    // Check for a winner
    function checkWinner() {
      const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
      ];
  
      for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] !== "" && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          return true;
        }
      }
  
      return false;
    }
  
    // Initial update of turn indicator
    updateTurnIndicator();
  
    // Event listener for the New Game button
    newGameBtn.addEventListener("click", startNewGame);
  });
  