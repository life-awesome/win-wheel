export interface IRouletteProps {
    options: IRouletteOptions[];
    isSpin: boolean;
    endGame: Function
}
export interface IRouletteOptions {
    id: string | number;
    style: IRouletteTriangleStyle;
    option: string;
}
interface IRouletteTriangleStyle {
    backgroundColor: string;
}
