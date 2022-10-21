class Player1 {
  constructor(playerModel) {
    this.playerModel1 = playerModel;
    this.y = 4;
    this.x = 2;
  }

  writePlayer1ModelToDataGrid(dataGrid) {
    this.playerModel1.map((row, i) => {
      row.map((cell, j) => {
        if (cell == 1) {
          dataGrid[this.x + j][this.y + i] = cell;
        }
      });
    });
  }

  clearPlayer1ModelFromDataGrid(dataGrid) {
    this.playerModel1.map((row, i) => {
      row.map((cell, j) => {
        if (cell == 1) {
          dataGrid[this.x + j][this.y + i] = 0;
        }
      });
    });
  }
}
