class GameModel {
  constructor() {
    this.dataGrid = this.createDataGrid();
    this.player1 = null;
    this.player2 = null;
    this.ball = null;
    this.grid = this.createGrid();
  }

  createDataGrid() {
    let cells = document.querySelectorAll(".cell");
    let grid = [];
    for (let i = 0; i < cells.length; i++) {
      let x = i % 40;
      let y = Math.floor(i / 40);
      // Wenn in noch kein Array in grid[x] initialisiert wurde, tun wir das.
      if (!grid[x]) {
        grid[x] = [];
      }
      grid[x][y] = 0;
    }
    return grid;
  }

  createGrid() {
    let cells = document.querySelectorAll(".cell");
    let grid1 = [];
    for (let i = 0; i < cells.length; i++) {
      let cell = cells[i];
      let x = i % 40;
      let y = Math.floor(i / 40);
      // Siehe in createDataGrid
      if (!grid1[x]) {
        grid1[x] = [];
      }
      grid1[x][y] = cell;
    }
    return grid1;
  }

  renderState() {
    for (let i = 0; i < this.dataGrid.length; i++) {
      for (let j = 0; j < this.dataGrid[0].length; j++) {
        let cell = this.grid[i][j];
        let cellValue = this.dataGrid[i][j];
        if (cellValue >= 1) {
          this.colorCell(cell, "white");
        } else {
          this.colorCell(cell, "black");
        }
      }
    }
  }

  colorCell(cell, color) {
    cell.style.background = color;
  }

  addPlayer(player, playerNumber) {
    switch (playerNumber) {
      case 1:
        model.player1 = player;
        this.player1.writePlayer1ModelToDataGrid(this.dataGrid);
        break;
      case 2:
        model.player2 = player;
        this.player2.writePlayer2ModelToDataGrid(this.dataGrid);
        break;
    }
  }

  addBall(ball) {
    model.ball = ball;
    this.ball.writeBallToDataGrid(this.dataGrid);
  }

  ballMovement(direction) {
    let dir = direction;
    switch (dir) {
      case 1:
        this.ballMovementPlus();
        break;
      case 2:
        this.ballMovementMinus();
        break;
      default:
        if (dir != 1 && dir != 2) {
          this.ballMovementMinus();
        }
    }
  }

  ballMovementMinus() {
    console.log("ich bins minus");
    if (!this.ballCollision(1)) {
      model.ball.clearBallFromDataGrid(this.dataGrid);
      [this.ball.x, this.ball.y] = [(this.ball.x -= 1), (this.ball.y -= 1)];
      this.addBall(this.ball);
      this.renderState();
    } else {
      this.ballMovement(1);
      return false;
    }
    // left + top + 1
  }

  ballMovementPlus() {
    console.log("ich bins plus");
    if (!this.ballCollision(2)) {
      model.ball.clearBallFromDataGrid(this.dataGrid);
      [this.ball.x, this.ball.y] = [(this.ball.x += 1), (this.ball.y += 1)];
      this.addBall(this.ball);
      this.renderState();
    } else {
      this.ballMovement(2);
    }
    // right + down + 2
  }

  ballCollision(direction) {
    switch (direction) {
      case 1:
        if (this.ball.x <= 0 || this.ball.y <= 0) {
          console.log("1");
          return true;
        } else {
          return false;
        }
      case 2:
        if (this.ball.y >= 40 || this.ball.x >= 40) {
          console.log("2");
          return true;
        } else {
          return false;
        }
    }
    return false;
  }

  playerMovement(player, direction) {
    switch (player) {
      case 1:
        switch (direction) {
          case 1:
            if (!this.playerCollision(1, 1)) {
              model.player1.clearPlayer1ModelFromDataGrid(this.dataGrid);
              this.player1.y -= 1;
              this.addPlayer(this.player1, 1);
              this.renderState();
            }
            break;
          case 2:
            if (!this.playerCollision(1, 2)) {
              model.player1.clearPlayer1ModelFromDataGrid(this.dataGrid);
              this.player1.y += 1;
              this.addPlayer(this.player1, 1);
              this.renderState();
            }
            break;
        }
        break;
      case 2:
        switch (direction) {
          case 1:
            if (!this.playerCollision(2, 1)) {
              model.player2.clearPlayer2ModelFromDataGrid(this.dataGrid);
              this.player2.y -= 1;
              this.addPlayer(this.player2, 2);
              this.renderState();
            }
            break;
          case 2:
            if (!this.playerCollision(2, 2)) {
              model.player2.clearPlayer2ModelFromDataGrid(this.dataGrid);
              this.player2.y += 1;
              this.addPlayer(this.player2, 2);
              this.renderState();
            }
            break;
        }
    }
  }

  playerCollision(player, direction) {
    switch (player) {
      case 1:
        switch (direction) {
          case 1:
            if (this.player1.y - 1 < 0) {
              return true;
            }
            break;
          case 2:
            if (this.player1.y + 1 > 11) {
              return true;
            }
            break;
        }
        break;
      case 2:
        switch (direction) {
          case 1:
            if (this.player2.y - 1 < 0) {
              return true;
            }
            break;
          case 2:
            if (this.player2.y + 1 > 11) {
              return true;
            }
            break;
        }
        return false;
    }
  }
}
