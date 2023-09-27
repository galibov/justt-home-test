import { FC } from "react";
import {TableRow} from "@/app/components/Table/TableRow";
import {Character} from "@/app/interfaces";

interface TableProps {
  characters: Character[];
}
export const Table: FC<TableProps> = ({ characters }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>I.d</th>
            <th>Name</th>
            <th>Species</th>
            <th>Status</th>
            <th>Origin</th>
            <th>Gender</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {/* rows */}
          {
            characters.map(character => (
              <TableRow character={character} key={character.id}/>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};
