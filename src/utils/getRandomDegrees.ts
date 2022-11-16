import {calculateDegrees} from "./calculateDegrees";

export const getRandomDegrees = () =>  Math.floor(Math.random() * 360 + calculateDegrees(2000, 8000))
