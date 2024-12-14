My Rock, Paper, Scissors Game: A Simple Start
I finally made it! My Rock, Paper, Scissors game is a small yet meaningful milestone in my coding journey.
While it’s super simple—both in design and functionality—it’s special because it’s the first project I brought to life entirely on my own.
Although there’s nothing flashy about it right now, it’s a foundation I can build on, and I’m already dreaming of upgrades.

The Design: Minimalist and Clean
I went for a straightforward black-and-white theme with a simple layout:

Three buttons for Rock, Paper, and Scissors.
The "Rock" button is rectangular, while the other two are circular.
A section to display the results—Win, Lose, or Draw—against the computer.
A reset button to restart the game whenever you like.
I kept the design basic to focus more on the functionality and logic. There’s no animation or color, but the clean, uncluttered look makes it easy to use.

The Functionality: How It Works
The game’s core logic is built with JavaScript, and here’s how everything comes together:

Player’s Choice:
Each button is connected to an onclick event. When you click one, it captures your choice (Rock, Paper, or Scissors).

Computer’s Choice:
The computer’s move is generated randomly using Math.random(). It picks one of the three options stored in an array.

Deciding the Winner:
A function compares the player’s choice and the computer’s choice, following the classic rules:

Rock beats Scissors.
Scissors beat Paper.
Paper beats Rock.
If both choices are the same, it’s a draw.
Result Display:
Another function updates the result section to show whether the player won, lost, or tied.

Reset Button:
I added a reset button that clears the result display and lets the player start fresh. This functionality keeps the game simple and user-friendly.

What I Learned
While it’s not a flashy project, working on this game helped me understand the importance of small details in coding.
From using arrays and loops to handling event listeners (onclick) and managing the flow of logic with functions, this project pushed me to think like a programmer.

Special Thanks
I owe a huge thanks to David J. Malan and the CS50 course on edX for inspiring me to dive into coding. Every concept
I learned from the course came to life while working on this project, and it feels amazing to see the results of that effort.

Reflection
It might just be a black-and-white game with basic buttons, but to me, it’s proof that I’m growing and learning. From debugging the reset button to getting the logic to work just right, this project gave me confidence and a sense of accomplishment.


This is just the beginning, and I’m so excited for what’s next—bigger projects, more creativity, and maybe a touch of color next time! 😊
