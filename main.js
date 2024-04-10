import './style.css'

let allTheTiles = document.querySelector(".allTheTiles");

  const whiteTile = document.createElement("div");
  whiteTile.classList.add("white");
  allTheTiles.appendChild(whiteTile);

  const blackTile = document.createElement("div");
  blackTile.classList.add("black");
  whiteTile.appendChild(blackTile);