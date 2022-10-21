class Player2 {
  constructor(playerModel) {
    this.playerModel2 = playerModel;
    this.y = 4;
    this.x = 38;
  }

  writePlayer2ModelToDataGrid(dataGrid) {
    this.playerModel2.map((row, i) => {
      row.map((cell, j) => {
        if (cell == 1) {
          dataGrid[this.x + j][this.y + i] = cell;
        }
      });
    });
  }

  clearPlayer2ModelFromDataGrid(dataGrid) {
    this.playerModel2.map((row, i) => {
      row.map((cell, j) => {
        if (cell == 1) {
          dataGrid[this.x + j][this.y + i] = 0;
        }
      });
    });
  }
}
