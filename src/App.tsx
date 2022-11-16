import Roulette from "./core/Roulette/Roulette";
import {useState} from "react";
import {IRouletteOptions} from "./core/Roulette/types";

const App = () => {
    const array: IRouletteOptions[] = [
        {id: 1, style: {backgroundColor: "#ccc"}, option: "3"},
        {id: 2, style: {backgroundColor: "#0c0"}, option: "2"},
        {id: 3, style: {backgroundColor: "#2c5"}, option: "1"},
    ];
    const [isSpin, setIsSpin] = useState<boolean>(false)

    const startGame = () => {
        setIsSpin(p => true)
    }
    const endGame = (index: number) => {
        setIsSpin(p => false)
        console.log('index', index)
    }

    return (
        <div>
            <Roulette options={array} endGame={endGame} isSpin={isSpin}/>
            <button onClick={startGame}>click</button>
        </div>
    );
};

export default App;
