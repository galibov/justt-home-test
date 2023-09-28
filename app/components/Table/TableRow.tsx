import React, { FC, useState } from "react";
import { Character } from "@/app/interfaces";
import Image from "next/image";
import {CharacterCard} from "@/app/components/Card/CharacterCard";

interface TableRowProps {
    character: Character;
}

export const TableRow: FC<TableRowProps> = ({ character }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <tr className='even:bg-indigo-50 odd:bg-white '>
                <th>{character.id}</th>
                <td>{character.name}</td>
                <td>{character.species}</td>
                <td>{character.status}</td>
                <td>{character.origin.name}</td>
                <td>{character.gender}</td>
                <td className='py-1'>
                    <button
                        className={`btn ${isVisible ? 'btn-circle bg-indigo-700' : 'btn-ghost'}`}
                        onClick={handleButtonClick}
                    >
                        <Image
                            width={'15'}
                            height={'15'}
                            src={isVisible ? '/up.svg' : '/down.svg'}
                            alt={'open-close'}
                        />
                    </button>
                </td>

            </tr>
            {isVisible &&
                <tr>
                    <td colSpan={7} className='w-full py-10 bg-white'>
                        <div className='w-full'>
                            <CharacterCard character={character} />
                        </div>
                    </td>
                </tr>
            }
        </>
    );
};
