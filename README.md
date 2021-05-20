
# Snake Game
   The snake game is a classic game that used to be the pre-loaded game in many of the early mobile phones like Nokia. In this project, we are going to use html and javascript to make this game. 
   
   This project is divided into two tasks. 
   
   1. [] Make this game that user can control the movement of the snake by keyboard.
   2. [] Based on the first task, we will find an algorithm and train an AI model to play this game.

___

## Overview
  The game consists of three main parts: 

   1. a board 

   2. a snake 

   3. food


  Food, represented by a single block, will be randomly displayed within the square board. The player controls the movement of the snake that is represented by lines of blocks to touch the food to eat it. The lengths of the snake will grow as it eats more food. The game will end when the snake reaches the boarder of the board or its head touches its body. 
   
   For more information, checkout the link below.  
   [Overview of Snake game](https://www.cs.ubc.ca/~acton/techTrek/Snake/SnakeWorksheet.pdf)
___

## Board 

  1. Size: 16 * 16 cells and each    cell is 20px * 20px
  2.  Background color: lightblack and lightgray alternating. The board looks similar to the following one:                                   
  [Image of the board](https://www.google.com/url?sa=i&url=https%3A%2F%2Fgeekrodion.medium.com%2Fsnake-game-with-rust-javascript-and-webassembly-part-5-7c114ce4583a&psig=AOvVaw0bCn6bzZx4rE8p_cua_wUA&ust=1621575396104000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIjxmJ7F1_ACFQAAAAAdAAAAABAM)
  
  3.  Border color: white

___
## Snake
On the board, there is a chain of blocks that represents the snake. It can change direction and is always moving.

   1. The snake is controlled by 4 keys: up, down, left, right.
   2. Condition of death of snake: 
      
      1. The head of the snake touches the body of the snake.
    
      2. Or the head of the snake goes outside of the boarder wall.

  3.  When the game start: 
      
      The position of the snake is random, and we have two options for the shape, size and length of the snake: 
      
        **We choose option 1.**
      
        
      * **Option 1**: 
        
        1. **The snake does not move until putting any key.**
        2. **The initial length of the snake is 1.**
      
      * Option 2
        
        1. The initial position of the snake is at least 3 cell (inclusive) 
        2. The initial length of the snake is 5 in the straight line. 
        3.  The original direction of the snake is towards the safest direction.
  
  4.  How snake grows: 
    
      We have two options below: 
        
        we choose **Option2.**

      * Option 1:
         
         When the snake grows, the tail of the snake immediately increments by 1.

      * **Option2**:

         **When the snake grows, the tail of the snake increments by 1 on the next move.**

        


## Food
The food will appear random spot on the board that does not overlaps the snake.
      
   1. The food will only appear once at a time.
   2. The food is represented as a red block.
   3. When the snake eats the food(head overlaps the food), the food disappear and the new food appears. 
   4. When the game starts, there is one food available alreay.


## Other features

  1.  A counter shows the steps the snake has travelled so far. 
  2. A constant shows the speed of the snake.
  3. A variable shows the time the game has been going on 
  4. A variable shows the current lengths of the snake



