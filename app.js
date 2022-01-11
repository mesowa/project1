function init() {

  // VARIABLES
  const height = 6
  const width = 7
  const cellCount = height * width
  const cells = []

  const isGameOver = document.querySelector('#gameover')
  const winnerIs = document.querySelector('#winner-status')
  const resetGame = document.querySelectorAll('.reset')
  

  const rowOneClass = 'rowOne'
  const rowTwoClass = 'rowTwo'
  const rowThreeClass = 'rowThree'
  const rowFourClass = 'rowFour'
  const rowFiveClass = 'rowFive'
  const rowSixClass = 'rowSix'

  const column0Class = 'column0'
  const column1Class = 'column1'
  const column2Class = 'column2'
  const column3Class = 'column3'
  const column4Class = 'column4'
  const column5Class = 'column5'
  const column6Class = 'column6'
  
  // ELEMENTS
  const grid = document.querySelector('.grid')

  let currentPlayer = 'playerOne'
  
  let latestDrop
  
  // CREATE GRID (gameboard)
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      cell.setAttribute('data-id', i)
      grid.appendChild(cell)
      cells.push(cell)
    }
    defineRowClasses()
    defineColumnClasses()
  }
  
  // ARRAYS - ROWS (width)
  
  const rowOne = [0, 1, 2, 3, 4, 5, 6]
  const rowTwo = [7, 8, 9, 10, 11, 12, 13]
  const rowThree = [14, 15, 16, 17, 18, 19, 20]
  const rowFour = [21, 22, 23, 24, 25, 26, 27]
  const rowFive = [28, 29, 30, 31, 32, 33, 34]
  const rowSix = [35, 36, 37, 38, 39, 40, 41]
    
  // ARRAYS - COLUMNS (height)
  
  const column0 = [0, 7, 14, 21, 28, 35]
  const column1 = [1, 8, 15, 22, 29, 36]
  const column2 = [2, 9, 16, 23, 30, 37]
  const column3 = [3, 10, 17, 24, 31, 38]
  const column4 = [4, 11, 18, 25, 32, 39]
  const column5 = [5, 12, 19, 26, 33, 40]
  const column6 = [6, 13, 20, 27, 34, 41]
  
  // DEFINE ROW ARRAYS (width)
  // adding class to each row to work with win function
  function defineRowClasses() {
    rowOne.forEach(cell => {
      cells[cell].classList.add(rowOneClass)
    })
    rowTwo.forEach(cell => {
      cells[cell].classList.add(rowTwoClass)
    })
    rowThree.forEach(cell => {
      cells[cell].classList.add(rowThreeClass)
    })
    rowFour.forEach(cell => {
      cells[cell].classList.add(rowFourClass)
    })
    rowFive.forEach(cell => {
      cells[cell].classList.add(rowFiveClass)
    })
    rowSix.forEach(cell => {
      cells[cell].classList.add(rowSixClass)
    })
  }
  
  // DEFINE COLUMN ARRAYS (height)
  //adding class to column to work with win function 
  function defineColumnClasses() {
    column0.forEach(cell => {
      cells[cell].classList.add(column0Class)
    })
    column1.forEach(cell => {
      cells[cell].classList.add(column1Class)
    })
    column2.forEach(cell => {
      cells[cell].classList.add(column2Class)
    })
    column3.forEach(cell => {
      cells[cell].classList.add(column3Class)
    })
    column4.forEach(cell => {
      cells[cell].classList.add(column4Class)
    })
    column5.forEach(cell => {
      cells[cell].classList.add(column5Class)
    })
    column6.forEach(cell => {
      cells[cell].classList.add(column6Class)
    })
  }


  //to display winner
  function gameEnd() {
    isGameOver.style.opacity = '1'
    winnerIs.innerHTML = currentPlayer
  }

  // CHECKING WIN
  function checkHorizontalWin() {
    //if cell to rhs has classlist of player just played, check the following cell (up until 4 total for win)

    let currentSquare = latestDrop
    let counter = 0
    while (cells[currentSquare].classList.contains(currentPlayer)) {
      counter++
      currentSquare++
    }
    if (counter >= 4) {
      gameEnd()
    } else {
      currentSquare = latestDrop - 1
      while (cells[currentSquare].classList.contains(currentPlayer)) {
        counter++
        currentSquare--
      }
      if (counter >= 4) {
        console.log('win')
        gameEnd()
      }
    }
  }
  
  function checkVerticalWin() {
    //same as above - check cell to rhs, if has same classlist as player just gone, check the next one (until 4 total for win)
    let currentSquare = latestDrop
    let counter = 0
    console.log(currentSquare, cells.length)
    while (currentSquare < cells.length && cells[currentSquare].classList.contains(currentPlayer)) {
      counter++
      currentSquare += width
    }
    if (counter >= 4) {
      gameEnd()
    }
  }
  
  function resetPage() {
    location.reload()
  }
  
  //loop through all cells in chosen (clicked) column from bottom to top, drop counter in cell that has no class

  function playerColumnSelect(event) {
    const currentTopCell = event.target.dataset.id
    const clickedCellColumn = event.target.classList[1]
    console.log(clickedCellColumn)
    let cellToFill
    if (clickedCellColumn === 'column0') {
      cellToFill = column0[column0.length - 1]
      console.log(cellToFill)
      console.log(column0.length - 1)
      latestDrop = column0.pop()
    } else if (clickedCellColumn === 'column1') {
      cellToFill = column1[column1.length - 1]
      console.log(column1.length - 1)
      latestDrop = column1.pop()
    } else if (clickedCellColumn === 'column2') {
      cellToFill = column2[column2.length - 1]
      latestDrop = column2.pop()
    } else if (clickedCellColumn === 'column3') {
      cellToFill = column3[column3.length - 1]
      latestDrop = column3.pop()
    } else if (clickedCellColumn === 'column4') {
      cellToFill = column4[column4.length - 1]
      latestDrop = column4.pop()
    } else if (clickedCellColumn === 'column5') {
      cellToFill = column5[column5.length - 1]
      latestDrop = column5.pop()
    } else if (clickedCellColumn === 'column6') {
      cellToFill = column6[column6.length - 1]
      latestDrop = column6.pop()
    }

  
    cells[cellToFill].classList.add(currentPlayer)
    checkHorizontalWin()
    checkVerticalWin()

    //check which player goes next - using a ternery (if p1, change to p2, if not (i.e. p2, change to p1)  
    currentPlayer = currentPlayer === 'playerOne' ? 'playerTwo' : 'playerOne'
    console.log(currentPlayer)
    cells[currentTopCell].classList.remove('playerOne', 'playerTwo')
      
  }
  
  createGrid()
  
  // EVENTS
  //drop counter in selected column
  //refresh/reset page when button clicked
  rowOne.forEach(cell => cells[cell].addEventListener('click', playerColumnSelect))
  resetGame.forEach(button => {
    button.addEventListener('click', resetPage)
  })
  
}
  
window.addEventListener('DOMContentLoaded', init)