# Project0
Tic Tac Toe Game

On Monday when I got the Tic Tac Toe brief, I had no idea where to start. I had designed websites before that I have asked developers to build, and created many blogs, 
and changed the front end using templates but this time I had to build that development brief myself from scratch. 

On Monday afternoon I worked with Sylvain and he helped me see that I need to first layout the design of my board 
so that any further information correlated to the code I wrote. It clicked that obviously a wireframe is the best place to start, but again, when you have a blank CSS, JS and HTML sheet - it is not incredibly obvious where to begin. 

We used a HTML 'table' layout to create the board and gave the entire table (the board) an ID so we could style it later. We also divided the horizontal rows into separate div tags to allow individual styling of the board edges.

I continued to work with Sylvain on Tuesday. I understood the logic behind what we had to do, but given I had only a few days experience with JQuery I found it hard to work out the syntax of code we needed to solve this problem using this language. 

Once we worked out the way to decide a player's move and then also the logic behind how to 'win' a game it started to become 
clear how we needed to arrange the data and which functions we needed to create. The challenge was writing this is Jquery and not just Javascript. However the good thing about JQuery is that once you understand it, things become a lot easier.

Sylvain and I got our game working for 2 players at which point I wanted to experiment with different features on my own. 
Because I was now more familiar with JQuery by now, after writing the player move functions 
I didn't have much problem adding the features.

The features I added were as follows:

Toggleclass to display whose turn it was (which was a JQuery function that pretty much turned the text on or off depending on 
which player move it was (0 or 1).

Using Jquery I created a New Game button work that cleared the board when pressed 

I hard coded the different winning variants to change the colour of the box background if a player got three in a row. I did it this way because our function only determined a win ( ie true or false), but was unable to determine if X or O won. I was happy with that as I didn't want to have to write this code twice for X and O winning scenarios. It may limit future options, but I was ok with that, it's a nine board Tic Tac Toe game.

I added a JQuery function that displayed which player won, if they got three in a row. 

When a player won I also displayed the text Game Over. 

I added a scoreboard for each player that increased a count for each player depending on who won.

All of these events were done using the hidden / visible CSS & JQuery commands. It became a bit confusing after a while what was on or off (if I went back to the code), but again, given this was my fifth day of JQuery, I let myself off.

I started to play around with the CSS - something I also had little experience with, and managed to add and center a background, 
with respect to web client responsiveness and also wanted to centre the gameboard, which I did using margin auto for the container it was in.

To get the scoreboard text sitting to the right of the board, I listed the board container <div> itself as position relative and then positioned the score board as position absolute to the right and the Player Move / Game Over text to the left of the board, also as a position absolute.

Again there are probably much better ways to do this, but I wanted to experiment with CSS and get familiar with using it in this way.

Finally I was happy with what I had created from scratch but now I understood really well how the program was running, I wanted to make an AI version. Instead of writing out the long code that would create the function for the computer AI, I looked around on Google and found a JS Fiddle example where a person had approached the problem and arranged their variables and data in a very similar way to mine. So I copied the logic for a 9 board game which basically told the computer to choose a square if the other two squares were occupied by the other player. I did this rather than random assignment because otherwise the AI would have had no strategic intelligence and the player would almost always win. 

It is still possible to beat the computer, in my game, which I think is a good thing since playing a game you can't win isn't really fun for the user. I didn't try to create different difficulty levels, but I would like to perhaps if I revisit this in the future.

Overall it is far from perfect, but I'm really happy with what I have achieved given this is only my third week at General Assembly, and I had no experience with JQuery before last Friday, or CSS and Javascript prior to 3 weeks ago.

Special thanks to Joel Turnball and Jack Jeffress at General Assembly who have been awesome teachers and really helped me to debug and get my code working when I had issues. 

