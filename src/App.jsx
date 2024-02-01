import { useState } from 'react' /*Имортируем useState в React. И*/
import './App.css' /*Импортируем стили */

function Square({ value, onSquareClick /*Передача свойства Value и OnSquareClick, является props.*/}) {
  return (
    <button className="square"/*Реквизит или свойство, которое сообщается CSS для оформления кнопки*/ onClick={onSquareClick /*При нажатие на квадрат будет вызываться функция*/} > 
    {value /*Выводим переменную Value, которая хранит значения(прописываем фигурные скобки)Также эти значения внтури JSX, являются  props*/} 
    </button> /*Является JSX элементом. Комбинация кода JS и HTML-тегов*/ 
  );
}

function Board({xIsNext, squares, onPlay}) /*Функционал Board*/{
  function handleClick(i)/*компонент функции handleClick*/ {
    if (calculateWinner(squares) || squares[i])/*Проверка, выиграет игрок или нет.*/{
      return/*Что следует после, возвращается, как значения функций. Если квадрат заполнен, то return запустит функцию handleClick раньше, чем доска успеет обновиться*/;
    }
    const nextSquares = squares.slice()/*Создает копию массива nextSquares с помощю метода array в JS slice. Slice - метод позволяет вернуть новый массив, который содержит копии элементов из исходного массива*/;
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    /*Если массив nextSquares имеет ход X, то следующий ход будет O. i - аргумент, который принимает индекс квадрата(будет обновляться любой квадрат).*/
    onPlay(nextSquares);
  }
  
  const winner = calculateWinner(squares); /*переменная, значения которой не изменяются*/;
  let status/*переменная, которая будет выводить значения внутри блока*/;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? 'X' : 'O');
  }
/*Если победитель выиграет в блоке выведиться "Winner: X или O", а если ход продолжается, то будет "Next player: X или O"*/
  return /*Что следует после, возвращается, как значения функций*/(
    /*используем данные скобки, чтобы получить несколько смежных фрагментов*/ <> 
    <div className="status">{status/*выводим status*/}</div>
    <div className="board-row"/*Свойство CSS*/>
     <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
     <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
     <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className="board-row"/*Свойство CSS*/>
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className="board-row"/*Свойство CSS*/>
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
    </> /*используем данные скобки, чтобы получить несколько смежных фрагментов*/
  );
  }

export default function Game() /*Сообщает о том, что данная функция является основной в этом коде, и становиться доступной за пределами файлов*/ {
  const [xIsNext, setXIsNext] = useState(true); /*объявляет, что X будет ходить первым*/
  const [history, setHistory] = useState([Array(9).fill(null)]) /*Создается массив из 9 элементов, который присвает значение null.useState объявляет вокруг squares переменную состояние,для которого изначально задано значение из массива */;
  const currentSquares = history[history.length - 1];
  function handlePlay(nextSquares){
    setHistory([...history, nextSquares]); /*Cоздается новый массив, который содержит все элементы history, то есть он будет их перечислять*/
    setXIsNext(!xIsNext);
  }
  return ( /*Что следует после, возвращается, как значения к функциям*/
  <div className="game">
    <div className="game-board">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
    </div>
    <div className="game-info">
      <ol>{/*meeeow*/}</ol>
    </div>
  </div>
 )
  }

function jumpTo(nextMove) {
//todo
}

 function calculateWinner (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

