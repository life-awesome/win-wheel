import React, {FC} from 'react';

interface IProps {
    id: number | string;
    className: string;
    option: string;
    rotation: number;
}

const SectorRoulette: FC<IProps> = ({id, className, option,rotation}) => {
    return (
        <li
            key={id}
            className={className}
            // @ts-ignore
            style={{ "--rotate": `${rotation}deg` }}
        >
            <span className="text">{option}</span>
        </li>
    );
};

export default SectorRoulette;