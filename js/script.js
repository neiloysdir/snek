 // configuring board
 const width = 20; // Grid width
 const height = 20; // Grid height

 const speed = 200; // time it takes in miliseconds for the snake to take a step in the grid
 let fadeSpeed = 5000; // time it takes in miliseconds the grid to disappear (initially)
 let fadeExponential = 1.024; // after each score it will gradually take more time for the grid to fade
 const contrastIncrease = 0.5; // contrast you gain after each score
 const color = "black"; // Primary color

 // Setup: Build up the grid
 // The grid consists of (width x height) tiles
 // The tiles take the the shape of a grid using CSS grid
 // The tile can represent a part of the snake or an apple
 // Each tile has a content div that takes an absolute position
 // The content can fill the tile or slide in or out from any direction to take the shape of a transitioning snake head or tail
 
 const grid = document.querySelector(".grid");
 for (let i = 0; i < width * height; i++) {
   const content = document.createElement("div");
   content.setAttribute("class", "content");
   content.setAttribute("id", i); // Just for debugging, not used

   const tile = document.createElement("div");
   tile.setAttribute("class", "tile");
   tile.appendChild(content);

   grid.appendChild(tile);
 }

 const tiles = document.querySelectorAll(".grid .tile .content");

 const containerElement = document.querySelector(".container");
 const noteElement = document.querySelector("footer");
 const contrastElement = document.querySelector(".contrast");
 const scoreElement = document.querySelector(".score");