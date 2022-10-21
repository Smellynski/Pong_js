class Ball {
  constructor(ballModel) {
    this.ballModel = ballModel;
    this.y = 7;
    this.x = 19;
  }

  writeBallToDataGrid(dataGrid) {
    this.ballModel.map((row, i) => {
      row.map((cell, j) => {
        if (cell == 2) {
          dataGrid[this.x + j][this.y + i] = cell;
        }
      });
    });
  }
  clearBallFromDataGrid(dataGrid) {
    this.ballModel.map((row, i) => {
      row.map((cell, j) => {
        if (cell == 2) {
          dataGrid[this.x + j][this.y + i] = 0;
        }
      });
    });
  }
}
