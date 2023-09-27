import {FC} from "react";
import {Character} from "@/app/interfaces";

interface TableRowProps {
    character: Character;
}
export const TableRow: FC<TableRowProps> = ({ character }) => {
    return (
        <tr className='even:bg-purple-50'>
            <th>{character.id}</th>
            <td>{character.name}</td>
            <td>{character.species}</td>
            <td>{character.status}</td>
            <td>{character.origin.name}</td>
            <td>{character.gender}</td>
            <td>Blue</td>
        </tr>
    )
}
