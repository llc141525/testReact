import Button from '@mui/material/Button'
import { useState } from 'react'
interface Square{
    value: string;
    onSquaresClick: ()=>void
}
function Square({ value, onSquaresClick }:Square) {
    return (
        <Button
            variant="outlined"
            color="primary"
            onClick={onSquaresClick}
            sx={{ minHeight: '40px' , borderRadius:0}}
            
        >
          {value}
        </Button>
    )
}

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [count, setCount] = useState(0)
    // const [ setHistory] = useState(Array(9).fill(null))
    function handleClick(i: number) {
        const nextSquares = squares.slice()
        if (count % 2 == 0 && squares[i] === null) {
            setCount(count+1)
            nextSquares[i] = 'X';
        } else if (squares[i] === null) {
            nextSquares[i] = 'O'
            setCount(count+1)
        }
        console.log(nextSquares);
        setSquares(nextSquares)
    }
    // function handlePlay(next:string, i:number) {
    //     setHistory([...squares, next])
    //     setCount(i)
    // }
    
    return (
        <>
            下一个 : {count %2 === 0 ? 'X' : 'O'}
            <div className="board-row">
                <Square value={squares[0]} onSquaresClick={()=>handleClick(0)} />
                <Square value={squares[1]} onSquaresClick={()=>handleClick(1)}/>
                <Square value={squares[2]} onSquaresClick={()=>handleClick(2)}/>
        </div>
            <div className="board-row">
                <Square value={squares[3]} onSquaresClick={()=>handleClick(3)}/>
                <Square value={squares[4]} onSquaresClick={()=>handleClick(4)}/>
                <Square value={squares[5]} onSquaresClick={()=>handleClick(5)}/>
        </div>
            <div className="board-row">
                <Square value={squares[6]} onSquaresClick={()=>handleClick(6)}/>
                <Square value={squares[7]} onSquaresClick={()=>handleClick(7)}/>
                <Square value={squares[8]} onSquaresClick={()=>handleClick(8)}/>
            </div>
            <div>
                
            </div>
        </>
    )
}

export default Board