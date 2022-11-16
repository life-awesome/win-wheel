import React, {useEffect, useRef, useState} from 'react';
import {hexToHSL} from "../../utils/hexToHSL";
import {IRouletteProps} from "./types";
import SectorRoulette from "./Sector/Sector";
import {getRandomDegrees} from "../../utils/getRandomDegrees";
import "./Roulette.css";


const Roulette = ({options, isSpin, endGame}: IRouletteProps) => {
    const wheelWrapper = useRef<HTMLDivElement>(null);
    const ref = useRef<HTMLUListElement>(null);
    const [rotation, setRotation] = useState(0);
    const degreesCircle = 360;
    const prizeOffset = Math.floor((degreesCircle / 2) / options.length);

    useEffect(() => {
        const value = getRandomDegrees()
        if (isSpin) {
           setRotation(value)
        }
    }, [isSpin])

    const getIndexPrize = (degrees: number): number => Math.floor(degrees / (degreesCircle / options.length));

    const endSpin = () => {
        setRotation(rotation % 360)
        return endGame && endGame(getIndexPrize(rotation % 360))
    };

    return (
        <div id={"wrapper"}>
            <div
                className={`deal-wheel${isSpin ? " is-spinning" : ""}`}
                ref={wheelWrapper}
            >
                <ul
                    className={`spinner${options.length > 1 ? " hasChild" : ""}`}
                    ref={ref}
                    onTransitionEnd={endSpin}
                    style={{
                        background: `conic-gradient(from -90deg, ${options
                            .map(
                                ({style}, i) =>
                                    `${hexToHSL(style.backgroundColor)} 0 ${
                                        (100 / options.length) * (options.length - i)
                                    }%`
                            )
                            .reverse()})`,
                        transform: `rotate(${rotation}deg)`,
                        border: "1px solid black",
                    }}
                >
                    {options.map(({option, style, id}, i) => {
                        const rotation = (((degreesCircle / options.length) * i) * -1) - prizeOffset;
                        return (
                            <SectorRoulette
                                id={id}
                                className={`prize ${options.length < 2 ? "last" : ""}`}
                                option={option}
                                rotation={rotation}
                            />
                        );
                    })}
                </ul>
                <div className="ticker"></div>
            </div>
        </div>
    );
};

export default Roulette;