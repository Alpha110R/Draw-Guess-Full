# Draw-Guess-Full
# The app is for the phone interface. You can draw on the canvas only at "phone mode" (Inspect -> Enter the tablet/phone mode)

The Draw & Guess game is a real-time game for two players. The server chooses which player will be the painter and the second player will be the guesser.

The painter chooses a word from the diffrent options and difficulty, then he will need to draw the best way to describe the word.

In real-time the guesser sees the drawing and the painter sees the guess that the guesser writes.

When the guesser guess the right word that the painter chose, the role for the player switch.

I used:

Node.js + express + React.js + Socket.IO

To start the app you will need client and server, first of all run the server and than the client
1. npm install

2. npm start

3.The app is for the phone interface. You can draw on the canvas only at "phone mode"
(Inspect -> Enter the tablet/phone mode)

‘Draw & Guess’ game for 2 players.

The game includes 5 views:
Welcome view
Word choosing view
Drawing view
Guessing view
Waiting view

The first player starts the game by choosing between 3 given words, words vocabulary is provided below (easy, medium, hard), then he will try to draw the word’s meaning,
When drawing, the second player will see the drawing and will try to guess the word. Once succeed, he will get to pick a new word, draw it, and so on.

Rules:

The first player who starts the game will have to wait for the second player to join (refresh at both tabs for starting a new game).
Players can guess as many times they want.
When guessing right, the game session will earn points:
Easy word - 1 point, Medium word - 3 points, Hard word - 5 points

DB for saving the sessions and show the best session score in welcome screen. (The best session score is the highest score for minimum time played)

https://github.com/Alpha110R/Draw-Guess-Full/assets/68230416/54cd6a7f-2d5e-46e6-af0b-2b2d5b214c94

Welcome page:

![image](https://user-images.githubusercontent.com/68230416/153002793-74d4a3e0-a0bc-4df3-98a2-34dd14f29c77.png)

Waiting page for the second player:

![image](https://user-images.githubusercontent.com/68230416/153004916-4473ec80-ad87-4a24-b7f3-a4a26e3fcda9.png)

Choose the word you want to draw and the second player will need the guess it:

![image](https://user-images.githubusercontent.com/68230416/153005089-058a1cf0-855b-4093-ba38-c1f55e771087.png)

Drawing view:

![image](https://user-images.githubusercontent.com/68230416/153005361-4a8e338a-fddf-4fc7-b0ba-237266d9d07b.png)

Guessing view:

![image](https://user-images.githubusercontent.com/68230416/153005473-0668b5ca-ab7e-448a-b6a5-854e45450e32.png)
