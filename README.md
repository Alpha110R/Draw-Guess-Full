# Draw-Guess-Full

The Draw & Guess game is a real-time game for two players. The server chooses which player will be the painter and the second player will be the guesser.

The painter chooses a word from the diffrent options and difficulty, then he will need to draw the best way to describe the word.

In real-time the guesser sees the drawing and the painter sees the guess that the gusser writes.

When the guesser guess the right word that the painter chose, the role for the player switch.

I used:

Node.js + express + React.js + Socket.IO

To start the app you will need to this for both, client and server:
1. npm install

2. npm start

3.The app is for the phone interface and touch. You can draw on the canvas only at "phone mode"
(Inspect -> Enter the tablet/phone mode)

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
