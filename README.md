# Tic Tac Toe Game

### Overview
This is a fully functional Tic Tac Toe game built using **React** with a stylish green-themed user interface. The game is designed for two players, taking turns to place their symbols ("X" and "O") on a 3x3 grid. The game tracks player actions, displays a game log, and announces the winner or a draw at the end of the game.

### Features:
- **Two-player mode**: Players take turns, with the game alternating between "X" and "O".
- **Winner Detection**: Automatically detects if one player wins or if the game ends in a draw.
- **Game Log**: Displays the history of moves, showing which player clicked which square.
- **Responsive Design**: Optimized for desktop and mobile devices with a stylish green theme.
- **Restartable**: At the end of each game, players can start a new game.
  
### Technologies Used:
- **React.js**: JavaScript library for building the game’s user interface.
- **Tailwind CSS**: Utility-first CSS framework used for styling.
- **JavaScript ES6+**: Modern JavaScript features like arrow functions, destructuring, and more.
  

### Prerequisites:
Make sure you have the following installed:
- **Node.js**: (https://nodejs.org/) - For running the development server.
- **npm**: Installed with Node.js.

### Preview
![image](https://github.com/user-attachments/assets/fa249c67-6345-4cb7-aaca-9d03106c1139)

### Project Structure
```bash
tic-tac-toe-game/
│
├── src/
│   ├── components/
│   │   ├── GameBoard.jsx
│   │   ├── Player.jsx
│   │   ├── Log.jsx
│   │   ├── GameOver.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── winning-combinations.js
│
├── public/
│   ├── index.html
│
├── package.json
├── README.md
└── .gitignore
```

### Game Logic
The game board is represented by a 3x3 grid.
Each player takes turns clicking on an empty square to place their symbol ("X" or "O").
The game checks for a winner after every move by comparing the current state of the game board against all possible winning combinations (rows, columns, diagonals).
The game also checks for a draw when all squares are filled without a winner.

### Contributing
If you would like to contribute to the project, feel free to open a pull request or issue. All contributions and suggestions are welcome!

### License
This project is licensed under the MIT License - see the LICENSE file for details.
